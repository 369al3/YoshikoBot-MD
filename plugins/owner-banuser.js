const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝚄𝙽𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙿𝙾𝚁 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝙰𝙽𝙴𝙰𝚁\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*🦋 𝖯𝖾𝗋𝖿𝖾𝖼𝗍𝗈, 𝖤𝗅 𝖴𝗌𝗎𝖺𝗋𝗂𝗈 𝖸𝖺 𝖤𝗌𝗍𝖺 𝖡𝖺𝗇𝖾𝖺𝖽𝗈, 𝖭𝗈 𝖯𝗈𝖽𝗋𝖺 𝖴𝗌𝖺𝗋 𝙎𝙖𝙠𝙪𝙧𝙖𝘽𝙤𝙩𝙇𝙞𝙩𝙚-𝙈𝘿🍀*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;