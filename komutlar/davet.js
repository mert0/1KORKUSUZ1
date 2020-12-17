const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send({
      embed: {
        color: 0xd97634,
        author: {
          name: "DJ Soon Davet Menüsü",
          icon_url: "https://cdn.discordapp.com/avatars/764004391787167774/a47282636b40b971487b1af41ed17eaa.png?size=2048"
        },
        thumbnail: {
          url:
            "https://cdn.discordapp.com/avatars/764004391787167774/a47282636b40b971487b1af41ed17eaa.png?size=2048"
        },
        title: "",
        description:
          "[DJ Soon Davet Linki](https://discord.com/api/oauth2/authorize?client_id=764004391787167774&permissions=0&scope=bot) \n [Destek Sunucusu](https://discord.gg/7X7dAynNhB)",
        fields: [],
        timestamp: new Date(),
        footer: {
          icon_url: "",
          text: "KORKUSUZ"
        }
      }
    });
    message.react("📝");
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["d", "link", "linkler"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Botun Davet Linkini Gösterir",
  usage: "davet"
};
