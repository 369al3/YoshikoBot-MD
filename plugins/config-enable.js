var handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'autolevelup':
case 'levelup':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.autolevelup = isEnable
break
case 'simsimi':
case 'simi':
case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break 
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break 
case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
case 'antibule':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antibule = !isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.viewonce = isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitraba = isEnable
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break    
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable
break
case 'autobio':
isAll = true
if (!(isOwner)) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoBio = isEnable
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'sololatinos':
case 'sololatino':
case 'onlylatinos':
case 'onlylat':
case 'antiarabes':
case 'antifake':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.onlyLatinos = isEnable
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable
break
case 'antistickers':
case 'antisticker':
case 'antipegatina':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
throw false
}}
chat.antiSticker = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'nsfw':
case '+18':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nsfw = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `╭━〔  𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒 🍄  〕⬣
┣☆ ${usedPrefix + command} *welcome*
┣☆ ${usedPrefix + command} *antilink*
┣☆ ${usedPrefix + command} *antilink2*
┣☆ ${usedPrefix + command} *antifake*
┣☆ ${usedPrefix + command} *antirabes*
┣☆ ${usedPrefix + command} *modoadmin*
┣☆ ${usedPrefix + command} *antitoxic*
┣☆ ${usedPrefix + command} *autolevelup*
┣☆ ${usedPrefix + command} *modohorny*
┣☆ ${usedPrefix + command} *simi*
┣☆ ${usedPrefix + command} *detect*
┣☆ ${usedPrefix + command} *detect2*
┣☆ ${usedPrefix + command} *modoadmin*
┣☆ ${usedPrefix + command} *antiviewonce*
┣☆ ${usedPrefix + command} *autosticker*
┣☆ ${usedPrefix + command} *audios*
┣☆ ${usedPrefix + command} *antibule*
┣☆ ${usedPrefix + command} *juegos*
╰━━━━━━━━━━━━⬣

╭━〔  𝐏𝐀𝐑𝐀 𝐎𝐖𝐍𝐄𝐑 🍄  〕⬣
┣☆ ${usedPrefix + command} *restrict*
┣☆ ${usedPrefix + command} *public*
┣☆ ${usedPrefix + command} *pconly*
┣☆ ${usedPrefix + command} *gconly*
┣☆ ${usedPrefix + command} *antiprivado*
┣☆ ${usedPrefix + command} *autoread*
┣☆ ${usedPrefix + command} *modejadibot*
╰━━━━━━━━━━━━⬣`, m, fake, )
throw false
}
await conn.reply(m.chat, `╭━〔  𝐘𝐎𝐒𝐇𝐈𝐊𝐎 𝐁𝐎𝐓 🍄  〕⬣
┃֪࣪🍁 𝙾𝙿𝙲𝙸𝙾𝙽: ${type} 
┃֪࣪━━━━━━━━━━━━━━━
┃֪࣪🌳 𝙴𝚂𝚃𝙰𝙳𝙾: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
┃֪࣪━━━━━━━━━━━━━━━
┃֪࣪🌻 𝙿𝙰𝚁𝙰: ${isAll ? '𝚈𝙾𝚂𝙷𝙸𝙺𝙾𝙱𝙾𝚃-𝙼𝙳' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'} 
╰━━━━━━━━━━━━━━━⬣`, fkontak, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: wm,
body: `👋 Hola ` + nombre, previewType: 0, thumbnail: imagen6, sourceUrl: global.md}}})} 
handler.help = ['en', 'dis'].map(v => v + 'able')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler