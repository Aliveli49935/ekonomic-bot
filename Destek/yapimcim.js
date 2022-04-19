const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("| Yapımcım")
.setDescription(`
**Botu Kodlayan** | Ardasensei??#1337 **

**Botun Sahibi** | Ardasensei??#1337 **

[Destek olan  Teşekkür Ederiz!] :)
`)

  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };
