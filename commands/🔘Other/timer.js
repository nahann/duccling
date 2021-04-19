module.exports = {
  name: "timer",
  description: "set a timer",
  usage: "<number><s/m/h/d>",
  async run(bot, message, args) {
    if (!args.length) return;
    let time;
    let numb = args[0].slice(-1);
    if ((numb = "s")) time = parseInt(args[0]) * 1000;
    if ((numb = "m")) time = parseInt(args[0]) * 60000;
    if ((numb = "h")) time = parseInt(args[0]) * 3600000;
    if ((numb = "d")) time = parseInt(args[0]) * 86400000;
    setTimeout(() => {
      message.channel.send(`Time is up ${message.author}!!!`);
    }, time);
  },
};
