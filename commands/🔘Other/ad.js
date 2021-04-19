const { MessageEmbed, MessageAttachment } = require("discord.js");
module.exports = {
  name: "ad",
  description: "puts any image into a billboard",
  async run(bot, message, args) {
    let image;
    if (!args.length) {
      if (!message.attachments.first()) {
        message.channel.send(
          "You have to either attach an image or put the link like \n d?ad link"
        );
      } else {
        image = message.attachments.first().url;
      }
    } else {
      if (!args[0].startsWith("https://")) {
        message.channel.send("It has to be a secure link!");
      } else {
        image = args[0];
      }
    }
    try {
      const a = new MessageAttachment(
        `https://api.fc5570.ml/api/ad?image=${image}?size=256`
      );

      message.channel.send(a);
    } catch (e) {
      message.channel.send(
        `\`\`\`Error!\`\`\` \n An error occurred. This is most likely because you didn't provide a link that was directly to an image. `
      );
    }
  },
};
