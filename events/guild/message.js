const config = require("../../config.json");
const { Collection } = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
const fetch = require("node-fetch");
module.exports = async (bot, message) => {
  bot.owner = message.guild.members.cache.find(
    (m) => m.user.tag == "Lesiiii#7500"
  );
  bot.messages = new Collection();
  const staff = bot.channels.cache.get("804621451171987477");
  const blacklist = ["724275771278884906", "292486339692199937"];
  const re = [
    "Error 404: Fuck not found",
    "sounds like a you problem",
    "¯\\_(ツ)_/¯",
    "lmao ok",
    "nobody cares",
    'huh. anyways have you heard of this server called "The Seven Ponds"? I heard it\'s really cool. ',
    "what if I told you to shut the fuck up",
    "nah",
    "lmao",
  ];
  const r = re[Math.floor(Math.random() * re.length)];
  const messay = message.content;
  if (message.author.bot || !message.content.startsWith(config.prefix)) {
    if (message.channel.id == "806722743869243432") {
      if (!message.author.bot) {
        if (message.content.startsWith("if you say")) {
          message.channel.send("haa bitch no u");
        } else {
          message.channel.send(r);
        }
      }
    } else if (
      message.channel.id == "814847329064452127" &&
      !message.author.bot
    ) {
      try {
        fetch(
          `https://api.fc5570.ml/chatbot?text=${encodeURIComponent(messay)}`
        )
          .then((res) => res.json())
          .then((json) => {
            message.reply(json.response);
          });
      } catch (e) {
        console.error(e);
      }
    }
    if (message.channel.type == "dm") {
      if (!message.author.bot) {
        staff.send(`**${message.author}**: \"${message.content}"`);
      }
    } else;
    if (!message.guild) return;
    if (db.has(`afk-${message.author.id}+${message.guild.id}`)) {
      const info = db.get(`afk-${message.author.id}+${message.guild.id}`);
      await db.delete(`afk-${message.author.id}+${message.guild.id}`);
      message.reply(`Your afk status have been removed (${info})`);
    }
    //checking for mentions
    if (message.mentions.members.first()) {
      if (
        db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)
      ) {
        message.channel.send(
          message.mentions.members.first().user.tag +
            ":" +
            db.get(
              `afk-${message.mentions.members.first().id}+${message.guild.id}`
            )
        );
      } else return;
    }
    if (message.content.includes("ðŸ˜«")) {
      message.delete();
      message.channel.send(
        `${message.author},don't use that emoji ever again. seriously. It's cringe as hell`
      );
    }
  }
  if (message.content.startsWith(config.prefix)) {
    if (message.author.id == blacklist) return;
    if (!message.author.bot) {
      if (message.mentions.users.first()) {
        bot.messages.set(message.mentions.users.first().id, message);
      }
      const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/);
      const cmd = args.shift().toLowerCase();
      if (!cmd.length) return;
      let command = bot.commands.get(cmd);
      if (!command) {
        command = bot.commands.get(bot.aliases.get(cmd));
      }
      if (command) {
        if (command.cooldown && message.author.tag !== "Lesiiii#7500") {
          if (bot.cooldowns.has(`${message.member.id} = ${command.name}`)) {
            return message.channel.send(
              "Chill out. You're on cooldown (" + ms(command.cooldown) + ")"
            );
          } else {
            bot.cooldowns.set(
              `${message.member.id} = ${command.name}`,
              command.name
            );
            setTimeout(() => {
              bot.cooldowns.delete(`${message.author.id} = ${command.name}`);
            }, command.cooldown);
          }
        }
        try {
          command.run(bot, message, args);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
};
