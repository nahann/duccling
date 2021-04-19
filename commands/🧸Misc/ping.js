module.exports = {
  name: "ping",
  description: "ping",
  async run(bot, message, args) {
    let ms = await message.channel.send("Getting Ping info....");
    ms.edit(
      `Websocket Ping: ${bot.ws.ping} \n Edit ping: ${
        ms.createdTimestamp - message.createdTimestamp
      }`
    );
  },
};
