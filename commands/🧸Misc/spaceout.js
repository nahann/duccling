module.exports = {
  name: "space",
  aliases: ["sp", "spaced", "spaceout"],
  description: "s  p  a  c  e  s   o  u  t   y  o  u  r   t  e  x  t",
  async run(bot, message, args) {
    const a = args.join(" ").split("").join("  ");
    message.channel.send(a);
  },
};
