module.exports = {
  name: "memedm",
  description: "Send a random meme textblock to a random member",
  cooldown: 86400000 / 2,
  async run(bot, message, args) {
    const { ownerID } = require("../../config.json");
    const user = await bot.users.fetch(ownerID);
    const member = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .random().user;
    let ar = [
      `Today's video is sponsored by Raid Shadow Legends, one of the biggest mobile role-playing games of 2019 and it's totally free! Currently almost 10 million users have joined Raid over the last six months, and it's one of the most impressive games in its class with detailed models, environments and smooth 60 frames per second animations! All the champions in the game can be customized with unique gear that changes your strategic buffs and abilities! The dungeon bosses have some ridiculous skills of their own and figuring out the perfect party and strategy to overtake them's a lot of fun! Currently with over 300,000 reviews, Raid has almost a perfect score on the Play Store! The community is growing fast and the highly anticipated new faction wars feature is now live, you might even find my squad out there in the arena! It's easier to start now than ever with rates program for new players you get a new daily login reward for the first 90 days that you play in the game! So what are you waiting for? Go to the video description, click on the special links and you'll get 50,000 silver and a free epic champion as part of the new player program to start your journey! Good luck and I'll see you there!`,
      `We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
We've known each other for so long
Your heart's been aching but you're too shy to say it
Inside we both know what's been going on
We know the game and we're gonna play it
And if you ask me how I'm feeling
Don't tell me you're too blind to see
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye`,
      `I'm blue
I'm blue
I'm blue, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
Yo listen up, here's the story
About a little guy that lives in a blue world
And all day and all night
And everything he sees is just blue
Like him, inside and outside
Blue his house with a blue little window
And a blue Corvette
And everything is blue for him
And himself and everybody around
'Cause he ain't got nobody to listen (to listen, to listen, to listen)
I'm blue, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa
I'm blue, da ba dee da ba daa
Da ba dee da ba daa, da ba dee da ba daa`,
    ];
    const h = ar[Math.floor(Math.random() * ar.length)];
    console.log(h);
    let verb =
      h == ar[0]
        ? "RaidShadowLegends"
        : h == ar[1]
        ? "Rickroll"
        : "Bluedabadeedabadie";
    const msg = await message.channel.send(`${verb}ing ${member.tag}....`);
    try {
      user.send(h);
      msg.edit(`${verb}\'d ${member.tag}! \`\`\`\n${verb} Successful\`\`\``);
    } catch (err) {
      console.log(err);
      message.channel.send(`Caught an error! \`\`\`\n${err}\n\`\`\` `);
    }
  },
};
