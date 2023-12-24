import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n*Link:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n*Nombre:* ${v.user.name || '-'}\n*Uptime:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n');
  const replyMessage = message.length === 0 ? '*—◉ No hay SubBots activos en estos momentos.*' : message;
  const totalUsers = users.length;
  const responseMessage = `
*☠︎︎ 𝘈𝘲𝘶𝘪 𝘛𝘪𝘦𝘯𝘦𝘴 𝘓𝘢𝘴 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦𝘭 𝘚𝘶𝘣𝘣𝘰𝘵 (𝚂𝙴𝚁𝙱𝙾𝚃/𝙹𝙰𝙳𝙸𝙱𝙾𝚃) 𝘈𝘤𝘵𝘪𝘷𝘰𝘴*

*𓆉︎ 𝙿𝚄𝙴𝙳𝙴𝚂 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝚁𝙻𝙾𝚂 𝙿𝙰𝚁𝙰 𝙿𝙴𝙳𝙸𝚁 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰𝙽 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾!!*

*[🦁] ៸𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵-𝘔𝘋, 𝘊𝘢𝘥𝘢 𝘗𝘦𝘳𝘴𝘰𝘯𝘢 𝘔𝘢𝘯𝘦𝘫𝘢 𝘚𝘶 𝘉𝘰𝘵 𝘊𝘰𝘮𝘰 𝘘𝘶𝘪𝘦𝘳𝘢 𝘌𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘠 𝘌𝘭 𝘕𝘶𝘮𝘦𝘳𝘰 𝘖𝘧𝘪𝘤𝘪𝘢𝘭 𝘕𝘰 𝘚𝘦 𝘈𝘴𝘦 𝘊𝘢𝘳𝘨𝘰 𝘋𝘦𝘭 𝘔𝘢𝘭 𝘜𝘴𝘰 𝘋𝘦 𝘚𝘶 𝘉𝘰𝘵*

*✞︎ 𝘚𝘶𝘣𝘣𝘰𝘵 𝘊𝘰𝘯𝘦𝘤𝘵𝘢𝘥𝘰𝘴:* ${totalUsers || '0'}

${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;