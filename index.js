const Discord = require("discord.js");
const client = new Discord.Client();

const Collection = require("discord.js")

const token = require("./token.json");

const prefix = "+";

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

client.prefix = prefix;
client.commands = new Discord.Collection();

client.on("ready", () => require("./commands/status.js")(client));
client.on("message", message => require("./commands/help.js")(client, message, Discord))

console.log("Connecté")

client.login(token.token)
