

let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '😺', key: m.key } })
let str = `𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝖽𝗂𝗈 𝖠 𝖫𝖺𝗌 𝖢𝗎𝖾𝗇𝗍𝖺𝗌 𝖮𝖿𝗂𝖼𝗂𝖺𝗅𝖾𝗌 😻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝖡𝗈𝗍 𝖮𝖿𝗂𝖼𝗂𝖺𝗅:
🌥 *Wa.me/59162793728*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
👏🏻 𝖦𝗂𝗍𝖧𝗎𝖻:
*${md}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
😻 𝖦𝗋𝗎𝗉𝗈 𝖮𝖿𝗂𝖼𝗂𝖺𝗅:
1) *${gp1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
2) *${gp2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🌹 𝖢𝖺𝗇𝖺𝗅 𝖣𝖾 𝖠𝖼𝗍𝗎𝖺𝗅𝗂𝗓𝖺𝖼𝗂𝗈𝗇 𝖣𝖾𝗅 𝖡𝗈𝗍;
 *${channel}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🦋 𝖢𝖺𝗇𝖺𝗅 𝖣𝖾 𝖸𝗈𝗎𝗍𝗎𝖻𝖾:
${yt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘈𝘭𝘨𝘶𝘯𝘢 𝘋𝘶𝘥𝘢 𝘗𝘶𝘦𝘥𝘦𝘴 𝘊𝘰𝘯𝘵𝘢𝘤𝘵𝘢𝘳 𝘈𝘭 𝘊𝘳𝘦𝘢𝘥𝘰𝘳 𝘌𝘴𝘤𝘳𝘪𝘣𝘪𝘦𝘯𝘥𝘰 #owner 𝘖 𝘗𝘶𝘦𝘥𝘦𝘴 𝘜𝘯𝘪𝘳𝘵𝘦 𝘈 𝘓𝘰𝘴 𝘎𝘳𝘶𝘱𝘰𝘴 𝘖𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴 𝘋𝘦𝘭 𝘉𝘰𝘵 💖`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
handler.command = /^cuentas|cuentasoficiales$/i
handler.exp = 35
handler.register = true
export default handler