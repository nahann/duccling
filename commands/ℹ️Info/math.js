const { evaluate } = require("mathjs");
module.exports = {
  name: "math",
  aliases: [
    "maths",
    "thatstuffyoudontknowhowtodo",
    "tsydkhtd",
    "methbutspeltwrong",
    "m",
  ],
  run: async (bot, message, args) => {
    if (!args.length)
      return message.channel.send("ah yes lemme just math nothing");
    try {
      let hh = args.join(" ");
      hh = hh.replace(/pie/gi, "pi");
      let array = hh.split(/ + /g);
      array.map((value, index) => {
        if (
          value.toLowerCase() == "sq" &&
          !value.toLowercase().startsWith("sq(")
        ) {
          if (!array[index + 1]) throw { err: "no index" };
          if (isNaN(array[index + 1])) throw { err: "not number" };

          array[index] = `sqrt(${array[index * 1]})`;
          array[index + 1] = undefined;
          hh = array.filter((val) => val != undefined).join(" ");
        } else if (value.toLowerCase().startsWith("sq(")) {
          array[index] = array[index].replace(/sq/gi, "sqrt");
          hh = array.filter((val) => val != undefined).join(" ");
        }
      });

      const h = evaluate(hh);
      message.channel.send(`Equation results : \n\`\`\`${h}\`\`\` `);
    } catch (e) {
      console.log(e);
      return message.channel.send("Invalid Equation");
    }
  },
};
