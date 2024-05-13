import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `𝒀𝒂 𝑻𝒆 𝑬𝒏𝒄𝒖𝒆𝒏𝒕𝒓𝒂𝒔 𝑬𝒏 𝑴𝒊 𝑩𝒂𝒔𝒆 𝑫𝒆 𝑫𝒂𝒕𝒐𝒔 🔮`
  if (!Reg.test(text)) throw `𝐔𝐬𝐨 𝐃𝐞𝐥 𝐂𝐨𝐦𝐚𝐧𝐝𝐨:\n- *${usedPrefix + command} nombre.edad*\n🎌 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n- *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🚩 𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒐'
  if (!age) throw '🚩 𝑳𝒂 𝒆𝒅𝒂𝒅 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒂'
  if (name.length >= 30) throw '💫 𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒆𝒔 𝒎𝒖𝒚 𝒍𝒂𝒓𝒈𝒐, 𝒘𝒂𝒐𝒛' 
  age = parseInt(age)
  if (age > 100) throw '😊 𝑬𝒍 𝑨𝒃𝒖𝒆𝒍𝒐 𝑸𝒖𝒊𝒔𝒐 𝑱𝒖𝒈𝒂𝒓 𝑯𝒂 𝑳𝒂 𝑩𝒐𝒕'
  if (age < 5) throw '✏️ 𝑭𝒖𝒂𝒂 𝒖𝒏 𝒃𝒆𝒃𝒆́ 𝒔𝒂𝒃𝒆 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓? '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
  let sn = createHash('md5').update(m.sender).digest('hex')
  await conn.reply(m.chat,  `⧼⧼⧼ *¡𝖱𝖤𝖦𝖨𝖲𝖳𝖱𝖠𝖣𝖮 𝖯𝖮𝖱 𝖸𝖮𝖳𝖲𝖴𝖡𝖠!* ⧽⧽⧽

• 𝖢𝗅𝗂𝖾𝗇𝗍𝖾: ${name}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
• 𝖤𝖽𝖺𝖽: ${age} 𝖠𝗇̃𝗈𝗌
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🍁 *𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰 𝙳𝙴 𝙻𝙰 𝙱𝙾𝚃:*
• 10 𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔 💎
• 600 𝒀𝒐𝒕𝒔𝒖𝑪𝒐𝒊𝒏𝒔 💰
• 245 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂 💸
• 5 𝑴𝒐𝒏𝒆𝒅𝒂𝒔 🪙
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝑬𝒏 𝑴𝒊 𝑩𝒂𝒔𝒆: ${rtotalreg}`, fkontak, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎`, body: team, previewType: 0, thumbnail: imagen6, sourceUrl: [channel, gp2, md, yt, fb].getRandom()}}})
await m.reply(`🎌 𝑨𝒒𝒖𝒊 𝑺𝒖 𝑵𝒖𝒎𝒆𝒓𝒐 𝑫𝒆 𝑺𝒆𝒓𝒊𝒆\n- ${sn}`)}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']
handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i
export default handler