const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "move",
  description: "move channel",
  async run(bot, message, args) {
    let channel = message.mentions.channels.first();
    if (!args.length) return;
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    const e = new MessageEmbed()
      .setTitle("Wrong channel")
      .setDescription(`What if we move to ${channel}?`);
    message.channel.send(e);
    channel.send(`Moving from ${message.channel}`);
  },
};
