const Discord = require("discord.js")
const fs = require("fs")
const Alone = "#36393e";
const AloneDogru = "#22BF41";
const AloneHata = "#f30707";
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

module.exports.run = async (client, message) => {
/// GEREKLİLER ///  
//------------------------------------------------//

const hata1 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 013 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Şu anda çalan müziği görebilmek için bir ses kanalında olmanız gerekmektedir!`)
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
/////////////////

/// PREFİX ///
let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
////////////

/// Çalan Embed ///
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setThumbnail(calan.thumbnail)
.setColor("#22BF41")
.setDescription(`<a:muzik:755160360683569174>  | Şu Anda Oynatılan:\n\nMüziğin Adı: \n\`${calan.name}\`\n\nMüziği Yükleyen Kanal: \n\`${calan.author}\` \n\nMüziğin Linki: \n[Youtube'den dinlemek için tıkla!](${calan.url})`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL())
message.channel.send(calanembed)
};

///////////////

module.exports.config = {
    name: "çalan",
    aliases: []
};
