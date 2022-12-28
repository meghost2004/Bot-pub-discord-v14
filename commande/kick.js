const { EmbedBuilder } = require("discord.js");

module.exports = {
name: 'kick',
run: async (message, args, client) => {

if(!message.member.permissions.has("KickMembers")) {
return message.channel.send(`**${message.author.tag}**, Vous avez pas les permissions requises. (Expulser)`)
}
    
if(!message.guild.members.me.permissions.has("KickMembers")) {
return message.channel.send(`**${message.author.tag}**, Je n'ai pas les permissions requises. (Expulser)`)
}

let user = message.mentions.members.first();
    
if(!user) {
return message.channel.send(`**${message.author.tag}**, Mentionné le membre a kick.`)
}

if(user.id === message.author.id) {
return message.channel.send(`**${message.author.tag}**, Vous ne pouvez pas vous kick.`)
}

if(!user.kickable) return message.channel.send(`**${message.author.tag}**, Je ne peux pas kick cette personne.`)

const reason = args.slice(1).join(' ') || 'Aucune raison fournie'

await user.kick(reason)

const kickembed = new EmbedBuilder()
.setTitle("Nouveau kick")
.setDescription(`👥・**Membre** : ${user} | ${user.id} \n ❓・**Raison** : ${reason} \n 🚨・**Moderateur** : ${message.author.tag}`)
.setColor(client.config.couleurs.defaut)
message.channel.send({ embeds: [kickembed] })
    
}};
