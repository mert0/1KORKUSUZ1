const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
//  WATCHING : izliyor
//  LISTENING :dinliyor
//  PLAYING :oynuyor

var prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setActivity("🌐 !y 🌐",{ type: "watchıng"} );
  
  var logmesaji = chalk.bold.red("oynuyor kısmı basari ile ayarlandi. \n")+
              chalk.italic.yellow("Jspanco : " + client.user.presence.game )
  console.log(`KORKUSUZ`);
};