const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";

module.exports.run = async (client, message) => {
  
let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

//------------------------------------------------//

const hata4 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 004 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Oynatılan bir müziği geçebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata4)

//------------------------------------------------//
  
const hata2 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());    
if(!client.player.isPlaying(message.guild.id)) return message.channel.send(hata2)

//------------------------------------------------//
  
const sarki = await client.player.skip(message.guild.id);
  
//------------------------------------------------//

const embed = new Discord.MessageEmbed() 
.setColor(AloneDogru) 
.setTitle("Alone Music - Atla")
.setDescription(`<a:basarili:755010328886247484>  | \`${sarki.name}\` adlı müzik ${message.author} tarafından geçildi!`) 
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL())
message.channel.send(embed)
  
//------------------------------------------------//
  

};

module.exports.config = {
    name: "atla",
    aliases: ["geç", "s", "skip"]
};
