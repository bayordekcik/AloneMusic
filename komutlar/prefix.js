
const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json')
const BaseAPI = require('botsbase.js')
const BotsBase = new BaseAPI("UQIRFD5jVgFiIh5XCD43M8NYj");
 exports.run = async (client, message, args) => {
    
 const check = await BotsBase.voted(message.author.id, "511593657711722523")
 if(check === true) {
let a = ayarlar.prefix
let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
 let o = await db.fetch(`prefix.${message.guild.id}`)
 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Bu Komutu Kullanabilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısınız.\nŞuanki Prefix: \`${p}\``));
  if(args[0] === "ayarla") {if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Bir Prefix Girip Tekrar Deneyiniz. \n Şuanki Prefix: \`${p}\``));
db.set(`prefix.${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`Prefix Başarıyla \`${args[0]}\` Ayarlandı.\n Şuanki Prefix: \`${args[1]}\``));}
    if(args[0] === "sıfırla") {
    if(!o) {
       return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Ayarlanmayan Prefixi Sıfırlayamazsınız. \nŞuanki Prefix: \`${p}\``));}
    db.delete(`prefix.${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`Prefix Başarıyla Sıfırlandı. \nŞuanki Prefix: \`${a}\``));}
  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("YELLOW")        
.setDescription(`Prefix Ayarlamak İçin: \`${p}prefix ayarla <prefix>\` \n Sıfırlamak İçin: \`${p}prefix sıfırla\` \nŞuanki Prefix: \`${p}\``));
 } else {

   message.channel.send(new Discord.MessageEmbed().setColor("YELLOW")        
.setDescription(`Bu komutu kullanabilmek için botumuza oy vermeniz gerekmektedir.\nBotumuza oy verebilmek için;\nhttps://botsbase.net/bot/511593657711722523/vote\nOy verdiyseniz 3 dakika bekleyip komutu tekrar kullanın!`))
.setAuthor("Alone Music", client.user.avatarURL()) 
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
 }

 }

exports.config = {
name: "prefix",
aliases: []
};
  