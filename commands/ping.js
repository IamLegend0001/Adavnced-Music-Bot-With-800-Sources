const Discord = require('discord.js')

module.exports = {
  name: 'ping',
  aliases: ['latency'],
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new Discord.MessageEmbed()
          .setDescription(`**Pong ${client.ws.ping}ms**`)
          .setColor('#ff0000')
      ]
    })
  }
}

//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
