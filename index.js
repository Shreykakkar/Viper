const mySecret = process.env['TOKEN'];
const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
    sharding: true,
    shardAmount: 100,
	token: process.env.TOKEN,
	prefix: ['++','<@$clientID>'],
	everyoneMention: `false`,
	autoUpdate: true,
    intents: 'all'
});
   
const loader = new aoijs.LoadCommands(bot);loader.load(bot.cmd,'./commands/')  

const variables = require("./variables")

bot.variables(variables)
bot.onMessage()

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})