const { ActivityType } = require("discord.js")

module.exports = {
name: 'ready',
once: true,
async execute(client) {

console.log(`[BOT] Je suis connecté à ${client.user.tag}`)

client.user.setPresence({
activities: [{ name: client.config.status.message, type: ActivityType.Watching }]
});

}}
