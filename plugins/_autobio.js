let handler = m => m 
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
        
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `🤖 ⓘ 𝐇𝐨𝐥𝐚 𝐒𝐨𝐲 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭𝐋𝐢𝐭𝐞-𝐌𝐃 ╏ 𝐔𝐭𝐢𝐥𝐢𝐜𝐞 #menu 𝐏𝐚𝐫𝐚 𝐕𝐞𝐫 𝐋𝐨𝐬 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐐𝐮𝐞 𝐃𝐢𝐬𝐩𝐨𝐧𝐠𝐨 🌹 𝐌𝐢 𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭𝐢𝐯𝐚 𝐄𝐬 : ${uptime}`
await this.updateProfileStatus(bio).catch(_ => _)
//await this.updateProfilePicture(imagen6.catch(_ => _)
setting.status = new Date() * 1
} 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' » ', h, ' ・ ', m, ' ・ ', s].map(v => v.toString().padStart(2, 0)).join('') 
} 