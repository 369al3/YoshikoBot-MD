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
 const str = `╭═══〘✯✯✯✯✯✯✯✯✯〙═══╮
║    ◉— *𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭 - 𝐌𝐃* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
╰═══╡✯✯✯✯✯✯✯✯✯╞════╯

*╔════❖•ೋ° °ೋ•❖════╗*
┃👑 *Creador:* Diego
┃✨️ *Numero:* +57 301 3114854
┃🕑 *Tiempo activo:* ${uptime}
┃📂 *Usuarios regs:* ${rtotalreg}
┃🗂 *Usuarios totales:* ${rtotal}
┃🗓 ${date}
*╚════❖•ೋ° °ೋ•❖════╝*

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
┃ඬ⃟ ✨ Mensajes en espera
┃↻ _${usedPrefix}fixmsgespera_
┃ඬ⃟ ✨ Mensajes en espera (owner)
┃↺ _${usedPrefix}dsowner_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN SUB BOT
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}serbot --code_
┃ඬ⃟ ⚡ _${usedPrefix}serbot_
┃ඬ⃟ ⚡ _${usedPrefix}deletebot_
┃ඬ⃟ ⚡ _${usedPrefix}token_
┃ඬ⃟ ⚡ _${usedPrefix}stop_
┃ඬ⃟ ⚡ _${usedPrefix}bots_
┃ඬ⃟ ⚡ _${usedPrefix}terminosycondiciones_
┃ඬ⃟ ⚡ _${usedPrefix}grupos_
┃ඬ⃟ ⚡ _${usedPrefix}estado_
┃ඬ⃟ ⚡ _${usedPrefix}infobot_
┃ඬ⃟ ⚡ _${usedPrefix}speedtest_
┃ඬ⃟ ⚡ _${usedPrefix}donar_
┃ඬ⃟ ⚡ _${usedPrefix}owner_
┃ඬ⃟ ⚡ _${usedPrefix}script_
┃ඬ⃟ ⚡ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BOT A TU GRUPO
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}join *<enlace / link / url>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃COMANDOS 
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}enable restrict_
┃ඬ⃟ ⚡ _${usedPrefix}disable restrict_
┃ඬ⃟ ⚡ _${usedPrefix}enable autoread_
┃ඬ⃟ ⚡ _${usedPrefix}disable autoread_
┃ඬ⃟ ⚡ _${usedPrefix}enable antispam_
┃ඬ⃟ ⚡ _${usedPrefix}disable antispam_
┃ඬ⃟ ⚡ _${usedPrefix}enable anticall_
┃ඬ⃟ ⚡ _${usedPrefix}disable anticall_
┃ඬ⃟ ⚡ _${usedPrefix}enable modoia_
┃ඬ⃟ ⚡ _${usedPrefix}disable modoia_
┃ඬ⃟ ⚡ _${usedPrefix}enable audios_bot_
┃ඬ⃟ ⚡ _${usedPrefix}disable audios_bot_
┃ඬ⃟ ⚡ _${usedPrefix}enable antiprivado_
┃ _${usedPrefix}disable antiprivado_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ DIVERSIONES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃ඬ⃟ ✨ _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
┃ඬ⃟ ✨ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┃ඬ⃟ ✨ _${usedPrefix}prostituto *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}prostituta *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}gay2 *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}lesbiana *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pajero *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pajera *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}follar *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}puto *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}puta *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}manco *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}manca *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}rata *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}love *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}doxear *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}pregunta *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}suitpvp *<@tag>*_
┃ඬ⃟ ✨  _${usedPrefix}slot *<apuesta>*_
┃ඬ⃟ ✨ _${usedPrefix}ttt *<nombre sala>*_
┃ඬ⃟ ✨ _${usedPrefix}delttt_
┃ඬ⃟ ✨ _${usedPrefix}acertijo_
┃ඬ⃟ ✨ _${usedPrefix}personalidad *<nombre / @tag>*_
┃ඬ⃟ ✨ _${usedPrefix}simi *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}top *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}topgays_
┃ඬ⃟ ✨ _${usedPrefix}topotakus_
┃ඬ⃟ ✨ _${usedPrefix}formarpareja_
┃ඬ⃟ ✨ _${usedPrefix}verdad_
┃ඬ⃟ ✨ _${usedPrefix}reto_
┃ඬ⃟ ✨ _${usedPrefix}cancion_
┃ඬ⃟ ✨ _${usedPrefix}pista_
┃ඬ⃟ ✨ _${usedPrefix}akinator_
┃ඬ⃟ ✨ _${usedPrefix}wordfind_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN ON/OFF
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}enable *welcome*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *welcome*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *modohorny*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *modohorny*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antilink*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antilink*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antilink2*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antilink2*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *detect*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *detect*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *audios*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *audios*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *autosticker*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *autosticker*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antiviewonce*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antiviewonce*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antitoxic*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antitoxic*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antitraba*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antitraba*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antiarabes*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antiarabes*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *modoadmin*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *modoadmin*_
┃ඬ⃟ ⚡ _${usedPrefix}enable *antidelete*_
┃ඬ⃟ ⚡ _${usedPrefix}disable *antidelete*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃REPORTAR - ERROR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}reporte *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃OPCIÓN - DESCARGA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}instagram *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}mediafire *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}gitclone *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}gdrive *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktok *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktokimg *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}xnxxdl *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}xvideosdl *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}twitter *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}fb *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytshort *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp3 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp4 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}videodoc *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}dapk2 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickerpack *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}play *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play.1 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}play.2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playdoc *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playdoc2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}playlist *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}spotify *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ringtone *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}soundcloud *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}imagen *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pinterest *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}wallpaper *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pptiktok *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}igstalk *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}igstory *<nombre de usuario>*_
┃ඬ⃟ ⚡ _${usedPrefix}tiktokstalk *<username>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃BUSCADOR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}githubsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}pelisplus *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}modapk *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}stickersearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}stickersearch2 *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}xnxxsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}animeinfo *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}google *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}letra *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}wikipedia *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}ytsearch *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}playstore *<texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃CONFIG - GRUPOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᥫ᭡ _${usedPrefix}salir *<admins>*_
┃ᥫ᭡ _${usedPrefix}add *<numero>*_
┃ᥫ᭡ _${usedPrefix}kick *<@tag>*_
┃ᥫ᭡ _${usedPrefix}kick2 *<@tag>*_
┃ᥫ᭡ _${usedPrefix}listanum *<texto>*_
┃ᥫ᭡ _${usedPrefix}kicknum *<texto>*_
┃ᥫ᭡ _${usedPrefix}grupo *<abrir / cerrar>*_
┃ᥫ᭡ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┃ᥫ᭡ _${usedPrefix}promote *<@tag>*_
┃ᥫ᭡ _${usedPrefix}demote *<@tag>*_
┃ᥫ᭡ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃ᥫ᭡ _${usedPrefix}demote *<@tag>*_
┃ᥫ᭡ _${usedPrefix}infogroup_
┃ᥫ᭡ _${usedPrefix}resetlink_
┃ᥫ᭡ _${usedPrefix}link_
┃ᥫ᭡ _${usedPrefix}setname *<texto>*_
┃ᥫ᭡ _${usedPrefix}setdesc *<texto>*_
┃ᥫ᭡ _${usedPrefix}invocar *<texto>*_
┃ᥫ᭡ _${usedPrefix}setwelcome *<texto>*_
┃ᥫ᭡ _${usedPrefix}setbye *<texto>*_
┃ᥫ᭡ _${usedPrefix}hidetag *<texto>*_
┃ᥫ᭡ _${usedPrefix}hidetag *<audio>*_
┃ᥫ᭡ _${usedPrefix}hidetag *<video>*_
┃ᥫ᭡ _${usedPrefix}hidetag *<imagen>*_
┃ᥫ᭡ _${usedPrefix}warn *<@tag>*_
┃ᥫ᭡ _${usedPrefix}unwarn *<@tag>*_
┃ᥫ᭡ _${usedPrefix}listwarn_
┃ᥫ᭡ _${usedPrefix}fantasmas_
┃ᥫ᭡ _${usedPrefix}destraba_
┃ᥫ᭡ _${usedPrefix}setpp *<imagen>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN CÓNVERTIR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᰔᩚ _${usedPrefix}toanime *<imagen>*_
┃ᰔᩚ _${usedPrefix}togifaud *<video>*_
┃ᰔᩚ _${usedPrefix}toimg *<sticker>*_
┃ᰔᩚ _${usedPrefix}tomp3 *<video>*_
┃ᰔᩚ _${usedPrefix}tomp3 *<nota de voz>*_
┃ᰔᩚ _${usedPrefix}toptt *<video / audio>*_
┃ᰔᩚ _${usedPrefix}tovideo *<sticker>*_
┃ᰔᩚ _${usedPrefix}tourl *<video / imagen / audio>*_
┃ᰔᩚ _${usedPrefix}tts *<idioma> <texto>*_
┃ᰔᩚ _${usedPrefix}tts *<efecto> <texto>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃LOGOS & EFECTOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᥫ᭡ _${usedPrefix}logos *<efecto> <texto>*_
┃ᥫ᭡ _${usedPrefix}logochristmas *<texto>*_
┃ᥫ᭡ _${usedPrefix}logocorazon *<texto>*_
┃ᥫ᭡ _${usedPrefix}ytcomment *<texto>*_
┃ᥫ᭡ _${usedPrefix}hornycard *<@tag>*_
┃ᥫ᭡ _${usedPrefix}simpcard *<@tag>*_
┃ᥫ᭡ _${usedPrefix}lolice *<@tag>*_
┃ᥫ᭡ _${usedPrefix}itssostupid_
┃ᥫ᭡ _${usedPrefix}pixelar_
┃ᥫ᭡ _${usedPrefix}blur_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ FRACES - HISTORIAS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᰔᩚ _${usedPrefix}piropo_
┃ᰔᩚ _${usedPrefix}consejo_
┃ᰔᩚ _${usedPrefix}fraseromantica_
┃ᰔᩚ _${usedPrefix}historiaromantica_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ FUNCIÓN ANIME
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᥫ᭡ _${usedPrefix}menuanimes_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ALEATORIO/EXTRA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃⋆⁺˖⸙̭❛╰☆╮ _${usedPrefix}kpop *<blackpink / exo / bts>*_
┃ᰔᩚ _${usedPrefix}cristianoronaldo_
┃ᰔᩚ _${usedPrefix}messi_
┃ᰔᩚ _${usedPrefix}cat_
┃ᰔᩚ _${usedPrefix}dog_
┃ᰔᩚ _${usedPrefix}meme_
┃ᰔᩚ _${usedPrefix}itzy_
┃ᰔᩚ _${usedPrefix}blackpink_
┃ᰔᩚ _${usedPrefix}navidad_
┃ᰔᩚ _${usedPrefix}wpmontaña_
┃ᰔᩚv_${usedPrefix}pubg_
┃ᰔᩚ _${usedPrefix}wpgaming_
┃ᰔᩚ _${usedPrefix}wpaesthetic_
┃ᰔᩚ _${usedPrefix}wpaesthetic2_
┃ᰔᩚ _${usedPrefix}wprandom_
┃ᰔᩚ _${usedPrefix}wallhp_
┃ᰔᩚ _${usedPrefix}wpvehiculo_
┃ᰔᩚ _${usedPrefix}wpmoto_
┃ᰔᩚ _${usedPrefix}coffee_
┃ᰔᩚ _${usedPrefix}pentol_
┃ᰔᩚ _${usedPrefix}caricatura_
┃ᰔᩚ _${usedPrefix}ciberespacio_
┃ᰔᩚ _${usedPrefix}technology_
┃ᰔᩚ _${usedPrefix}doraemon_
┃ᰔᩚ _${usedPrefix}hacker_
┃ᰔᩚ _${usedPrefix}planeta_
┃ᰔᩚ _${usedPrefix}randomprofile_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FÚNCIONES +18
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᥫ᭡ _${usedPrefix}labiblia_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃EFECTOS DE AUDIOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰*
┃ඬ⃟ ✨ _${usedPrefix}bass_
┃ඬ⃟ ✨ _${usedPrefix}blown_
┃ඬ⃟ ✨ _${usedPrefix}deep_
┃ඬ⃟ ✨ _${usedPrefix}earrape_
┃ඬ⃟ ✨ _${usedPrefix}fast_
┃ඬ⃟ ✨ _${usedPrefix}fat_
┃ඬ⃟ ✨ _${usedPrefix}nightcore_
┃ඬ⃟ ✨ _${usedPrefix}reverse_
┃ඬ⃟ ✨ _${usedPrefix}robot_
┃ඬ⃟ ✨ _${usedPrefix}slow_
┃ඬ⃟ ✨ _${usedPrefix}smooth_
┃ඬ⃟ ✨ _${usedPrefix}tupai_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ CHAT ANONIMO
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}start_
┃ඬ⃟ ⚡ _${usedPrefix}next_
┃ඬ⃟ ⚡ _${usedPrefix}leave_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃ SONIDOS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}menuaudios_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃UTILIDADES
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ᥫ᭡ _${usedPrefix}inspect *<link wa_gc>*_
┃ᥫ᭡ _${usedPrefix}chatgpt *<texto>*_
┃ᥫ᭡ _${usedPrefix}delchatgpt_
┃ᥫ᭡ _${usedPrefix}gptvoz *<texto>*_
┃ᥫ᭡ _${usedPrefix}dall-e *<texto>*_
┃ᥫ᭡ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┃ᥫ᭡ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┃ᥫ᭡ _${usedPrefix}readviewonce *<imagen / video>*_
┃ᥫ᭡ _${usedPrefix}clima *<país> <ciudad>*_
┃ᥫ᭡ _${usedPrefix}encuesta *<texto1|texto2...>*_
┃ᥫ᭡ _${usedPrefix}afk *<motivo>*_
┃ᥫ᭡ _${usedPrefix}ocr *<responde a imagen>*_
┃ᥫ᭡ _${usedPrefix}hd *<responde a imagen>*_
┃ᥫ᭡ _${usedPrefix}acortar *<enlace / link / url>*_
┃ᥫ᭡ _${usedPrefix}calc *<operacion math>*_
┃ᥫ᭡ _${usedPrefix}del *<mensaje>*_
┃ᥫ᭡ _${usedPrefix}whatmusic *<audio>*_
┃ᥫ᭡ _${usedPrefix}readqr *<imagen (QR)>*_
┃ᥫ᭡ _${usedPrefix}qrcode *<texto>*_
┃ᥫ᭡ _${usedPrefix}readmore *<texto1| texto2>*_
┃ᥫ᭡ _${usedPrefix}styletext *<texto>*_
┃ᥫ᭡ _${usedPrefix}traducir *<texto>*_
┃ᥫ᭡ _${usedPrefix}nowa *<numero>*_
┃ᥫ᭡ _${usedPrefix}covid *<pais>*_
┃ᥫ᭡ _${usedPrefix}horario_
┃ᥫ᭡ _${usedPrefix}dropmail_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃LIMITES-ECONOMIA
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨ _${usedPrefix}adventure_
┃ඬ⃟ ✨ _${usedPrefix}cazar_
┃ඬ⃟ ✨ _${usedPrefix}cofre_
┃ඬ⃟ ✨ _${usedPrefix}balance_
┃ඬ⃟ ✨ _${usedPrefix}claim_
┃ඬ⃟ ✨ _${usedPrefix}heal_
┃ඬ⃟ ✨ _${usedPrefix}lb_
┃ඬ⃟ ✨ _${usedPrefix}levelup_
┃ඬ⃟ ✨ _${usedPrefix}myns_
┃ඬ⃟ ✨ _${usedPrefix}perfil_
┃ඬ⃟ ✨ _${usedPrefix}work_
┃ඬ⃟ ✨ _${usedPrefix}minar_
┃ඬ⃟ ✨ _${usedPrefix}minar2_
┃ඬ⃟ ✨ _${usedPrefix}buy_
┃ඬ⃟ ✨ _${usedPrefix}buyall_
┃ඬ⃟ ✨ _${usedPrefix}verificar_
┃ඬ⃟ ✨ _${usedPrefix}robar *<cantidad> <@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}unreg *<numero de serie>*_
**╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN STIKERS
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ⚡ _${usedPrefix}sticker *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker2 *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}sticker2 *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}s *<responder a imagen o video>*_
┃ඬ⃟ ⚡ _${usedPrefix}s *<enlace / link / url>*_
┃ඬ⃟ ⚡ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┃ඬ⃟ ⚡ _${usedPrefix}scircle *<imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}sremovebg *<imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}semoji *<tipo> <emoji>*_
┃ඬ⃟ ⚡ _${usedPrefix}qc *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}attp3 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp2 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp3 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp4 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}ttp5 *<texto>*_
┃ඬ⃟ ⚡ _${usedPrefix}pat *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}slap *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}kiss *<@tag>*_
┃ඬ⃟ ⚡ _${usedPrefix}dado_
┃ඬ⃟ ⚡ _${usedPrefix}wm *<packname> <author>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickermarker *<efecto> <imagen>*_
┃ඬ⃟ ⚡ _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╚═══❖•ೋ° °ೋ•❖═══╝*

*╔═══❖•ೋ° °ೋ•❖═══╗*
┃FUNCIÓN - CREADOR
┃-------➫┇◦✦◦✦◦✦◦✦◦┋:̖́-
┃ඬ⃟ ✨  > *<funcion>*
┃ඬ⃟ ✨ => *<funcion>*
┃ඬ⃟ ✨ $ *<funcion>*
┃ඬ⃟ ✨ _${usedPrefix}setprefix *<prefijo>*_
┃ඬ⃟ ✨ _${usedPrefix}resetprefix_
┃ඬ⃟ ✨ _${usedPrefix}autoadmin_
┃ඬ⃟ ✨ _${usedPrefix}grouplist_
┃ඬ⃟ ✨ _${usedPrefix}chetar_
┃ඬ⃟ ✨ _${usedPrefix}leavegc_
┃ඬ⃟ ✨ _${usedPrefix}cajafuerte_
┃ඬ⃟ ✨ _${usedPrefix}blocklist_
┃ඬ⃟ ✨ _${usedPrefix}addowner *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}delowner *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}block *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}unblock *<@tag / numero>*_
┃ඬ⃟ ✨ _${usedPrefix}enable *restrict*_
┃ඬ⃟ ✨ _${usedPrefix}disable *restrict*_
┃ඬ⃟ ✨ _${usedPrefix}enable *autoread*_
┃ඬ⃟ ✨ _${usedPrefix}disable *autoread*_
┃ඬ⃟ ✨ _${usedPrefix}enable *public*_
┃ඬ⃟ ✨ _${usedPrefix}disable *public*_
┃ඬ⃟ ✨ _${usedPrefix}enable *pconly*_
┃ඬ⃟ ✨ _${usedPrefix}disable *pconly*_
┃ඬ⃟ ✨ _${usedPrefix}enable *gconly*_
┃ඬ⃟ ✨ _${usedPrefix}disable *gconly*_
┃ඬ⃟ ✨ _${usedPrefix}enable *anticall*_
┃ඬ⃟ ✨ _${usedPrefix}disable *anticall*_
┃ඬ⃟ ✨ _${usedPrefix}enable *antiprivado*_
┃ඬ⃟ ✨ _${usedPrefix}disable *antiprivado*_
┃ඬ⃟ ✨ _${usedPrefix}enable *modejadibot*_
┃ඬ⃟ ✨ _${usedPrefix}disable *modejadibot*_
┃ඬ⃟ ✨ _${usedPrefix}enable *audios_bot*_
┃ඬ⃟ ✨ _${usedPrefix}disable *audios_bot*_
┃ඬ⃟ ✨ _${usedPrefix}enable *antispam*_
┃ඬ⃟ ✨ _${usedPrefix}disable *antispam*_
┃ඬ⃟ ✨ _${usedPrefix}msg *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}banchat_
┃ඬ⃟ ✨ _${usedPrefix}unbanchat_
┃ඬ⃟ ✨ _${usedPrefix}resetuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}banuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}unbanuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┃ඬ⃟ ✨ _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┃ඬ⃟ ✨ _${usedPrefix}banuser *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}bc *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcchats *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<audio>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<video>*_
┃ඬ⃟ ✨ _${usedPrefix}bcgc2 *<imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}bcbot *<texto>*_
┃ඬ⃟ ✨ _${usedPrefix}cleartpm_
┃ඬ⃟ ✨ _${usedPrefix}restart_
┃ඬ⃟ ✨ _${usedPrefix}update_
┃ඬ⃟ ✨ _${usedPrefix}banlist_
┃ඬ⃟ ✨ _${usedPrefix}addprem *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┃ඬ⃟ ✨ _${usedPrefix}delprem *<@tag>*_
┃ඬ⃟ ✨ _${usedPrefix}listcmd_
┃ඬ⃟ ✨ _${usedPrefix}setppbot *<responder a imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┃ඬ⃟ ✨ _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃ඬ⃟ ✨ _${usedPrefix}saveimage_
┃ඬ⃟ ✨ _${usedPrefix}viewimage_
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