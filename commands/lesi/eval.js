const { MessageEmbed } = require("discord.js");
const { Collection } = require("discord.js");
module.exports = {
  name: "eval",
  description: "h",
  aliases: ["e"],
  run: async (bot, message, args) => {
    const conso = [];
    function log(thing) {
      conso.push(JSON.stringify(thing));
    }
    const { ownerID } = require("../../config.json");
    message.client.owner = ownerID;
    if (message.author.id !== message.client.owner) return message.reply("lol");
    let evaled;
    try {
      evaled = await eval(args.join(" ").replace("console.log", "log"));
      let evale = undefined;
      if (evaled) {
        evale = JSON.stringify(evaled)
          .replace(/,/gi, ", \n")
          .replace(/{/gi, "{ \n")
          .replace(/}/gi, "\n }");
      }

      message.reply(
        new MessageEmbed()
          .setTitle("Evaled")
          .setDescription(`\`\`\`\n${evale}\n \`\`\``)
          .setColor("RANDOM")
      );
      if (conso.length) {
        message.reply(
          new MessageEmbed()
            .setTitle("Console")
            .setDescription(`\`\`\`${conso.join("\n")}\`\`\` `)
            .setColor("RANDOM")
        );
      }
    } catch (err) {
      console.error(err);
      message.reply(
        `there was an error during evaluation: \n \`\`\`\n${err}\n\`\`\``
      );
    }
  },
};
