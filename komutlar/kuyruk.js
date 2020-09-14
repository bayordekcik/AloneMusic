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
.setTitle("• Hata: 010 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)
 
  
if(!message.member.voice.channel) return message.channel.send({embed: {color: AloneHata, description: `<a:hata:755010329787760640>  | Kuyruğu görüntüleyebilmek için bir ses kanalında olmanız gerekmektedir!` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: AloneHata, description: `<a:hata:755010329787760640>  | Şu anda hiçbir müzik çalmamaktadır!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? '<a:muzik:755160360683569174>  | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müziğin Adı:** \`${song.name}\` \n**Müziği Yükleyen Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: AloneDogru, title: `Alone Music - Müzik Kuyruğu`, description: `${q}`}})

//------------------------------------------------//
  
const hata3 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 001 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Şu anda hiçbir müzik çalmamaktadır!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());    
if(!kuyruk) return message.channel.send()

//------------------------------------------------//   

}
  
module.exports.config = {
    name: "kuyruk",
    aliases: []
};
