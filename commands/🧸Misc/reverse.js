//d?eval 'hello world'.split('').reverse().join('')
module.exports = {
  name: "reverse",
  description: "reverses your message",
  usage: "<message>",
  async run(bot, message, args) {
    const h = args.join(" ").split("").reverse().join("");
    message.channel.send(h);
  },
};
