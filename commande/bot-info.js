const { EmbedBuilder } = require('discord.js')
const Discord = require("discord.js");

module.exports = {
name: "bot-info",
run: async (message, args, client) => {
  
     
const embed = new EmbedBuilder()
.setThumbnail(client.user.displayAvatarURL())
.setTitle(`Information de __${client.user.username}__`)
.setURL(`https://github.com/meghost2004/Bot-pub-discord-v14`)
.setColor(client.config.couleurs.defaut)
.addFields(
{
name: '👑・Créateur :',
value: `> Nom: **meghost2004#4470**
> ID: **888371572753190922**`,
inline: false
},
{
name: '📬・Serveurs :',
value: `> Regarde **${client.guilds.cache.size}** servers.`,
inline: false
},
{
name: '📚・Channels :',
value: `> Regarde **${client.channels.cache.size}** channels.`,
inline: false
},
{
name: '👥・Utilisateurs :',
value: `> Regarde **${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}** utilisateurs.`,
inline: false
},
{
name: '🛠️・Inscription :',
value: `> ${client.user.createdAt.toLocaleDateString("FR-fr")}`,
inline: false
},
{
name: '⏳・Ping :',
value: `> **${Math.round(client.ws.ping)}**ms`,
inline: false
},
{
name: '💾・Version',
value: `> Discord.js: **${Discord.version}**,
> Node: **${process.version}**,`
}
)
.setTimestamp()
message.channel.send({ embeds: [embed] })
    }
}
