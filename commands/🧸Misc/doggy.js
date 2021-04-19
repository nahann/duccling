//https://dog.ceo/api/breeds/image/random
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "dog",
  aliases: ["puppy", "pup", "woof", "doggy"],
  description: "returns a random dog",
  run: async (bot, message, args) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((dog) => dog.json())
      .then((json) => {
        console.log(json);
        const e = new MessageEmbed()
          .setTitle("A dog for ya!")
          .setImage(json.message);
        message.channel.send(e);
      });
  },
};
