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
.setTitle("• Hata: 003 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Müzik oynatabilmek için bir ses kanalında olmanız gerekmektedir!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
if(!message.member.voice.channel) return message.channel.send(hata1)

//------------------------------------------------//
  
const hata3 = new Discord.MessageEmbed()
.setColor(AloneHata) 
.setTitle("• Hata: 002 •")
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setDescription(`<a:hata:755010329787760640>  | Müzik oynatabilmek için aranacak kelime veyahut kelimeler giriniz!`)
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());    
  if (!args[0]) return message.channel.send(hata3)

//------------------------------------------------//  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
  const kuyrukekle = new Discord.MessageEmbed()
  .setColor(AloneDogru)
  .setTitle("Alone Music - Kuyruğa Ekle")
  .setDescription(`<a:basarili:755010328886247484>  | \`${sarki.name}\` adlı müzik,\n${message.author} tarafından kuyruğa eklendi!`)
  .setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());   
message.channel.send(kuyrukekle)
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
  const oynanan = new Discord.MessageEmbed()
  .setColor(AloneDogru)
  .setTitle("Alone Music - Oynatılan Şarkı")
  .setDescription(`<a:muzik:755160360683569174>  | \`${sarki.name}\` adlı müzik şu anda oynatılıyor.`)
  .setThumbnail(client.user.avatarURL())
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());   
message.channel.send(oynanan)
sarki.queue.on('end', () => {
  const bitti = new Discord.MessageEmbed()
  .setColor(AloneDogru)
  .setTitle("Alone Music - Kuyruk Bitti!")
  .setDescription(`<a:basarili:755010328886247484>  | Kuyruktaki tüm müzikler oynatıldı. Alone Music kanaldan ayrılıyor.\n\nAlone Music'i tercih ettiğiniz için teşekkür ederiz.  <a:ucankalpler:735102535974780968>`)
  .setThumbnail(client.user.avatarURL())
.setFooter(`Alone Music © 2020 - All right reserved.`, client.user.avatarURL());  
message.channel.send(bitti)
})
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal"]
};