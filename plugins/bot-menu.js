//CODIGO DE BOTS-WHATSAPP-OFC
let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let botswhatsapp = `ESTE ES UN MENSAJE DE PRUEBA.`
await conn.sendButton(m.chat, botswhatsapp, `Yotsuba Nakano MD\n` + wm, foto, [
['⌨️ Menu Oficial ⌨️', '!allmenu'],
['🍧 Waoz', '!sc'],
['❤️ Propietario', '#owner'],
['🌼 Bot', 'Bot']], null, [
['🇦🇲 Canal', `${channel}`]], m)}
handler.command = /^smsprueba|mprueba$/i
handler.exp = 80
export default handler
//conn.sendButton(m.chat, botswhatsapp, wm media, [['Menu', '/menu']], null, [['Canal', `${channel}`]], m)}
