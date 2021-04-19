const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii("Commands");
table.setHeading("Command", "Load status");
module.exports = (bot) => {
  readdirSync("/home/container/commands/").forEach((dir) => {
    const commands = readdirSync(
      `/home/container/commands/${dir}/`
    ).filter((file) => file.endsWith(".js"));
    for (let file of commands) {
      let pull = require(`/home/container/commands/${dir}/${file}`);
      pull.category = dir;
      if (pull.name) {
        bot.commands.set(pull.name, pull);
        table.addRow(file, "✔️");
      } else {
        table.addRow(
          file,
          "✖️ -> missing a help.name or help.name is not a string"
        );
        continue;
      }
      if (pull.aliases && Array.isArray(pull.aliases))
        pull.aliases.forEach((alias) => bot.aliases.set(alias, pull.name));
    }
  });
  console.log(table.toString());
};
