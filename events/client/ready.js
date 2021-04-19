module.exports = (bot) => {
  console.log(`helo i am online -${bot.user.username}`);
  bot.api
    .applications(bot.user.id)
    .guilds("804592931586572298")
    .commands.post({
      data: {
        name: "ping",
        description: "ping command",
      },
    });

  bot.ws.on("INTERACTION_CREATE", async (interaction) => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;

    if (command === "ping") {
      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `pong \`${bot.ws.ping}\` ms`,
          },
        },
      });
    }
  });
};
