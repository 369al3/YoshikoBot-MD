import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `Hola ${taguser}

*╭꒱ᰔᩚ⸽⃕SᴀᴋᴜʀᴀBᴏᴛ-MD🍁⃨፝⃕✰*
┃----------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃👑 *Creador:* Diego
┃✨️ *Numero:* +57 301 3114854
┃🕑 *Tiempo activo:* ${uptime}
┃📂 *Usuarios regs:* ${rtotalreg}
┃🗂 *Usuarios totales:* ${rtotal}
┃🗓 ${date}
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃  INFO - USER
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ *🎖️ Nivel:* ${level}
┃ *🧰 Experiencia:* ${exp}
┃ *⚓ Rango:* ${role}
┃ *💎 Diamantes:* ${limit}
┃ *🦁 SakuCoins:* ${money}
┃ *🪙 Tokens:* ${joincount}
┃ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BOT/OFICIAL SUBBOT 
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ʙᴏᴛ ᴏғɪᴄɪᴀʟ: ${(conn.user.jid == global.conn.user.jid ? '' : `sᴜʙʙᴏᴛ ᴅᴇ: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'ᴇsᴛᴇ ᴇs ᴇʟ ʙᴏᴛ ᴏғɪᴄɪᴀʟ'}
*╚═══❖•ೋ° °ೋ•❖═══╝*
${readMore}
*╔═══❖•ೋ° °ೋ•❖═══╗* 
┃SOLUCIONES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ Mensajes en espera
┃↻ _${usedPrefix}fixmsgespera_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ Mensajes en espera (owner)
┃↺ _${usedPrefix}dsowner_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN SUB BOT
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}serbot --code_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}serbot_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}deletebot_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}token_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}stop_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}bots_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}terminosycondiciones_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}grupos_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}estado_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}infobot_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}speedtest_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}donar_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}owner_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}script_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BOT A TU GRUPO
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃✨️ _${usedPrefix}join *<enlace / link / url>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃COMANDOS 
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable restrict_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable restrict_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable autoread_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable autoread_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable antispam_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable antispam_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable anticall_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable anticall_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable modoia_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable modoia_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable audios_bot_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable audios_bot_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable antiprivado_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable antiprivado_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ DIVERSIONES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}prostituto *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}prostituta *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}gay2 *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}lesbiana *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pajero *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pajera *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}follar *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}puto *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}puta *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}manco *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}manca *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}rata *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}love *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}doxear *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pregunta *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}suitpvp *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}slot *<apuesta>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ttt *<nombre sala>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}delttt_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}acertijo_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}personalidad *<nombre / @tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}simi *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}top *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}topgays_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}topotakus_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}formarpareja_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}verdad_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}reto_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}cancion_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pista_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}akinator_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}wordfind_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN ON/OFF
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *welcome*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *welcome*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *modohorny*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *modohorny*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antilink*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antilink*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antilink2*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antilink2*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *detect*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *detect*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *audios*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *audios*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *autosticker*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *autosticker*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antiviewonce*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antiviewonce*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antitoxic*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antitoxic*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antitraba*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antitraba*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antiarabes*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antiarabes*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *modoadmin*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *modoadmin*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}enable *antidelete*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}disable *antidelete*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃REPORTAR - ERROR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}reporte *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃OPCIÓN - DESCARGA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}instagram *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}mediafire *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}gitclone *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}gdrive *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tiktok *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}twitter *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}fb *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytshort *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}videodoc *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}dapk2 *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}stickerpack *<enlace / link / url>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}play *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}play2 *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}play.1 *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}play.2 *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}playdoc *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}playdoc2 *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}playlist *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}spotify *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ringtone *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}soundcloud *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}imagen *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pinterest *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}wallpaper *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pptiktok *<nombre de usuario>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}igstalk *<nombre de usuario>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}igstory *<nombre de usuario>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tiktokstalk *<username>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BUSCADOR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}githubsearch *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pelisplus *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}modapk *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}stickersearch *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}stickersearch2 *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}xnxxsearch *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}animeinfo *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}google *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}letra *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}wikipedia *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytsearch *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}playstore *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃CONFIG - GRUPOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}salir *<admins>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}add *<numero>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}kick *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}kick2 *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}listanum *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}kicknum *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}grupo *<abrir / cerrar>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}promote *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}demote *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}demote *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}infogroup_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}resetlink_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}link_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setname *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setdesc *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}invocar *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setwelcome *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setbye *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}hidetag *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}hidetag *<audio>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}hidetag *<video>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}hidetag *<imagen>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}warn *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}unwarn *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}listwarn_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}fantasmas_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}destraba_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setpp *<imagen>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN CÓNVERTIR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}toanime *<imagen>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}togifaud *<video>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}toimg *<sticker>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tomp3 *<video>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tomp3 *<nota de voz>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}toptt *<video / audio>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tovideo *<sticker>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tourl *<video / imagen / audio>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tts *<idioma> <texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}tts *<efecto> <texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃LOGOS & EFECTOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}logos *<efecto> <texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}logochristmas *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}logocorazon *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}ytcomment *<texto>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}hornycard *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}simpcard *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}lolice *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}itssostupid_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}pixelar_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}blur_
*╰━━━━━━━━━━━━⬣*

*╭━〔 FRACES - HISTORIAS 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🔥 _${usedPrefix}piropo_
┃🔥 _${usedPrefix}consejo_
┃🔥 _${usedPrefix}fraseromantica_
┃🔥 _${usedPrefix}historiaromantica_
*╰━━━━━━━━━━━━⬣*

*╭━〔 FUNCIÓN ANIME 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🔮 _${usedPrefix}menuanimes_
*╰━━━━━━━━━━━━⬣*

*╭━〔 ALEATORIO/EXTRA 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}kpop *<blackpink / exo / bts>*_
┃🛠 _${usedPrefix}cristianoronaldo_
┃🛠 _${usedPrefix}messi_
┃🛠 _${usedPrefix}cat_
┃🛠 _${usedPrefix}dog_
┃🛠 _${usedPrefix}meme_
┃🛠 _${usedPrefix}itzy_
┃🛠 _${usedPrefix}blackpink_
┃🛠 _${usedPrefix}navidad_
┃🛠 _${usedPrefix}wpmontaña_
┃🛠 _${usedPrefix}pubg_
┃🛠 _${usedPrefix}wpgaming_
┃🛠 _${usedPrefix}wpaesthetic_
┃🛠 _${usedPrefix}wpaesthetic2_
┃🛠 _${usedPrefix}wprandom_
┃🛠 _${usedPrefix}wallhp_
┃🛠 _${usedPrefix}wpvehiculo_
┃🛠 _${usedPrefix}wpmoto_
┃🛠 _${usedPrefix}coffee_
┃🛠 _${usedPrefix}pentol_
┃🛠 _${usedPrefix}caricatura_
┃🛠 _${usedPrefix}ciberespacio_
┃🛠 _${usedPrefix}technology_
┃🛠 _${usedPrefix}doraemon_
┃🛠 _${usedPrefix}hacker_
┃🛠 _${usedPrefix}planeta_
┃🛠 _${usedPrefix}randomprofile_
*╰━━━━━━━━━━━━⬣*

*╭━〔 FÚNCIONES +18 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🔞 _${usedPrefix}labiblia_
*╰━━━━━━━━━━━━⬣*

*╭━〔 EFECTOS DE AUDIOS 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🥏 ℛ𝓔𝓢𝓟𝓞𝓝𝓓𝓔 𝓐 𝓤𝓝𝓐 𝓝𝓞𝓣𝓐 𝓓𝓔 𝓥𝓞𝓩 𝓞 𝓐𝓤𝓓𝓘𝓞*
┃⚜️ _${usedPrefix}bass_
┃⚜️ _${usedPrefix}blown_
┃⚜️ _${usedPrefix}deep_
┃⚜️ _${usedPrefix}earrape_
┃⚜️ _${usedPrefix}fast_
┃⚜️ _${usedPrefix}fat_
┃⚜️ _${usedPrefix}nightcore_
┃⚜️ _${usedPrefix}reverse_
┃⚜️ _${usedPrefix}robot_
┃⚜️ _${usedPrefix}slow_
┃⚜️ _${usedPrefix}smooth_
┃⚜️ _${usedPrefix}tupai_
*╰━━━━━━━━━━━━⬣*

*╭━〔 CHAT ANONIMO 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🚀 _${usedPrefix}start_
┃🚀 _${usedPrefix}next_
┃🚀 _${usedPrefix}leave_
*╰━━━━━━━━━━━━⬣*

*╭━〔 SONIDOS 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃✨️ _${usedPrefix}menuaudios_
*╰━━━━━━━━━━━━⬣*

*╭━〔 UTILIDADES 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃🌸 _${usedPrefix}inspect *<link wa_gc>*_
┃🌸 _${usedPrefix}chatgpt *<texto>*_
┃🌸 _${usedPrefix}delchatgpt_
┃🌸 _${usedPrefix}gptvoz *<texto>*_
┃🌸 _${usedPrefix}dall-e *<texto>*_
┃🌸 _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┃🌸 _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┃🌸 _${usedPrefix}readviewonce *<imagen / video>*_
┃🌸 _${usedPrefix}clima *<país> <ciudad>*_
┃🌸 _${usedPrefix}encuesta *<texto1|texto2...>*_
┃🌸 _${usedPrefix}afk *<motivo>*_
┃🌸 _${usedPrefix}ocr *<responde a imagen>*_
┃🌸 _${usedPrefix}hd *<responde a imagen>*_
┃🌸 _${usedPrefix}acortar *<enlace / link / url>*_
┃🌸 _${usedPrefix}calc *<operacion math>*_
┃🌸 _${usedPrefix}del *<mensaje>*_
┃🌸 _${usedPrefix}whatmusic *<audio>*_
┃🌸 _${usedPrefix}readqr *<imagen (QR)>*_
┃🌸 _${usedPrefix}qrcode *<texto>*_
┃🌸 _${usedPrefix}readmore *<texto1| texto2>*_
┃🌸 _${usedPrefix}styletext *<texto>*_
┃🌸 _${usedPrefix}traducir *<texto>*_
┃🌸 _${usedPrefix}nowa *<numero>*_
┃🌸 _${usedPrefix}covid *<pais>*_
┃🌸 _${usedPrefix}horario_
┃🌸 _${usedPrefix}dropmail_
*╰━━━━━━━━━━━━⬣*

*╭━〔 LIMITES-ECONOMIA 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃⚡️ _${usedPrefix}adventure_
┃🦊 _${usedPrefix}cazar_
┃⚡️ _${usedPrefix}cofre_
┃🦊 _${usedPrefix}balance_
┃⚡️ _${usedPrefix}claim_
┃🦊 _${usedPrefix}heal_
┃⚡️ _${usedPrefix}lb_
┃🦊 _${usedPrefix}levelup_
┃⚡️ _${usedPrefix}myns_
┃🦊 _${usedPrefix}perfil_
┃⚡️ _${usedPrefix}work_
┃🦊 _${usedPrefix}minar_
┃⚡️ _${usedPrefix}minar2_
┃🦊 _${usedPrefix}buy_
┃⚡️ _${usedPrefix}buyall_
┃🦊 _${usedPrefix}verificar_
┃⚡️ _${usedPrefix}robar *<cantidad> <@tag>*_
┃🦊 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┃⚡️ _${usedPrefix}unreg *<numero de serie>*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 FUNCIÓN STIKERS〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃💮 _${usedPrefix}sticker *<responder a imagen o video>*_
┃💧 _${usedPrefix}sticker *<enlace / link / url>*_
┃💮 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┃💧 _${usedPrefix}sticker2 *<enlace / link / url>*_
┃💮 _${usedPrefix}s *<responder a imagen o video>*_
┃💧 _${usedPrefix}s *<enlace / link / url>*_
┃💮 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┃💧 _${usedPrefix}scircle *<imagen>*_
┃💮 _${usedPrefix}sremovebg *<imagen>*_
┃💧 _${usedPrefix}semoji *<tipo> <emoji>*_
┃💮 _${usedPrefix}qc *<texto>*_
┃💧 _${usedPrefix}attp *<texto>*_
┃💮 _${usedPrefix}attp2 *<texto>*_
┃💧 _${usedPrefix}attp3 *<texto>*_
┃💮 _${usedPrefix}ttp *<texto>*_
┃💧 _${usedPrefix}ttp2 *<texto>*_
┃💮 _${usedPrefix}ttp3 *<texto>*_
┃💧 _${usedPrefix}ttp4 *<texto>*_
┃💮 _${usedPrefix}ttp5 *<texto>*_
┃💧 _${usedPrefix}pat *<@tag>*_
┃💮 _${usedPrefix}slap *<@tag>*_
┃💧 _${usedPrefix}kiss *<@tag>*_
┃💮 _${usedPrefix}dado_
┃💧 _${usedPrefix}wm *<packname> <author>*_
┃💮 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┃💧 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╰━━━━━━━━━━━━⬣*

*╭━〔 FUNCIÓN - CREADOR 〕━⬣*
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃👑  > *<funcion>*
┃👑 => *<funcion>*
┃👑 $ *<funcion>*
┃👑 _${usedPrefix}setprefix *<prefijo>*_
┃👑 _${usedPrefix}resetprefix_
┃👑 _${usedPrefix}autoadmin_
┃👑 _${usedPrefix}grouplist_
┃👑 _${usedPrefix}chetar_
┃👑 _${usedPrefix}leavegc_
┃👑 _${usedPrefix}cajafuerte_
┃👑 _${usedPrefix}blocklist_
┃👑 _${usedPrefix}addowner *<@tag / numero>*_
┃👑 _${usedPrefix}delowner *<@tag / numero>*_
┃👑 _${usedPrefix}block *<@tag / numero>*_
┃👑 _${usedPrefix}unblock *<@tag / numero>*_
┃👑 _${usedPrefix}enable *restrict*_
┃👑 _${usedPrefix}disable *restrict*_
┃👑 _${usedPrefix}enable *autoread*_
┃👑 _${usedPrefix}disable *autoread*_
┃👑 _${usedPrefix}enable *public*_
┃👑 _${usedPrefix}disable *public*_
┃👑 _${usedPrefix}enable *pconly*_
┃👑 _${usedPrefix}disable *pconly*_
┃👑 _${usedPrefix}enable *gconly*_
┃👑 _${usedPrefix}disable *gconly*_
┃👑 _${usedPrefix}enable *anticall*_
┃👑 _${usedPrefix}disable *anticall*_
┃👑 _${usedPrefix}enable *antiprivado*_
┃👑 _${usedPrefix}disable *antiprivado*_
┃👑 _${usedPrefix}enable *modejadibot*_
┃👑 _${usedPrefix}disable *modejadibot*_
┃👑 _${usedPrefix}enable *audios_bot*_
┃👑 _${usedPrefix}disable *audios_bot*_
┃👑 _${usedPrefix}enable *antispam*_
┃👑 _${usedPrefix}disable *antispam*_
┃👑 _${usedPrefix}msg *<texto>*_
┃👑 _${usedPrefix}banchat_
┃👑 _${usedPrefix}unbanchat_
┃👑 _${usedPrefix}resetuser *<@tag>*_
┃👑 _${usedPrefix}banuser *<@tag>*_
┃👑 _${usedPrefix}unbanuser *<@tag>*_
┃👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┃👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┃👑 _${usedPrefix}banuser *<@tag>*_
┃👑 _${usedPrefix}bc *<texto>*_
┃👑 _${usedPrefix}bcchats *<texto>*_
┃👑 _${usedPrefix}bcgc *<texto>*_
┃👑 _${usedPrefix}bcgc2 *<audio>*_
┃👑 _${usedPrefix}bcgc2 *<video>*_
┃👑 _${usedPrefix}bcgc2 *<imagen>*_
┃👑 _${usedPrefix}bcbot *<texto>*_
┃👑 _${usedPrefix}cleartpm_
┃👑 _${usedPrefix}restart_
┃👑 _${usedPrefix}update_
┃👑 _${usedPrefix}banlist_
┃👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
┃👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┃👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}delprem *<@tag>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}listcmd_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}setppbot *<responder a imagen>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}saveimage_
┃☬⃝ᩎ⋟᷊᷂᷊᷊᷊᷊᷊᷊᷊᷊᷊᷊᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷂᷊᷊᷂᷂᷂᷂ _${usedPrefix}viewimage_
*╚═══❖•ೋ° °ೋ•❖═══╝*`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}