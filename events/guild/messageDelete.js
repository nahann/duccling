const Discord = require("discord.js");
const db = require("quick.db");
module.exports = async (bot, message) => {
  // ignore direct messages
  if (!message.guild) return;
  if (message.author.bot) return;
  if (db.get(`${message.author}nosnip`) !== null) {
    const msg = await message.channel.send("no snip bicth");
    msg.delete();
  }
  const fetchedLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: "MESSAGE_DELETE",
  });
  let embed1 = new Discord.MessageEmbed()
    .setTitle("Message Deleted!")
    .setDescription(
      `A message by ${message.author.tag} was deleted, but no relevant audit logs were found.`
    );
  // Since we only have 1 audit log entry in this collection, we can simply grab the first one
  const deletionLog = fetchedLogs.entries.first();
  let channel = message.guild.channels.cache.get("804773978387251210");
  // Let's perform a coherence check here and make sure we got *something*
  if (!deletionLog) return channel.send(embed1);

  // We now grab the user object of the person who deleted the message
  // Let us also grab the target of this action to double check things
  const { executor, target } = deletionLog;
  let embad = new Discord.MessageEmbed()
    .setTitle("Message Deleted!")
    .setThumbnail(
      message.author.displayAvatarURL({ dynamic: true, type: "png" })
    )
    .setColor("RANDOM");
  // And now we can update our output with a bit more information
  // We will also run a check to make sure the log we got was for the same author's message
  if (target.id === message.author.id) {
    embad.setDescription(
      `A message by ${message.author.tag} was deleted by ${executor.tag}.\nContent: \`\`\`${message.content}\`\`\``
    );
    channel.send(embad);
  } else {
    embad.setDescription(
      `A message by ${message.author.tag} was deleted by themselves. \nContent: \`\`\`${message.content}\`\`\``
    );
    channel.send(embad);
  }
};
