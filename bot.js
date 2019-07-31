const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("606115375394062346")
setInterval(function() {
channel.send(`كريمهلواتزميا`);
}, 30)
})

client.login(process.env.BOT_TOKEN);