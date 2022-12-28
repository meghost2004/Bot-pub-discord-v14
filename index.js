const { Client, Collection, GatewayIntentBits } = require("discord.js")
const { readdirSync } = require("fs")

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  restTimeOffset: 0,
  partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION"],
})

const { token } = require("./botToken.json")

client.config = require("./botConfig.json")

client.login(token)
client.commands = new Collection()

//|▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬| Commandes Handler |▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬|

const commandFiles = readdirSync("./commande").filter((file) =>
file.endsWith(".js")
)
for (const file of commandFiles) {
const command = require(`./commande/${file}`)
client.commands.set(command.name, command)
}

//|▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬| Event Handler |▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬|

const eventFiles = readdirSync("./event").filter((file) => file.endsWith(".js"))
for (const file of eventFiles) {
const event = require(`./event/${file}`)
if (event.once) {
client.once(event.name, (...args) => event.execute(client, ...args))
} else {
client.on(event.name, (...args) => event.execute(client, ...args))
}}

//|▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬| Anti Crash |▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬|

process.on("unhandledRejection", (error) => {
if (error.code == 10062) return; // Unknown interaction
console.log(`[ERREUR] ${error}`);
})
