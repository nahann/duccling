//https://random-d.uk/api/v2/random
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "ducc",
  aliases: ["randomducc", "duck", "rd", "randomduck"],
  description: "returns a random ducc",
  run: async (bot, message, args) => {
    fetch("https://random-d.uk/api/v2/random")
      .then((ducc) => ducc.json())
      .then((json) => {
        console.log(json);
        const e = new MessageEmbed()
          .setTitle("A ducc for ya!")
          .setImage(json.url);
        message.channel.send(e);
      });
  },
};
