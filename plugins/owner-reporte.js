const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*⚠️👊 Iɴɢʀᴇsᴇ Uɴ Rᴇᴘᴏʀᴛᴇ*\n\n*Eᴊᴇᴍᴘʟᴏ:*\n*${usedPrefix + command} Eʟ Cᴏᴍᴀɴᴅᴏ ${usedPrefix}play Nᴏ Mᴀɴᴅᴀ Nᴀᴅᴀ*`;
  if (text.length < 10) throw `*⚠️ Eʟ Rᴇᴘᴏʀᴛᴇ Dᴇᴠᴇ Sᴇʀ Mᴀxɪᴍᴏ 10 Cᴀʀᴀᴄᴛᴇʀᴇs!*`;
  if (text.length > 1000) throw `*⚠️ Eʟ Rᴇᴘᴏʀᴛᴇ Dᴇᴠᴇ Sᴇʀ Mᴀxɪᴍᴏ Dᴇ 100 Cᴀʀᴀᴄᴛᴇʀᴇs!*`;
  const teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝘕𝘶𝘮𝘦𝘳𝘰:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦:* ${text}\n*┴*`;
  conn.reply('573013114854@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*✔️ Eʟ Rᴇᴘᴏʀᴛᴇ Fᴜᴇ́ Eɴᴠɪᴀᴅᴏ Cᴏɴ Exɪᴛᴏ Aʟ Cʀᴇᴀᴅᴏʀ Dᴇʟ Bᴏᴛ, 𝘚𝘶 𝘙𝘦𝘱𝘰𝘳𝘵𝘦 𝘚𝘦𝘳𝘢́ 𝘓𝘰 𝘈𝘯𝘵𝘦 𝘗𝘰𝘴𝘪𝘣𝘭𝘦, 𝙃𝙚𝙮 𝙋𝙚𝙧𝙤 𝘼𝙡𝙩𝙤 𝙎𝙞 𝙀𝙨 𝙈𝙚𝙣𝙩𝙞𝙧𝙖 𝙊 𝙎𝙚 𝙏𝙧𝙖𝙧𝙖 𝘿𝙚 𝙐𝙣𝙖 𝘽𝙧𝙤𝙢𝙖 𝙎𝙚𝙧𝙖́𝙨 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤 𝘿𝙚𝙡 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙔 𝘿𝙚𝙡 𝘽𝙤𝙩⚠️*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
