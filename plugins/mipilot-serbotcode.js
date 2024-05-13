const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion, 
    MessageRetryMap,
    makeCacheableSignalKeyStore, 
    jidNormalizedUser,
    PHONENUMBER_MCC
   } = await import('@whiskeysockets/baileys')
import moment from 'moment-timezone'
import NodeCache from 'node-cache'
import readline from 'readline'
import qrcode from "qrcode"
import crypto from 'crypto'
import fs from "fs"
import pino from 'pino';
import * as ws from 'ws';
const { CONNECTING } = ws
import { Boom } from '@hapi/boom'
import { makeWASocket } from '../lib/simple.js';

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {

  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
        throw `🚩 Este comando solo los puede usar el bot principal: wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`
}

        //=====
  async function bbts() {

  let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8)
  //let authFolderB = m.sender.split('@')[0]


    if (!fs.existsSync("./jadibts/"+ authFolderB)){
        fs.mkdirSync("./jadibts/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./jadibts/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

//--
const {state, saveState, saveCreds} = await useMultiFileAuthState(`./jadibts/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  //browser: ['Chrome (Linux)', '', ''],
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

//--
let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
        //parent.sendMessage(m.chat, { text: `🔮 Su número de teléfono no está definido` }, { quoted: m })
        process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
        //parent.sendMessage(m.chat, { text: `🚩 Su número debe comenzar con el código de país` }, { quoted: m })
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
        //parent.sendMessage(m.chat, { text: `🚩 Code: *${codeBot}*\n\n${mssg.botqr}` }, { quoted: m })
        parent.sendFile(m.chat, 'https://telegra.ph/file/0849c6ca9a0a2b0efbf30.jpg', 'qrcode.png', `♡ 𝙲𝚘𝚍𝚎: *${codeBot}*\n\n𝚅𝚒𝚗𝚌𝚞𝚕𝚎 𝚎𝚜𝚝𝚎 𝚌𝚘𝚍𝚒𝚐𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚝𝚎 𝚑𝚊𝚐𝚊𝚜 𝚜𝚞𝚋-𝚋𝚘𝚝 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴 𝚜𝚘𝚕𝚘 𝚎𝚕 𝚗𝚞𝚖𝚎𝚛𝚘 𝚚𝚞𝚎 𝚕𝚘 𝚜𝚘𝚕𝚒𝚌𝚒𝚝𝚘 𝚝𝚒𝚎𝚗𝚎 𝚚𝚞𝚎 𝚑𝚊𝚌𝚎𝚛𝚕𝚘`, fkontak)
        rl.close();
    }, 3000);
}

conn.isInit = false

//---new
let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
    // scan qr
   /* if (qr) {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', `${mssg.botqr}`, m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50 segundos
}*/

    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

     if (code !== DisconnectReason.connectionClosed){ 
        parent.sendMessage(conn.user.jid, {text : `🚩 Conexión pérdida re conectando`}, { quoted: fkontak }) //reconectar
    } else {
        parent.sendMessage(m.chat, {text : `⛔ 𝙲𝚎𝚛𝚛𝚊𝚗𝚍𝚘 :𝚌`}, { quoted: fkontak }) // session cerrada
    }
    }
    //----
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.sendMessage(m.chat, {text : args[0] ? `🍃 𝚅𝚊𝚕𝚎 𝚏𝚞𝚎 𝚝𝚘𝚍𝚘 𝚞𝚗 𝚎𝚡𝚒𝚝𝚘 𝚊𝚑𝚘𝚛𝚊 𝚎𝚛𝚎𝚜 𝚞𝚗 𝚂𝚞𝚋-𝙱𝚘𝚝 :𝟹` : `🌺 𝚅𝚊𝚕𝚎 𝚏𝚞𝚎 𝚝𝚘𝚍𝚘 𝚞𝚗 𝚎𝚡𝚒𝚝𝚘 𝚊𝚑𝚘𝚛𝚊 𝚎𝚛𝚎𝚜 𝚞𝚗 𝚂𝚞𝚋-𝙱𝚘𝚝 :𝟹`}, { quoted: fkontak })
    await sleep(5000)
    if (args[0]) return
                await parent.sendMessage(conn.user.jid, {text : `💙 𝚁𝚎𝚌𝚞𝚎𝚛𝚍𝚎𝚗 𝚚𝚞𝚎 𝚎𝚜𝚝𝚘 𝚎𝚜 𝚝𝚎𝚖𝚙𝚘𝚛𝚊𝚕. 𝚂𝚒 𝚎𝚕 𝚋𝚘𝚝 𝚙𝚛𝚒𝚗𝚌𝚒𝚙𝚊𝚕 𝚜𝚎 𝚛𝚎𝚒𝚗𝚒𝚌𝚒𝚊 𝚘 𝚜𝚎 𝚊𝚙𝚊𝚐𝚊, 𝚝𝚘𝚍𝚘𝚜 𝚜𝚎𝚐𝚞𝚒𝚛á𝚗 𝚜𝚞 𝚎𝚓𝚎𝚖𝚙𝚕𝚘. 𝚂𝚒 𝚎𝚜𝚝𝚘 𝚜𝚞𝚌𝚎𝚍𝚎, 𝚙𝚊𝚛𝚊 𝚟𝚘𝚕𝚟𝚎𝚛 𝚊 𝚒𝚗𝚒𝚌𝚒𝚊𝚛 𝚜𝚎𝚜𝚒ó𝚗 𝚜𝚒𝚗 𝚗𝚎𝚌𝚎𝚜𝚒𝚍𝚊𝚍 𝚍𝚎 𝚞𝚝𝚒𝚕𝚒𝚣𝚊𝚛 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎 𝚎𝚕 𝚌ó𝚍𝚒𝚐𝚘, 𝚜𝚒𝚖𝚙𝚕𝚎𝚖𝚎𝚗𝚝𝚎 𝚎𝚗𝚟í𝚊 𝚎𝚕 𝚖𝚎𝚗𝚜𝚊𝚓𝚎 𝚚𝚞𝚎 𝚕𝚎 𝚟𝚊𝚖𝚘𝚜 𝚖𝚊𝚗𝚍𝚊𝚛 𝚊 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚊𝚌𝚒𝚘𝚗 𝚜𝚒 𝚍𝚎𝚜𝚎𝚊𝚜 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛𝚝𝚎 𝚎𝚗 𝚎𝚕 𝚋𝚘𝚝 𝚙𝚛𝚒𝚗𝚌𝚒𝚙𝚊𝚕, 𝚢 𝚝𝚞 𝚝𝚎𝚗𝚎𝚛 𝚌𝚘𝚗𝚝𝚛𝚘𝚕 𝚝𝚎 𝚍𝚎𝚓𝚊𝚖𝚘𝚜 𝚎𝚕 𝚛𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚒𝚘 https://github.com/Diego-YL-177/Yotsuba-Nakano-MD`}, { quoted: fkontak })
                parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
          }

  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
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
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
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

conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
bbts()

}
handler.help = ['botclone']
handler.tags = ['serbot']
handler.command = ['code', 'codigo', 'sercode']
handler.rowner = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}