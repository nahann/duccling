const fetch = require("node-fetch");
module.exports = {
  name: "docs",
  description: "Search the Discord.JS docs",
  async run(bot, message, args) {
    let proj = "stable";
    if (!args.length) return message.channel.send("Never gonna give you up");
    let maybe = args.join(" ").includes("--src=")
      ? args.join(" ").split(" --src=")
      : [args[0], "stable"];

    let query = maybe[0];
    let h = maybe[1];
    if (h) {
      const prib = [
        "stable",
        "master",
        "akairo",
        "akairo-master",
        "collection",
        "commando",
      ];
      if (!prib.includes(h)) {
        return message.reply("That's not a valid src! ");
      } else {
        proj = h == "akairo" ? "akairo-master" : h;
      }
    }
    console.log(proj);
    console.log(query);
    const fetched = await fetch(
      `https://djsdocs.sorta.moe/v2/embed?src=${proj}&q=${encodeURIComponent(
        query
      )}`
    ).then((res) => res.json());
    await console.log(query);
    await console.log(proj);
    message.reply({ embed: fetched });
  },
};
