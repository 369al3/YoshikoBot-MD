/*⚠ PROHIBIDO EDITAR ⚠

El codigo de este archivo esta totalmente hecho por:
- Aiden_NotLogic >> https://github.com/ferhacks

El codigo de este archivo fue parchado por:
- ReyEndymion >> https://github.com/ReyEndymion
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21
- AzamiJs >> https://github.com/AzamiJs
*/

const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import('@whiskeysockets/baileys'))
import qrcode from 'qrcode'
import NodeCache from 'node-cache'
import fs from 'fs'
import path from 'path'
import pino from 'pino'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'

let check1 = 'NjBhZGVmZWI4N2M2'
let check2 = 'ZThkMmNkOGVlMDFmZD'
let check3 = 'UzYTI1MTQgIGluZ'
let check4 = 'm8tZG9uYXIuanMK'
let check5 = 'NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO'
let check6 = 'DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz'
let check8 = 'NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo'

let crm1 = 'Y2QgcGx1Z2lucy'
let crm2 = 'A7IG1kNXN1b'
let crm3 = 'SBpbmZvLWRvbmFyLmpz'
let crm4 = 'IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz'
let drm1 = ''
let drm2 = ''
let rtx = lenguajeYL['smsIniJadi']() 
let rtx2 = lenguajeYL['smsIniJadi2']() 

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
let parentw = conn
if (!global.db.data.settings[conn.user.jid].jadibot) return m.reply(`*⚠️ ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`)
if (conn.user.jid !== global.conn.user.jid) return parentw.reply(m.chat, `「🌺 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 🌺」\n\n• 🍃 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝚁 𝙷𝙰𝙲𝙴𝚁 𝚄𝙽𝙰 𝚂𝚄𝙱-𝙱𝙾𝚃 𝙳𝙴𝙽𝚃𝚁𝙾 𝙳𝙴 𝚄𝙽𝙰 𝚂𝚄𝙱-𝙱𝙾𝚃!\n\n• 🚩 𝙻𝙰 𝙱𝙾𝚃 𝙾𝙵𝙲: Wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}\n\n「🌺 𝐘𝐨𝐬𝐡𝐢𝐤𝐨 𝐁𝐨𝐭 - 𝐌𝐃 🌺」`, fkontak) 
const mcode = args[0] && args[0].includes('--code') ? true : args[1] && args[1].includes('--code') ? true : false


let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (mcode) {
args[0] = args[0].replace('--code', '').trim()
if (args[1]) args[1] = args[1].replace('--code', '').trim()
if (args[0] == '') args[0] = undefined
console.log(args[0])}
if (!fs.existsSync('./jadibts/'+ id)){
fs.mkdirSync('./jadibts/'+ id, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync('./jadibts/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, '\t')) : ''

if (fs.existsSync('./jadibts/' + id + '/creds.json')) {
let creds = JSON.parse(fs.readFileSync("./jadibts/" + id + "/creds.json"))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync('./jadibts/' + id + '/creds.json')
}}}

const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, 'base64')
exec(comb.toString('utf-8'), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)
async function jddt() {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? parentw.user.jid : m.sender
let id = `${who.split`@`[0]}`
if (!fs.existsSync('./jadibts/'+ id)){
fs.mkdirSync('./jadibts/'+ id, { recursive: true })
}
args[0] ? fs.writeFileSync('./jadibts/' + id + '/creds.json', JSON.stringify(JSON.parse(Buffer.from(args[0], 'base64').toString('utf-8')), null, `\t`)) : ''

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState("./jadibts/" + id)

const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version,
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['Sub-Bot', 'Opera', '5.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
const msg = store.loadMessage(key.remoteJid, key.id)
return msg.message && undefined
} return {
conversation: 'YoshikoBot-MD',
}}}

let conn = makeWASocket(connectionOptions)
conn.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) conn.isInit = false
if (qr && !mcode) return parentw.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx + drmer.toString('utf-8')}, { quoted: fkontak})
if (qr && mcode) {
parentw.sendMessage(m.chat, {text : rtx2 + drmer.toString('utf-8')}, { quoted: fkontak })
await sleep(5000)
let secret = await conn.requestPairingCode((m.sender.split`@`[0]))
await m.reply(secret)}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
conn.ws.close()
} catch {
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
//if (connection === 'close') {
//console.log(reason)
//if (reason == 405) {
await fs.unlinkSync('./jadibts/' + id + '/creds.json')

return await conn.reply(m.chat, '⛔ 𝙲𝚎𝚛𝚛𝚊𝚗𝚍𝚘 :𝚌', fkontak)
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
const errorMessages = {
[DisconnectReason.badSession]: "Archivo de sesión incorrecto, elimine la sesión y escanee nuevamente",
[DisconnectReason.connectionClosed]: "Conexión cerrada, reconectando....",
[DisconnectReason.connectionLost]: "Conexión cerrada, reconectando....",
[DisconnectReason.connectionReplaced]: "Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero",
[DisconnectReason.loggedOut]: "Dispositivo desconectado, escanee nuevamente y ejecute....",
[DisconnectReason.restartRequired]: "Reiniciar requerido, reiniciar....",
[DisconnectReason.timedOut]: "CONEXIÓN PERDIDA, CONECTANDO....",
};

if (reason in errorMessages) {
console.log(errorMessages[reason]);
if (reason === DisconnectReason.badSession || reason === DisconnectReason.connectionReplaced || reason === DisconnectReason.loggedOut) {
skmod.logout()
var ur = global.listJadibot.indexOf(skmod) 
if (ur < 0) return
delete global.listJadibot(ur)
global.listJadibot.splice(ur, 1)
} else {
skBot();
}} else {
skmod.end(`Conexion perdida desconocida: ${reason}|${connection}`);
if (global.db.data == null) loadDatabase()
if (connection == `open`) {
conn.isInit = true
global.conns.push(conn)
await parentw.sendMessage(m.chat, {text : args[0] ? `🌺 𝚅𝚊𝚕𝚎, 𝚏𝚞𝚎 𝚝𝚘𝚍𝚘 𝚞𝚗 𝚎𝚡𝚒𝚝𝚘 𝚊𝚑𝚘𝚛𝚊 𝚎𝚛𝚎𝚜 𝚞𝚗𝚊 𝚂𝚞𝚋-𝙱𝚘𝚝 :𝟹` : `🍄 𝙻𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚊, 𝚞𝚜𝚎 𝚜𝚞 (𝙸𝙳) 𝚙𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚕𝚊 𝚜𝚞𝚋-𝚋𝚘𝚝`}, { quoted: fkontak })
await parentw.sendMessage(m.chat, {text : `🍂 𝙻𝚊 𝚋𝚘𝚝 𝚢𝚊 𝚎𝚜𝚝𝚊 𝚌𝚘𝚗𝚎𝚌𝚝𝚊𝚍𝚊, 𝚎𝚜𝚙𝚎𝚛𝚎 𝚞𝚗 𝚖𝚘𝚖𝚎𝚗𝚝𝚘...`}, { quoted: fkontak })
await sleep(5000)
if (!args[0]) parentw.sendMessage(m.chat, {text : usedPrefix + command + ' ' + Buffer.from(fs.readFileSync('./jadibts/' + id + '/creds.json'), 'utf-8').toString('base64')}, { quoted: fkontak })    

}}
setInterval(async () => {
if (!conn.user) {
try { conn.ws.close() } catch (e) {      
console.log(await creloadHandler(true).catch(console.error))
}
conn.ev.removeAllListeners()
let i = global.conns.indexOf(conn)                
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler

} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = conn.chats
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}
conn.welcome = lenguajeYL['smsWelcome']() 
conn.bye = lenguajeYL['smsBye']() 
conn.spromote = lenguajeYL['smsSpromote']() 
conn.sdemote = lenguajeYL['smsSdemote']() 
conn.sDesc = lenguajeYL['smsSdesc']() 
conn.sSubject = lenguajeYL['smsSsubject']() 
conn.sIcon = lenguajeYL['smsSicon']() 
conn.sRevoke = lenguajeYL['smsSrevoke']() 

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.onCall = handler.callUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

const currentDateTime = new Date()
const messageDateTime = new Date(conn.ev * 1000)
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = false
})
} else {
console.log(conn.chats, `🌻 𝙴𝚜𝚙𝚎𝚛𝚎 𝚕𝚊 𝚋𝚘𝚝 𝚎𝚜𝚝𝚊 𝚕𝚎𝚢𝚎𝚗𝚍𝚘 𝚕𝚘𝚜 𝚖𝚎𝚗𝚜𝚊𝚓𝚎𝚜...`, conn.ev)
Object.keys(conn.chats).forEach(jid => {
conn.chats[jid].isBanned = true
})
}

conn.ev.on(`messages.upsert`, conn.handler)
conn.ev.on(`group-participants.update`, conn.participantsUpdate)
conn.ev.on(`groups.update`, conn.groupsUpdate)
conn.ev.on(`message.delete`, conn.onDelete)
conn.ev.on(`call`, conn.onCall)
conn.ev.on(`connection.update`, conn.connectionUpdate)
conn.ev.on(`creds.update`, conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
jddt()
})

} 
handler.help = [`jadibot`, `serbot`, `getcode`, `rentbot`]
handler.tags = [`jadibot`]
handler.command = /^(jadibot|serbot|rentbot)/i
handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}