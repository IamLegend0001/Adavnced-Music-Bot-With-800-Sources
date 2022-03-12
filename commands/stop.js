module.exports = {
    name: 'stop',
    aliases: ['disconnect', 'leave'],
    inVoiceChannel: true,
    run: async (client, message) => {
      const queue = client.distube.getQueue(message)
      if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
      queue.stop()
      message.channel.send(`${client.emotes.success} | Stopped!`)
    }
  }


//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
