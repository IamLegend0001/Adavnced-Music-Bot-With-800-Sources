const Discord = require('discord.js')
const { Constants } = require('discord.js')

module.exports = {
  name: 'join',
  aliases: ['move'],
  run: async (client, message, args) => {
    let voiceChannel = message.member.voice.channel
    if (args[0]) {
      voiceChannel = await client.channels.fetch(args[0])
      if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
        return message.channel.send(`${client.emotes.error} | ${args[0]} is not a valid voice channel!`)
      }
    }
    if (!voiceChannel) {
      return message.channel.send(
        `${client.emotes.error} | You must be in a voice channel or enter a voice channel id!`
      )
    }
    client.distube.voices.join(voiceChannel)
    message.channel.send(`Joined ${message.guild.me.voice.channel}`)
  }
}
//Made By Legend Codez

//Must Give Credits While Using - https://dsc.gg/shades-dev |https://www.youtube.com/channel/UCoo2H78DlUGKRoShdOeyObQ,

//Made By Shades Development 

//12/3/22 | 5:33pm
