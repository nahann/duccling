const { readdirSync } = require("fs");
module.exports = (bot) => {
  const load = (dirs) => {
    const events = readdirSync(
      `/home/container/events/${dirs}/`
    ).filter((file) => file.endsWith(".js"));
    for (let file of events) {
      const evt = require(`/home/container/events/${dirs}/${file}`);
      let eName = file.split(".")[0];
      bot.on(eName, evt.bind(null, bot));
    }
  };
  ["client", "guild"].forEach((x) => load(x));
};
