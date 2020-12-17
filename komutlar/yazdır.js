const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  message.delete(0).catch(console.error);
  let mesaj = args.slice(0).join(' ');
  if(message.author.id !== "") if(message.author.id !== "689438123482284118") if(message.author.id !== "453634830056423424") return message.channel.send(":no_entry_sign: Geliştiricim Değilsin Bu Komutu kullanamazsın.!")
	if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.')
  message.delete
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
