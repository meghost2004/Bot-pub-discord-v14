const { EmbedBuilder } = require('discord.js');
const path = require('path');

module.exports = {
  name: 'salon-list',
  run: async (message, args, client) => {
    if (!message.member.permissions.has('ManageChannels')) {
    return message.channel.send(`**${message.author.tag}**, Vous n'avez pas les permissions requises. (Gérer les salons)`);
    }

    const channels = require(path.resolve(path.join('./database/config SalonPub.json')));
    if (!channels) return message.channel.send(`❌・Aucun salon publicitaire n'est défini sur le serveur.`);

    const channelIds = Object.keys(channels[message.guild.id]);
    if (!channelIds.length) return message.channel.send(`❌・Aucun salon publicitaire n'est défini sur le serveur.`);

    const allchannel = `__Voici la liste des salons publicitaire du serveur.__\n${'\n'.repeat(channelIds.length - 1)}\n> ${channelIds.map(channel => `<#${channel}>, **ID**: ${channel}`).join('\n> ')}`;

    const SalonList = new EmbedBuilder()
      .setTitle('📢 Salon publicitaire')
      .setDescription(allchannel)
      .setFooter({ text: `${client.user.username}` })
      .setColor(client.config.couleurs.defaut)
      .setTimestamp();
    message.channel.send({ embeds: [SalonList] });
  },
};
