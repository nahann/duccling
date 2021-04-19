const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "afk",
  description: "sets your afk so people who ping you will be told not to",
  run: async (bot, message, args) => {
    const content = args.join(" ");
    await db.set(`afk-${message.author.id}+${message.guild.id}`, content);
    const embed = new MessageEmbed()
      .setDescription(`You have been set to afk\n**Reason :** ${content}`)
      .setColor("GREEN")
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel.send(embed);
  },
};
