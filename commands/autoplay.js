const Discord = require('discord.js')

module.exports = {
    name: 'autoplay',
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send({
        embeds: [
          new Discord.MessageEmbed()
          .setFooter(`Requested By ${message.author.tag}`)
          .setColor("#ff0000")
          .setDescription(`**${client.emotes.error} | Queue Is Empty**`)
          .setThumbnail(`${client.user.displayAvatarURL ({dynamic: true})}`)
        ]
      })
      const autoplay = queue.toggleAutoplay()
      message.channel.send(`${client.emotes.success} | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
    }
  }

//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
