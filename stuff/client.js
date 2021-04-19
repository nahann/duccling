const { Client, Collection } = require("discord.js");
const config = require("../config.json");
class Bot extends Client {
  constructor() {
    super({
      disableMentions: "everyone",
    });
    this.prefix = config.prefix;
    this.commands = new Collection();
    this.aliases = new Collection();
    super.u = super.user;
  }
}
module.exports = Bot;
