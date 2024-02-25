import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) throw `*⚠️ 𝖨𝗇𝗀𝗋𝖾𝗌𝖾 𝖴𝗇 𝖤𝗇𝗅𝖺𝖼𝖾 𝖣𝖾 𝖳𝗂𝗄𝗍𝗈𝗄*\n\n❕ 𝘌𝘫𝘦𝘮𝘱𝘭𝘰:\n${usedPrefix + command} https://vm.tiktok.com/ZMjbonqPu/`
if (!args[0].match(/tiktok/gi)) throw `*⚠️ 𝖵𝖾𝗋𝗂𝖿𝗂𝗊𝗎𝖾 𝖰𝗎𝖾 𝖤𝗅 𝖫𝗂𝗇𝗄 𝖲𝖾𝖺 𝖢𝗈𝗋𝗋𝖾𝖼𝗍𝗈*`


const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `𝆺𝅥𝅮 🔥 *𝘕𝘰𝘮𝘣𝘳𝘦:* ${p.nickname}
𝆺𝅥𝅮 👤 *𝘜𝘴𝘶𝘢𝘳𝘪𝘰:* ${p.unique_id}
𝆺𝅥𝅮 ⏰ *𝘋𝘶𝘳𝘢𝘤𝘪𝘰𝘯:* ${p.duration}
𝆺𝅥𝅮 📄 *𝘋𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪𝘰𝘯:* ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
} catch {
try {
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!url) throw '*⚠️ ERROR AL DESACARGAR EL VÍDEO*'
conn.sendFile(m.chat, url, 'fb.mp4', `• 🧃 *Nombre:* ${nickname}\n• 📄 *Descripción:* ${description}`, m)
m.react(done)
} catch {
m.reply(`*⚠️ ERROR AL DESCARGAR EL VÍDEO*`)
}}

}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|tt|ttdl|tiktokdl|tiktoknowm)$/i
handler.register = true
handler.diamond = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))