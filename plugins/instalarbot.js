import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '❤️‍🩹', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `🍓 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣 𝘼𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖 (𝚃𝙴𝚁𝙼𝚄𝚇)
   
➪ termux-setup-storage

➪ apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/diegojadibot/SakuraBotLite-MD/master/sakura.sh | bash

🦋 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙘𝙞𝙤𝙣 𝙈𝙖𝙣𝙪𝙖𝙡 (𝚃𝙴𝚁𝙼𝚄𝚇) 🍓

➪ cd && termux-setup-storage

➪ apt-get update -y && apt-get upgrade -y

➪ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 

➪ git clone https://github.com/diegojadibot/SakuraBotLite-MD.git && cd SakuraBotLite-MD

➪ yarn install

➪ npm install

➪ npm update

➪ npm start

🟢 𝐀𝐜𝐭𝐢𝐯𝐚𝐫 𝐄𝐥 𝐁𝐨𝐭 🟢

➪ cd

➪ cd SakuraBotLite-MD

➪ npm start

💖 𝙊𝙗𝙩𝙚𝙣𝙚𝙧 𝙊𝙩𝙧𝙤 𝙌𝙧 😻

➪ cd SakuraBotLite-MD

➪ rm -rf SakuraBotSession

➪ npm start

🟢 (𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 1 𝙿𝙾𝚁 1) 🦋
    
    🍓 𝑆𝑖 𝑇𝑖𝑒𝑛𝑒𝑠 𝐷𝑢𝑑𝑎 𝑆𝑜𝑏𝑟𝑒 𝑀𝑖 𝐶𝑟𝑒𝑎𝑑𝑜𝑟 𝑂 𝐷𝑒𝑙 𝐵𝑜𝑡 𝐶𝑜𝑛𝑡𝑎𝑐𝑡𝑎𝑙𝑜 𝐸𝑠𝑐𝑟𝑖𝑏𝑒: #𝑐𝑟𝑒𝑎𝑑𝑜𝑟 ⚓`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(instalarbot|descargarbot)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}