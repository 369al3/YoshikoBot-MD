const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => '
https://telegra.ph/file/85a22baa898684f034f52.jpg'),
  }), 'error.png', '*🚔 Hᴇʏ Lʟᴀᴍᴇɴ A Lᴀ Pᴏʟɪᴄɪᴀ Hᴀʏ Uɴ Dᴇʟɪᴄᴜᴇɴᴛᴇ!!🚔*', m);
};
handler.help = ['lolice'];
handler.tags = ['maker'];
handler.command = /^(lolice)$/i;
export default handler;
