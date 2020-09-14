const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");


module.exports.run = (client, message, args) => { 
 const prefix = db.fetch(`prefix.${message.guild.id}`) || fynx.prefix; 
let pages = [
`**Alone Music kullanıcıları bilginize;**\n\n<a:ucankalpler:735102535974780968>  Yardım menüsünü görmeden önce Alone Music'i kullandığınız için sizlere teşekkür ederiz.\n\n<a:kalp:734885134251327540>  Umarım botumuzu beğenerek kullanıyorsunuzdur.\n\n<a:coder:734885134800519288>  Sizler sayesinde botumuz daha iyi yerlere geliyor.\n\n<:developer:734885133684965428>  Eksiklerimiz veya hatalarımızı ` + `\`${prefix}öneri\`` + ` komutu ile bizimle paylaşabilirsiniz.`,
`**Alone Music kullanıcı komutları**\n\n` + `\`${prefix}yardım\`` + `\n<a:secenek:733987076718198864>  Bütün komutları ve açıklamaları gösterir. \n\n` + `\`${prefix}oynat <Şarkı İsmi>\`` +`\n<a:secenek:733987076718198864>  Belirtilen isimli şarkıları arar ve bulunduğunuz odaya bağlanıp müziği oynatır. \n\n` + `\`${prefix}durdur\`` +`\n<a:secenek:733987076718198864>  Alone Music müzik oynatmayı durdurur ve ses kanalından ayrılır.\n\n ` + `\`${prefix}atla\`` + `\n<a:secenek:733987076718198864>  Oynatılmakta olan müziği atlar. Kuyrukta müzik var ise müzikler sırayla oynatılır. \n\n ` + `\`${prefix}duraklat\`` +` \n<a:secenek:733987076718198864>  Oynatılan olan müziği duraklatır. \n\n ` + `\`${prefix}devam\`` +`\n<a:secenek:733987076718198864>  Duraklatılan müziği devam ettirir.`,
`**Alone Music kullanıcı komutları**\n\n` + `\`${prefix}karıştır\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri karıştırır. \n\n ` + `\`${prefix}döngü\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğundaki müzikleri döngü içerisine alır. \n\n ` + `\`${prefix}çalan\`` +`\n<a:secenek:733987076718198864>  Oynatılan olan müziği gösterir.\n\n  ` + `\`${prefix}kuyruk\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğunu gösterir. \n\n ` + `\`${prefix}kuyruğu-temizle\`` +`\n<a:secenek:733987076718198864>  Müzik kuyruğunu temizler.\n\n ` + `\`${prefix}ses <1/200>\`` +`\n<a:secenek:733987076718198864>  Oynatılan müziğin ses seviyesini ayarlar.`,
'**Alone Music Linkler**\n\n**• [Alone Music`i Ekleyin.](https://discord.com/oauth2/authorize?client_id=511593657711722523&scope=bot&permissions=8)**\n\n**• [Alone Music Websitesi](https://alonemusicbot.tk/)**\n\n**• [Yapımcı İnstagram Hesabı](https://instagram.com/m_arda_dusova)**'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.displayAvatarURL({format : "gif"}))
.setAuthor(`Alone Music Yardım Menüsü`, client.user.avatarURL())
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'yardım',
aliases: ["help", "y", "h"]
};
 
