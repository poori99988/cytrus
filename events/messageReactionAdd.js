const Discord = require('discord.js');

const Star = class {
  constructor(client) {
    this.client = client;
  }

  run(reaction, user) {
    const message = reaction.message;
    const settings = this.client.getSettings(message.guild.id);
    if (reaction.emoji.name !== '⭐') return;
    if (message.author.bot) return message.channel.send('<@' + user.id + '>, You cant star bot messages!');
    if (user.id == message.author.id) return message.reply('You cant star your own messages');
    if (!message.guild.channels.find(c => c.name == settings.starboardChannel)) return;
    
    if (!this.client.starboard.has(message.id)) this.client.starboard.set(message.id, 1);
    else this.client.starboard.inc(message.id);
    
    let embed = new Discord.RichEmbed()
    .setTitle('Star')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`${user.tag} (${user.id}) starred ${message.author.tag} (${message.author.id})'s message!
⭐ ${this.client.starboard.get(message.id)} | ${message.id}`)
    .addField('Author', '<@' + message.author.id + '>')
    .addField('Channel', '<#' + message.channel.id + '>')
    .setColor('#eeeeee');
    
    message.guild.channels.find(c => c.name == settings.starboardChannel).send({embed: embed}).catch();
  }
};

module.exports = (client, reaction, user) => {
  new Star(client).run(reaction, user);
};