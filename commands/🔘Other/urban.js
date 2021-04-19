const ud = require("urban-dictionary");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "urban",
  aliases: ["urb", "define", "dictionary"],
  description: "urban dictionary",
  run: async (bot, message, args) => {
    ud.define(args.join(" ")).then((resul) => {
      const e = new MessageEmbed();
      e.setTitle(resul[0].word);
      e.setDescription(
        `${resul[0].definition}\n\n=={EXAMPLES}==${resul[0].example}`
      );

      e.setColor("RANDOM");

      message.channel.send(e);
      console.log(resul[0].word);
      console.log(resul[0].definition);
    });
  },
};
