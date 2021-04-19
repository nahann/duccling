module.exports = {
  name: "yoda",
  description:
    "Turn your sentence into yoda speak,using this command will.(not completely accurate)",
  aliases: ["yodaspeak", "ys"],
  async run(bot, message, args) {
    const half = args.length / 2;
    const first = args.splice(0, half);
    message.channel.send(`${args.join(" ")}, ${first.join(" ")}.`);
  },
};
