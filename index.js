const Discord = require("discord.js");
const client = new Discord.Client();

const Collection = require("discord.js")

const bdd = require("./bdd.json");

const prefix = "+";

const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

client.prefix = prefix;
client.commands = new Discord.Collection();

client.on("ready", () => require("./commands/status.js")(client, bdd));
client.on("message", message => require("./commands/help.js")(client, message, Discord))

client.login(process.env.TOKEN)