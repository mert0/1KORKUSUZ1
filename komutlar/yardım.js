const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('764004391787167774') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    
        message.delete(9990000).catch(console.error);
        const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('RANDOM')
        .setTitle(`${client.user.username} - Mert `)
        .setDescription(`!davet** ➠ dJ Soon müzik botun davetini yolar ve destek sunucusunu
**!aile** ➠ BOTUN HANGİ SUNUCUDA OLDUĞU BELİ EDER
**!alkış** ➠ Bot Alkışlar
**!ascii** ➠ İstediğiniz şeyi bota yazdırır birazcık boş komut olabilir
**!at** ➠ İstediğiniz kişiyi sunucudan atar Sadece yönetici
**!atam** ➠ Atatürk'le bir fotoğrafınız olur
**!avatarım** ➠ Avatar'ınızı gösterir
**!avatar** ➠ etiketlediğiniz kişinin avatarını atar
**!aşk** ➠ İki kullanıcı sarasındaki aşkı ölçer
**!ban** ➠ İstediğiniz kişiyi sunucudan yasaklar Sadece yönetici
**!bjk** ➠ Beşiktaş la bir fotoğrafınız olur
**!canlıdestek** ➠ Canlı Destek Tablebi Oluşturur
**!davetkur** ➠ Bulunduğunuz sunucunun davet linkini atar
**!dm** ➠ İstediğiniz şeyi bota duyurtur Sadece yönetici
**!duyur** ➠ Güzel Bir Duyuru Görünümü Sağlar Sadece yönetici
**!emojiler** ➠ Sunucuda bulunan emojileri gösterir
**!espri** ➠ Espri yapar
**!fb** ➠ Fenerbaçe ile bir fotoğrafınız olur
**!gs** ➠ Galatasary ile bir fotoğrafınız olur
**!hapishane** ➠ Hapishane efekti
**!havadurumu** ➠ Bir boşluk bırakıp şehir yaz Hava durumunu gösterir
**!i** ➠ Botun istatistik gösterir
**!kedi** ➠ Rasgele kedi resim atar
**!korkut** ➠ Bot Sizi Korkutmaya Çalışır
**!kb** ➠ İstediğiniz kullanıcını bilgilerini gösterir
**!laf** ➠ Etiketlediniz Kisiye Kapak Laflar Soler
**!oyla** ➠ Oylama yapmanızı sağlar
**!ping** ➠ Botun Pingini Gösterir
**!yenile** ➠ Sistemi yeniden başlatır Sadece yönetici
**!roller** ➠ Sunucuda bulunan rolleri gösterir
**!slowode** ➠ Sohbete yazma sınır (süre) ekler
**!sunucuresmi** ➠ Sunucu Resminin Linkini Atar
**!söv** ➠ Birine Söver
**!uyar** ➠ İstediğiniz kişiyi uyarır Sadece yönetici
**!wasted** ➠ wasted fotoğrafınız olur
**!winner** ➠ winner fotoğrafınız olur
**!yardım** ➠ Yardım tüm komutları belirtir şu anki gibi
**!yaz** ➠ İstediğiniz şeyi bota yazdırırsınız Sadece yönetici
**!yetkilerim** ➠ Komutu kullandığınız sunucudaki yetkilerinizi gösterir
**!teklif** ➠ etiketlediğiniz kişiyiye çıkma teklifi edersiniz
**!ödm** ➠ Belirtilen kullanıcıya özelden mesaj yollar Sadece yönetici**.` )  
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
        .setFooter(`${message.author.username} Başka Sorunuz Olursa MERT#2003 İletişime Geçin `,message.author.avatarURL)
    return message.channel.sendEmbed(embed).then(m => m.delete(999000)).catch(console.error);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};