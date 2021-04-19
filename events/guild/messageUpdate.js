const config = require("../../config.json");
module.exports = async (bot, oldMessage, message) => {
  if (!message.deleted) {
    if (bot.messages.has(message.author.id)) {
      const msg = bot.messages.get(oldMessage.author.id);
      if (message.content.startsWith("d?")) {
        if (!message.author.bot) {
          const args = message.content.slice("d?".length).trim().split(/ +/);
          const cmd = args.shift().toLowerCase();
          if (!cmd.length) return;
          let command =
            bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
          if (!command) {
            const best = [
              ...bot.commands.map((cmd) => cmd.name),
              ...bot.aliases.keys(),
            ].filter(
              (input) =>
                leven(cmd.toLowerCase(), input.toLowerCase()) <
                input.length * 0.4
            );
            const dym =
              best.length == 0
                ? ""
                : best.length == 1
                ? `Did you mean this? : **${best[0]}**`
                : `Did you mean one of these? : \n ${best
                    .slice(0, 3)
                    .map((value) => `**${value}**`)
                    .join("\n")}`;
            return message.channel.send(
              new MessageEmbed({
                description: `Couldn't find that command!\n ${dym}`,
              })
            );
          }
          if (command) {
            try {
              await msg.delete();
              command.run(bot, message, args);
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
    } else {
      if (message.content.startsWith("d?")) {
        if (!message.author.bot) {
          const args = message.content.slice("d?".length).trim().split(/ +/);
          const cmd = args.shift().toLowerCase();
          if (!cmd.length) return;
          let command =
            bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
          if (!command) {
            const best = [
              ...bot.commands.map((cmd) => cmd.name),
              ...bot.aliases.keys(),
            ].filter(
              (input) =>
                leven(cmd.toLowerCase(), input.toLowerCase()) <
                input.length * 0.4
            );
            const dym =
              best.length === 0
                ? ""
                : best.length == 1
                ? `Did you mean this? : **${best[0]}**`
                : `Did you mean one of these? : \n ${best
                    .slice(0, 3)
                    .map((value) => `**${value}**`)
                    .join("\n")}`;
            return message.channel.send(
              new MessageEmbed({
                description: `Couldn't find that command!\n ${dym}`,
              })
            );
          }
          if (command) {
            try {
              command.run(bot, message, args);
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
    }
  }
};
