module.exports = ({
	name: 'stats',
    aliases: ["botinfo"],
    usage: 'Stats/Botinfo',
    description: 'Gives Bot Stats',
	code: `$title[**About Me**]

 $thumbnail[$userAvatar[$clientID]]
$description[Last Restart: <t:$djsEval[Math.floor(new Date(d.client.readyAt).getTime() / 1000);yes]:R> 

📚 **Bot Information**\`\`\`
Developer: $username[$botOwnerID] ($botOwnerID)
Guilds: $serverCount
Members: $allMembersCount 
Channels: $allChannelsCount\`\`\`
🎯 **Hosting**\`\`\`
Hosting Platform: Uptimerobot
OS: $djsEval[require ('os').cpus()[0].model;yes]

CPU Usage: $cpu
CPU Platform: $djsEval[require ('os').platform();yes]

RAM Total: 1.02 GB
RAM Usage: $ram MB ($roundTenth[$multi[$divide[$ram;1024];100];2]%)
RAM Free: $sub[1024;$ram] MB ($roundTenth[$multi[$divide[$sub[1024;$ram];1024];100];2]%) \`\`\`
🛍️ **Other Information**\`\`\`
Bot Version: v0.0.5 - Beta
Aoi.Js: v$packageVersion
Node.Js: $nodeVersion
Discord.Js: v13.2.0\`\`\`]
$color[1;#00C3AB]`
});