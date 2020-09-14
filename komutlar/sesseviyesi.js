const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 012 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Oynatılan bir müziğin ses seviyesini ayarlayabilmek için bir ses kanalında olmanız gerekmektedir!`)
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
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: AloneHata, description: `<a:hata:755010329787760640>  | Ses seviyesini ayarlayabilmek için sadece pozitif bir doğal sayı giriniz.` }})
if (args > 200) return message.channel.send({embed: {color: AloneHata, description: `<a:hata:755010329787760640>  | Ses seviyesini sadece \`0\` ile \`200\` arasında ayarlayabilirsiniz. `}})
if (args < 0) return message.channel.send({embed: {color: AloneHata, description: `<a:hata:755010329787760640>  | Ses seviyesini sadece \`0\` ile \`200\` arasında ayarlayabilirsiniz. ` }})
  client.player.setVolume(message.guild.id, sesseviyesi);
      const embedd = new Discord.MessageEmbed()
.setColor(AloneDogru)
.setTitle("Alone Music - Ses Seviyesi")
.setDescription(`<a:basarili:755010328886247484>  | Ses seviyesi, ${message.author} tarafından \`${args.join(" ")}\` olarak ayarlandı.`) 
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());   
message.channel.send(embedd)
}

module.exports.config = {
  name: "ses",
  aliases: ['ses-seviyesi']
};
