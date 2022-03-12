const Discord = require('discord.js')

module.exports = {
    name: 'skip',
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
      try {
        const song = await queue.skip()
        message.channel.send({
          embeds: [
            new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription(`${client.emotes.success} | Skipped The Song |  Now playing:\n${song.name}`)
          ]
        })
      } catch (e) {
        message.channel.send(`${client.emotes.error} | ${e}`)
      }
    }
  }

//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
