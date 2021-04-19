//807835571577028629 is updates channel
//805720850229493780 is suggestions
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "suggest",
  aliases: ["sug", "botsug", "sugmadig"],
  description:
    "will send your suggestions to <#805720850229493780> images don't work **yet** ",
  run: async (bot, message, args) => {
    const e = new MessageEmbed()
      .setTitle("New Suggestion!")
      .setDescription(args.join(" "))
      .setFooter("quacc");

    const channel = bot.channels.cache.get("805720850229493780");
    //d?eval message.author.displayAvatarURL({ dynamic: true, format: 'png' })
    channel
      .createWebhook(message.author.username, {
        avatar: message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
        }),
      })
      .then(async (webby) => {
        await webby.send(e).then((aa) => {
          aa.react("👍");
          aa.react("👎");
        });
        webby.delete();
        message.channel.send("Suggestion sent!");
      });
  },
};
