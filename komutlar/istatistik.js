const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Sponsor: OnemBilisim.com", "https://www.onembilisim.com/resources/uploads/logo/2020-07-28/212d279362a5a7ff11d0b41.png")
.addField("<a:partner:755008983781343325>  | **Botun Sahibi**", "<@236173144300191754> <@327064201245753344>")
.addField("<a:hype:755008984208900128>  | **Gecikme süresi**","{ping1} ms "
.replace("{ping1}", new Date().getTime() - message.createdTimestamp)
.replace("{ping2}", client.ws.ping),true)
.addField("<a:hype:755008984208900128>  | **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
.addField("<a:hype:755008984208900128>  | **Çalışma süresi**", seksizaman, true)
.addField("<a:hype:755008984208900128>  | **Discord.JS sürüm**", "v" + Discord.version, true)
.addField("<a:hype:755008984208900128>  | **Node.JS sürüm**", `${process.version}`, true)
.addField("<a:hype:755008984208900128>  | **Müzik Oynatılan Sunucu Sayısı**", client.voice.connections.size, true)
.addField(`<a:hype:755008984208900128>  | **Sunucu Sayısı**`, client.guilds.cache.size, true)
.addField(`<a:hype:755008984208900128>  | **Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
.addField(`<a:hype:755008984208900128>  | **Sunucu Lokasyonu**`, `Turkey, BursaDGN`, true)
return message.channel.send(istatistikler);
};

exports.config = {
name: "istatistik",
aliases: ["i"]
};

