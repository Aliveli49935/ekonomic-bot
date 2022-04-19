const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle(" Ekonomi | Destek")
.setDescription(`
**Sunucumuza Katıl ve Muhabbet ET!**

[≫ Sunucumuza Katılmak için Buraya Tıkla ≪](https://discord.gg/evHDQ7pyg9)
`)

return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["support"],
  };
  
  exports.help = {
    name: 'destek'
  };
