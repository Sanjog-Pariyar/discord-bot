require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]});

client.on('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if (message.author.bot) return

    if (message.content === 'hello') {
    message.channel.send('Hi, How are you doing?');
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN)