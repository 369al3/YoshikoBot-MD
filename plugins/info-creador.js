if (command == 'owner' || command == 'creador' || command == 'contacto') {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;PROPIETARIO/OWNER DEL BOT 👑;;;\nFN:OWNER\nORG:PROPIETARIO/OWNER DEL BOT 👑\nTITLE:\nitem1.TEL;waid=5492266466080:+54 9 2266 46-6080\nitem1.X-ABLabel:PROPIETARIO/OWNER DEL BOT👑\nX-WA-BIZ-DESCRIPTION:ᴇsᴄʀɪʙɪ sᴏʟᴏ ᴘᴏʀ ᴄᴏsᴀs ᴅᴇʟ ʙᴏᴛ.\nX-WA-BIZ-NAME:PROPIETARIO/OWNER DEL BOT 👑\nEND:VCARD`
let a = await conn.sendMessage(m.chat, { contacts: { displayName: 'ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ 👑', contacts: [{ vcard }] }}, {quoted: m})
await conn.sendMessage(m.chat, { text : `${lenguaje['smsWel']()} @${sender.split("@")[0]}, ${lenguaje.info.text12}\n\n${fb}`, mentions: [sender]}, { quoted: a, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}