const Discord = require('discord.js')
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle("Visual Ekonomi | Komut Listesi")
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
**\`-yardım-ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`
`)
.addField("__🎲  Oyunlar__",`
**\`-yardım-oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slot-machine\`
`)
.addField("__💼  Destek__",`
**\`-yardım-destek\`** - *Bize destek olabiliceğiniz komutlar!*

\`davet\`, \`yapımcım\`, \`destek\`,\`yardım\`

[Discord Sunucumuza](https://discord.gg/hgkmhZWXSB) katılmayı unutmayın!
`)

let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰  Ekonomi Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`-günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`-para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`-gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`-soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`-çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`-yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`-çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`-çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
[Destek Sunucumuza](https://discord.gg/hgkmhZWXSB) katılmayı unutmayın
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Oyun-Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`-bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`-balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)//== s (https://discord.gg/vzKHncpeXM) s ==\\
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Destek Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`-davet\` - __Botu kendi sunucunuza eklersiniz.__**
**\`-yapımcım\` - __Botun yapımcısını/geliştiricisini atar.__**
`)
  if(!args[0]) return message.channel.send(yardim)
  
  
  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  if(args[0] === 'destek' || args[0] === 'support') return message.channel.send(destek)
  
  
};


exports.conf = {
    enabled: true, 
    aliases: ["yardim","help",'komutlar','commands'],
  };
  
  exports.help = {
    name: 'yardım'
  };
