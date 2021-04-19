const { Collection, Discord, Client } = require("discord.js");
const db = require("quick.db");
const fs = require("fs");
const Bot = require("./stuff/client");
require("./Extend");
const bot = new Bot();
const config = require("/home/container/config.json");

bot.categories = fs.readdirSync("./commands/");
bot.cooldowns = new Collection();
["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});

bot.login(config.token);
