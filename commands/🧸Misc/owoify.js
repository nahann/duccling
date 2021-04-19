const api = require("comm-api.js");
const commapi = new api();
module.exports = {
  name: "owoify",
  description: "cringy text",
  async run(bot, message, args) {
    commapi.owofy(args.join(" ")).then((owo) => message.channel.send(owo.text));
    //returns json instead of a string so you have to do .text
  },
};
