module.exports = {
  name: "say",
  description: "you can't use this. probably",
  mod: true,
  async run(bot, message, args) {
    if (!message.member.roles.cache.has("804738031764242483")) {
      message.channel.send("no lol");
    } else {
      const arg = args.join(" ");
      message.delete();
      let ms = await message.channel.send("no snip");
      ms.delete();
      message.channel.send(arg);
    }
  },
};
