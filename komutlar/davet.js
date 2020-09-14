const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Alone Music Linkler`, client.user.avatarURL())
.setDescription('**• [Alone Music`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)**\n\n**• [Alone Music Websitesi](https://alonemusicbot.tk/)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };