exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const msg = await message.channel.send('Ping?');
    msg.edit(`Pong! Bot Gecikme Süresi ${msg.createdTimestamp - message.createdTimestamp}ms.`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ping',
    category: 'Miscelaneous',
    description: 'For checking response time',
    usage: 'ping'
};