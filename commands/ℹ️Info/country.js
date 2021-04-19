const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "country",
  aliases: ["countryinfo", "cinfo", "ci"],
  description: "Gives info of a country",
  run: async (bot, message, args) => {
    if (!args.length) return message.channel.send("Specify a country!");
    const e = new MessageEmbed();
    fetch(`https://restcountries.eu/rest/v2/name/${args.join(" ")}`)
      .then((res) => res.json())
      .then((json) => {
        e.setTitle(`Country info for ${json.name}`);
        e.setDescription(
          `${json.name}’s Top Level Domain: \n \`\`\`${json.topLevelDomain}\`\`\` \n  Country codes: \n \`\`\`${json.alpha2Code},${json.alpha3Code}\`\`\` \n Calling Codes: \n \`\`\`${json.callingCodes}\`\`\` \n ${json.name}’s capital: \n \`\`\`${json.capital}\`\`\` \n Alternate Spellings: \n \`\`\`${json.altSpellings}\`\`\`\n Region: \n \`\`\`${json.subregion},${json.region}\`\`\` \n Population: \n \`\`\`${json.population}\`\`\` \n Demonym: \n \`\`\`${json.demonym}\`\`\` `
        );
        e.setThumbnail(json.flag);
        message.channel.send(e, { split: true });
      });
  },
};
