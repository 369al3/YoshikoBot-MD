//CODIGO DE BOTS-WHATSAPP-OFC
let foto = imagen4
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let botswhatsapp = `❤️ New Update 🌼`
await conn.sendButton(m.chat, botswhatsapp, `👋🏻 ¡Hola! ` + nombre, foto, [
['⌨️ Menu Oficial ⌨️', '!allmenu'],
['🍧 Waoz', '!sc'],
['❤️ Propietario', '#owner'],
['🌼 Bot', '!bot Hola']], null, [
['🇦🇲 Canal', `${channel}`]], m)}
handler.command = /^menu|menuboton$/i
handler.exp = 80
export default handler
