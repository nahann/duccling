//𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ 𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫
module.exports = {
  name: "double",
  aliases: ["doubletext"],
  description: "Gives you cool 𝕕ouble text",
  async run(bot, message, args) {
    const a = args
      .join(" ")
      .replace("A", "𝔸")
      .replace("B", "𝔹")
      .replace("C", "ℂ")
      .replace("D", "𝔻")
      .replace("E", "𝔼")
      .replace("F", "𝔽")
      .replace("G", "𝔾")
      .replace("h", "ℍ")
      .replace("I", "𝕀")
      .replace("J", "𝕁")
      .replace("K", "𝕂")
      .replace("L", "𝕃")
      .replace("M", "𝕄")
      .replace("N", "ℕ")
      .replace("O", "𝕆")
      .replace("P", "ℙ")
      .replace("Q", "ℚ")
      .replace("R", "ℝ")
      .replace("S", "𝕊")
      .replace("T", "𝕋")
      .replace("U", "𝕌")
      .replace("V", "𝕍")
      .replace("W", "𝕎")
      .replace("X", "𝕏")
      .replace("Y", "𝕐")
      .replace("Z", "ℤ")
      .replace("a", "𝕒")
      .replace("b", "𝕓")
      .replace("c", "𝕔")
      .replace("d", "𝕕")
      .replace("e", "𝕖")
      .replace("f", "𝕗")
      .replace("g", "𝕘")
      .replace("h", "𝕙")
      .replace("i", "𝕚")
      .replace("j", "𝕛")
      .replace("k", "𝕜")
      .replace("l", "𝕝")
      .replace("m", "𝕞")
      .replace("n", "𝕟")
      .replace("o", "𝕠")
      .replace("p", "𝕡")
      .replace("q", "𝕢")
      .replace("r", "𝕣")
      .replace("s", "𝕤")
      .replace("t", "𝕥")
      .replace("u", "𝕦")
      .replace("v", "𝕧")
      .replace("w", "𝕨")
      .replace("x", "𝕩")
      .replace("y", "𝕪")
      .replace("z", "𝕫");
    message.channel.send(a);
  },
};
