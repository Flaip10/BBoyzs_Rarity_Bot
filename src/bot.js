const { Client, Intents } = require('discord.js');
const WOKCommands = require('wokcommands')
var path = require('path');
require('dotenv').config()

var commandsPath = path.join(__dirname, '..', 'commands');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  new WOKCommands(client, {
    commandsDir: commandsPath,
    showWarns: false,
  }).setDefaultPrefix('-') // Set your prefix here

  console.log('The bot is ready')
})

client.login(process.env.DISCORD_BOT_TOKEN)