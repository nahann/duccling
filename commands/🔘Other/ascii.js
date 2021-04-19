const fetch = require("node-fetch");
module.exports = {
  name: "ascii",
  description: "Turns your text into ascii",
  async run(bot, message, args) {
    if (!args.length) return message.channel.send("Specify text bruv");
    const messay = args.join("%20");
    fetch(`https://api.fc5570.ml/ascii?text=${messay}`)
      .then((res) => res.json())
      .then((json) => {
        message.channel.send(` \`\`\`${json.ascii}\`\`\` `);
      });
  },
};
