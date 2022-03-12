module.exports = {
    name: 'leave',
    run: async (client, message) => {
      client.distube.voices.leave(message)
        message.channel.send(`**Left Your Voice Channel!**`)
    }
  }

//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
