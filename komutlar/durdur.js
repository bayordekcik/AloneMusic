const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 007 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Oynatılan bir müziği durdurabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//  
  client.player.stop(message.guild.id);
  const embed = new Discord.MessageEmbed()
.setColor(AloneDogru)
  .setTitle("Alone Music - Durdur")
.setDescription(`<a:basarili:755010328886247484>  | Müzikler ${message.author} tarafından durduruldu! Alone Music ses kanalından ayrılıyor.\n\nAlone Music'i tercih ettiğiniz için teşekkür ederiz.  <a:ucankalpler:735102535974780968>`) 
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL())
message.channel.send(embed)
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur"]
};
