const Discord = require("discord.js");
const client = global.client;

exports.execute = async (message) => {
  
 var JoinChannel = client.channels.cache.get("Bot Ses Kanalı ID");
 
 const { joinVoiceChannel } = require('@discordjs/voice');

 if(JoinChannel){
const connection = joinVoiceChannel({
	channelId: JoinChannel.id,
	guildId: JoinChannel.guild.id,
	adapterCreator: JoinChannel.guild.voiceAdapterCreator,
});
 } else {
   console.log("Bot bir ses kanalına giriş yapamadı")
 }
    
 };
exports.conf = {
  event: "ready"
};
