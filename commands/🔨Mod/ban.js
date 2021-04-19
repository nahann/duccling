const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ban",
  description: "does this even need an explanation??",
  mod: true,
  async run(bot, message, args) {
    const mes = [
      "kindly screw off",
      "haha you got banned",
      "not a surprise",
      "wow. just wow",
    ];
    const me = mes[Math.floor(Math.random() * mes.length)];
    const hi = message.mentions.members.first();
    const ea = new MessageEmbed();
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      message.channel.send("no lol");
    } else {
      if (!hi) {
        if (!args.length) {
          message.channel.send("Please provide a valid mention or id");
        } else {
          bot.members
            .fetch(args[0])
            .then((user) => {
              ea.setTitle(`Banned ${user}`);
              ea.setDescription(`Sent Message ${me}`);
              user.send(me);
              const aa = args.splice(me.length);
              user.ban();
              message.channel.send(ea);
            })
            .catch((err) => {
              message.channel.send(
                `Something went wrong while dming that user:\n\`\`\`txt\n${err}\n\`\`\``
              );
            });
        }
      } else {
        hi.send(me);
        const a = args.splice(hi.length);
        hi.ban(args);
        ea.setTitle(`Banned ${hi}`);
        ea.setDescription(`Sent Message ${me}`);

        message.channel.send(ea);
      }
    }
  },
};
