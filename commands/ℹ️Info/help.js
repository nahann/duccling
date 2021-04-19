const { MessageEmbed } = require("discord.js");
const { Collection } = require("discord.js");
module.exports = {
  name: "help",
  description: "did you just use this command on itself?",
  async run(client, message, args) {
    const { prefix } = require("/home/container/config.json");
    const data = [];
    const em = new MessageEmbed();
    const { commands } = message.client;
    const categories = new Collection();
    commands.forEach((command) => {
      if (command.category == "lesi") return;
      const category = categories.get(command.category);
      if (category) {
        category.set(command.name, command);
      } else {
        categories.set(
          command.category,
          new Collection().set(command.name, command)
        );
      }
    });
    const lines = categories.map(
      (category, name) =>
        `${name} Commands\n ${category.map((command) => command.name)}`
    );

    if (!args.length) {
      em.setTitle("Here's a list of all my commands:");
      em.setDescription(lines.join("\n"));
      em.setThumbnail(message.guild.iconURL({ dynamic: true, type: "png" }));
      em.setFooter(`Requested by ${message.author.tag}`);
      //`You can send \`${prefix}help [command name]\` to get info on a specific command!`

      return message.channel
        .send(
          `You can send \`${prefix}help [command name]\` to get info on a specific command!`,
          em,
          { split: true }
        )
        .then(() => {
          if (message.channel.type === "dm") return;
        })
        .catch((error) => {
          console.error(
            `Could not send help DM to ${message.author.tag}.\n`,
            error
          );
        });
    }
    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find((c) => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("that's not a valid command!");
    }

    data.push(`**Name:** ${command.name}`);

    if (command.aliases)
      data.push(`**Aliases:** ${command.aliases.join(", ")}`);
    if (command.description)
      data.push(`**Description:** ${command.description}`);
    if (command.usage)
      data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

    message.channel.send(data, { split: true });
  },
};
