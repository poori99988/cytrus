exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    let res = await client.awaitReply(message, 'Are you sure you want to destroy the client?');
    
    if (res == 'yes') {
      message.channel.send('Destroying client...');
      client.destroy();
    }
    else message.channel.send('Aborted.');
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: true,
  permLevel: 'Bot Admin'
};

exports.help = {
  name: 'destroy',
  category: 'System',
  description: 'Destroys the Client and logs out of Discord',
  usage: 'destroy'
};
