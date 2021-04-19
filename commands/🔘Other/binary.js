//https://api.fc5570.ml/api/binary?type=encode&text=Never%20Gonna%20Give%20You%20Up
const fetch = require("node-fetch");
module.exports = {
  name: "binary",
  description: "encode and decode binary",
  usage: "encode/decode <text>",
  async run(bot, message, args) {
    const type = args.splice(0);
    if (!type) {
      return message.channel.send("You have to define encode/decode!");
    } else {
      const text = args.join("%20");
      if (!args[1]) {
        return message.channel.send("you have to define text!");
      } else {
        if (text == "encode") {
          try {
            fetch(`https://api.fc5570.ml/api/binary?type=encode&text=${text}`)
              .then((encode) => encode.json())
              .then((js) => {
                message.channel.send(
                  ` Encoded Results: \n \`\`\`${js.encodedText}\`\`\` `
                );
              });
          } catch (e) {
            return message.channel.send(
              `An error occured! This is most likely because the API is broken, dm LesiMC#7500 to report this!`
            );
          }
        } else if (text == "decode") {
          try {
            fetch(`https://api.fc5570.ml/api/binary?type=decode&text=${text}`)
              .then((decode) => decode.json)
              .then((jso) => {
                message.channel.send(
                  ` Encoded Results: \n \`\`\`${jso.encodedText}\`\`\` `
                );
              });
          } catch (e) {
            return message.channel.send(
              `An error occured! This is most likely because you tried decoding text that wasn't binary.`
            );
          }
        }
      }
    }
  },
};
