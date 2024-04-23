import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
       title: 'Eɴʟᴀᴄᴇ Dᴇʟ Gʀᴜᴘᴏ',
      body: '✰ 𝗬𝗼𝘁𝘀𝘂𝗯𝗮 𝗡𝗮𝗸𝗮𝗻𝗼 ★',    
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
 sourceUrl: `https://github.com/Diego-YL-177/Yotsuba-Nakano-MD`}}});
};     
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
