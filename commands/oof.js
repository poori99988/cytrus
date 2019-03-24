exports.run = async (client, message, args, level) => {
  try {
    message.channel.send('oof');
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['rbdeath'],
  guildOnly: false,
  permLevel: 'User'
};

exports.help = {
  name: 'oof',
  category: 'Fun',
  description: 'Returns "oof"',
  usage: 'oof'
};
