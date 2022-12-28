const Discord = require('discord.js');

module.exports = {
name: 'ping',
run: async (message, args, client) => {
        
message.channel.send(`🏓 Ping du bot: **__${Math.round(client.ws.ping)}__** ms`);

}}
