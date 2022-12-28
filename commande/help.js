const { EmbedBuilder } = require('discord.js')


module.exports = {
name: 'help',
run: async (message, args, client) => {


const help = new EmbedBuilder()
.setColor(client.config.couleurs.defaut)
.setTitle(`Help de ${client.user.username}`)
.setURL(`https://github.com/meghost2004/Bot-pub-discord-v14`)
.setDescription('**👋 Salut** ' + `${message.author},` + '\n**❗ Mon prefix est** ' + `\`${client.config.prefix}\`` + '\n\n**:gear: ➜ Configuration**\n> `verif-channel` : Ajouté le salon de vérification.\n> `logs-channel` : Ajouté le salon des logs de vérification.\n> `logs-sanction` : Ajouté le salon des logs de sanctions.\n> `salon-add` : Ajouté un salon publicitaire.\n> `salon-remove` : Retiré un salon publicitaire.\n> `salon-list` : Voir les salon publicitaire.\n> `embed-create` : Créé l\'auto embed.\n> `embed-builder` : Modifier l\'auto embed.\n\n**🚨 ➜ Modération**\n> `ban` : Bannir un membre.\n> `kick` : Expulser un membre.\n> `clear` : Supprimer des messages.\n\n**:robot: ➜ Bot**\n> `bot-info` : Affiche les info du bot.\n> `ping` : Affiche le ping du bot.')

return message.channel.send({ embeds: [help] })
    }}
