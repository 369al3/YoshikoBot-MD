/*No edites por favor*/

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`╭━━━━━━━ •♬• ━━━━━━━
┊
┊     「 𝐃𝐎𝐍𝐀𝐑 」
╰━━━━━━━ •♬• ━━━━━━━
╭━━━━━━━ •♬• ━━━━━━━
┇➻ 🦋𝘗𝘶𝘦𝘥𝘦𝘴 𝘋𝘰𝘯𝘢𝘳 𝘈𝘱𝘰𝘺𝘢𝘯𝘥𝘰𝘮𝘦 𝘠 𝘋𝘢𝘯𝘥𝘰𝘭𝘦 𝘜𝘯𝘢 𝘌𝘴𝘵𝘳𝘦𝘭𝘭𝘢 𝘈 𝘔𝘪 𝘙𝘦𝘱𝘰𝘴𝘪𝘵𝘰𝘳𝘪𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭 💖
┇
┇➻ 😻𝘊𝘰𝘮𝘱𝘢𝘳𝘵𝘦 𝘕𝘶𝘦𝘴𝘵𝘳𝘰 𝘉𝘰𝘵 𝘗𝘢𝘳𝘢 𝘘𝘶𝘦 𝘓𝘰 𝘜𝘴𝘦𝘯 𝘔𝘢𝘴 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘴 𝘠 𝘝𝘦𝘢𝘯 𝘌𝘭 𝘔𝘢𝘳𝘢𝘷𝘪𝘭𝘭𝘰𝘴𝘰 𝘉𝘰𝘵! 💖
┇
┇➻ ✨𝘚𝘪 𝘛𝘪𝘦𝘯𝘦𝘴 𝘋𝘶𝘥𝘢 𝘗𝘶𝘦𝘥𝘦𝘴 𝘌𝘴𝘤𝘳𝘪𝘣𝘪𝘳𝘭𝘦 𝘈𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘋𝘦𝘭 𝘉𝘰𝘵: +57 301 3482814
┇
┇➻ 🟢𝘌𝘭 𝘉𝘰𝘵 𝘕𝘰 𝘗𝘦𝘳𝘮𝘢𝘯𝘦𝘤𝘦 24/7 𝘈𝘴𝘵𝘢 𝘘𝘶𝘦 𝘌𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘓𝘰 𝘋𝘦𝘴𝘪𝘥𝘢 𝘗𝘰𝘯𝘦𝘳𝘭𝘰 24/7 🟢
┇
┇➻ ✨𝘜𝘴𝘢 !menu 𝘗𝘢𝘳𝘢 𝘝𝘦𝘳 𝘓𝘰𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘘𝘶𝘦 𝘋𝘪𝘴𝘱𝘰𝘯𝘨𝘰. 🙌
┇
┇➻ 🍓𝘓𝘪𝘯𝘥𝘰 𝘈𝘮𝘢𝘯𝘦𝘤𝘦𝘳 😻
╰━━━━━━━ •♬• ━━━━━━━`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^donar|apoyar$/i;
export default handler;