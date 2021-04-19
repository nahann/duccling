module.exports = {
  name: "supercaps",
  aliases: ["caps"],
  description: "**TURNS YOUR MESSAGES INTO THIS**",
  async run(bot, message, args) {
    const a = `**${args.join(" ").toUpperCase()}**`;
    message.channel.send(a);
  },
};
