const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`╭✿❯────「✿」────❮✿
┋➺ 🥀 *Usuario:* ${name}
┋➺ 📍 *Diamantes*: ${global.db.data.users[who].diamond} 💎
┋➺ ⚡️ *Experiencia:* ${global.db.data.users[who].exp}
╰✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶

╭✿❯────「✿」────❮✿
┃ *Puedes Comprar Mas 💎*
┃ *Usa Los Siguentes Comandos*
┃ *${usedPrefix}buy <cantidad>*
┃ *${usedPrefix}buyall*
╰✶⊶⊷⊶⊷❍⊶⊷⊶⊷✶`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
