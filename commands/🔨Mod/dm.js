module.exports = {
  name: "dm",
  description: "dm's people, duh(mod only)",
  mod: true,
  run: async (client, message, args) => {
    if (!message.member.roles.cache.has("804738031764242483")) {
      message.channel.send("no lol");
    } else {
      client.users
        .fetch(args[0])
        .then((user) => {
          let arg = args.splice(1);
          message.guild.channels.cache
            .find((c) => c.name.includes("staff-botc"))
            .send(
              ` \`\`\`\nSent to ${user.tag}\n \"${arg.join(" ")}\" \n \`\`\` `
            );

          user.send(arg.join(" "));
        })
        .catch((err) => {
          message.channel.send(
            `Somthing went wrong while dimming that user:\n\`\`\`txt\n${err}\n\`\`\``
          );
        });
      message.delete();
    }
  },
};
