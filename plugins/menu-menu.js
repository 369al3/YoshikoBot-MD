import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`╭✨️⸽⃕SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD🍁⃨፝⃕✰
┃⍣ *🧑‍💻Dueño Del Bot:* Diego       
┃⍣ *👤Cliente:* ${taguser}
┃⍣ *🧭Bot:* ${packname}
┃⍣ *🪁Subbot De:* ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
┃⍣ *⏰️Tiempo Activo:* ${uptime}
┃⍣ *💻Usuarios Regs:* ${rtotalreg}
┃⍣ *🗃Usuarios Totales:* ${rtotal}
┃⍣ *📅Fecha:* ${date} 
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *INFO USER* ━⊜
┃⍣ *😼 Registrado:* ${user.registered === true ? '✅' : '❌ _#verificar_'}
┃⍣ *🎖Nivel:* ${level}
┃⍣ *🧰Experiencia:* ${exp}
┃⍣ *⚓️Rango:* ${role}
┃⍣ *💎Diamantes:* ${limit}
┃⍣ *👾SakuCoins:* ${money}
┃⍣ *🪙Tokens:* ${joincount}
┃⍣ *🎟Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰━━━━━━━━━━━━━━━━⋄
${readMore}
┏━━⊜ *SOLUCIONES* ━━⊜
┃⍣ 🧭 Mensajes en espera
┃⍣ 🧭 _fixmsgespera_
┃⍣ 🧭 Mensajes en espera (owner)
┃⍣ 🧭 _dsowner_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *INFO BOT* ━━⊜
┃⍣ 📋 _terminosycondiciones_
┃⍣ 📋 _grupos_
┃⍣ 📋 _estado_
┃⍣ 📋 _infobot_
┃⍣ 📋 _speedtest_
┃⍣ 📋 _owner_
┃⍣ 📋 _$script_
┃⍣ 📋 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *BOT A TU GRUPO* ━⊜
┃⍣ 🙀 _join *<enlace / link / url>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *SER SUBBOT* ━⊜
┃⍣ 💻 _serbot_
┃⍣ 💻 _deletebot_
┃⍣ 💻 _token_
┃⍣ 💻 _stop_
┃⍣ 💻 _bots_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *HERRAMIENTAS* ━━⊜
┃⍣ 🛠 _enable restrict_
┃⍣ 🛠 _disable restrict_
┃⍣ 🛠 _enable autoread_
┃⍣ 🛠 _disable autoread_
┃⍣ 🛠 _enable antispam_
┃⍣ 🛠 _disable antispam_
┃⍣ 🛠 _enable anticall_
┃⍣ 🛠 _disable anticall_
┃⍣ 🛠 _enable modoia_
┃⍣ 🛠 _disable modoia_
┃⍣ 🛠 _enable audios_bot_
┃⍣ 🛠 _disable audios_bot_
┃⍣ 🛠 _enable antiprivado_
┃⍣ 🛠 _disable antiprivado_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *DIVERSIONES* ━━⊜
┃⍣ 🌹 _mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┃⍣ 🌹 _fake *<texto1> <@tag> <texto2>*_
┃⍣ 🌹 _${usedPrefix}ppt *<papel / tijera /piedra>*_
┃⍣ 🌹 _prostituto *<nombre / @tag>*_
┃⍣ 🌹 _prostituta *<nombre / @tag>*_
┃⍣ 🌹 _gay2 *<nombre / @tag>*_
┃⍣ 🌹 _lesbiana *<nombre / @tag>*_
┃⍣ 🌹 _pajero *<nombre / @tag>*_
┃⍣ 🌹 _pajera *<nombre / @tag>*_
┃⍣ 🌹 _follar *<nombre / @tag>*_
┃⍣ 🌹 _puto *<nombre / @tag>*_
┃⍣ 🌹 _puta *<nombre / @tag>*_
┃⍣ 🌹 _manco *<nombre / @tag>*_
┃⍣ 🌹 _manca *<nombre / @tag>*_
┃⍣ 🌹 _rata *<nombre / @tag>*_
┃⍣ 🌹 _love *<nombre / @tag>*_
┃⍣ 🌹 _doxear *<nombre / @tag>*_
┃⍣ 🌹 _pregunta *<texto>*_
┃⍣ 🌹 _suitpvp *<@tag>*_
┃⍣ 🌹 _slot *<apuesta>*_
┃⍣ 🌹 _ttt *<nombre sala>*_
┃⍣ 🌹 _delttt_
┃⍣ 🌹 _acertijo_
┃⍣ 🌹 _personalidad *<nombre / @tag>*_
┃⍣ 🌹 _simi *<texto>*_
┃⍣ 🌹 _top *<texto>*_
┃⍣ 🌹 _topgays_
┃⍣ 🌹 _topotakus_
┃⍣ 🌹 _formarpareja_
┃⍣ 🌹 _verdad_
┃⍣ 🌹 _reto_
┃⍣ 🌹 _cancion_
┃⍣ 🌹 _pista_
┃⍣ 🌹 _akinator_
┃⍣ 🌹 _wordfind_
╰━━━━━━━━━━━━━━━━⋄

┏━━━⊜ *ON/OFF* ━━━⊜
┃⍣ ✨️ _${usedPrefix}enable *welcome*_
┃⍣ ✨️ _${usedPrefix}disable *welcome*_
┃⍣ ✨️ _${usedPrefix}enable *modohorny*_
┃⍣ ✨️ _${usedPrefix}disable *modohorny*_
┃⍣ ✨️ _${usedPrefix}enable *antilink*_
┃⍣ ✨️ _${usedPrefix}disable *antilink*_
┃⍣ ✨️ _${usedPrefix}enable *antilink2*_
┃⍣ ✨️ _${usedPrefix}disable *antilink2*_
┃⍣ ✨️ _${usedPrefix}enable *detect*_
┃⍣ ✨️ _${usedPrefix}disable *detect*_
┃⍣ ✨️ _${usedPrefix}enable *audios*_
┃⍣ ✨️ _${usedPrefix}disable *audios*_
┃⍣ ✨️ _${usedPrefix}enable *autosticker*_
┃⍣ ✨️ _${usedPrefix}disable *autosticker*_
┃⍣ ✨️ _${usedPrefix}enable *antiviewonce*_
┃⍣ ✨️ _${usedPrefix}disable *antiviewonce*_
┃⍣ ✨️ _${usedPrefix}enable *antitoxic*_
┃⍣ ✨️ _${usedPrefix}disable *antitoxic*_
┃⍣ ✨️ _${usedPrefix}enable *antitraba*_
┃⍣ ✨️ _${usedPrefix}disable *antitraba*_
┃⍣ ✨️ _${usedPrefix}enable *antiarabes*_
┃⍣ ✨️ _${usedPrefix}disable *antiarabes*_
┃⍣ ✨️ _${usedPrefix}enable *modoadmin*_
┃⍣ ✨️ _${usedPrefix}disable *modoadmin*_
┃⍣ ✨️ _${usedPrefix}enable *antidelete*_
┃⍣ ✨️ _${usedPrefix}disable *antidelete*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *REPORTE* ━━⊜
┃⍣ 🖥 _${usedPrefix}reporte *<texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *DESCARGAS* ━━⊜
┃⍣ 🛰 _${usedPrefix}instagram *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}mediafire *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}gitclone *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}gdrive *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}tiktok *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}tiktokimg *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}twitter *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}fb *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}ytshort *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}videodoc *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}dapk2 *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}stickerpack *<enlace / link / url>*_
┃⍣ 🛰 _${usedPrefix}play *<texto>*_
┃⍣ 🛰 _${usedPrefix}play2 *<texto>*_
┃⍣ 🛰 _${usedPrefix}play.1 *<texto>*_
┃⍣ 🛰 _${usedPrefix}play.2 *<texto>*_
┃⍣ 🛰 _${usedPrefix}playdoc *<texto>*_
┃⍣ 🛰 _${usedPrefix}playdoc2 *<texto>*_
┃⍣b🛰 _${usedPrefix}playlist *<texto>*_
┃⍣ 🛰 _${usedPrefix}spotify *<texto>*_
┃⍣ 🛰 _${usedPrefix}ringtone *<texto>*_
┃⍣ 🛰 _${usedPrefix}soundcloud *<texto>*_
┃⍣ 🛰 _${usedPrefix}imagen *<texto>*_
┃⍣ 🛰 _${usedPrefix}pinterest *<texto>*_
┃⍣ 🛰 _${usedPrefix}wallpaper *<texto>*_
┃⍣ 🛰 _${usedPrefix}pptiktok *<nombre de usuario>*_
┃⍣ 🛰 _${usedPrefix}igstalk *<nombre de usuario>*_
┃⍣ 🛰 _${usedPrefix}igstory *<nombre de usuario>*_
┃⍣ 🛰 _${usedPrefix}tiktokstalk *<username>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *BUSCADORES* ━━⊜
┃⍣ 🔎 _${usedPrefix}githubsearch *<texto>*_
┃⍣ 🔎 _${usedPrefix}pelisplus *<texto>*_
┃⍣ 🔎 _${usedPrefix}modapk *<texto>*_
┃⍣ 🔎 _${usedPrefix}stickersearch *<texto>*_
┃⍣ 🔎 _${usedPrefix}stickersearch2 *<texto>*_
┃⍣ 🔎 _${usedPrefix}xnxxsearch *<texto>*_
┃⍣ 🔎 _${usedPrefix}animeinfo *<texto>*_
┃⍣ 🔎 _${usedPrefix}google *<texto>*_
┃⍣ 🔎 _${usedPrefix}letra *<texto>*_
┃⍣ 🔎 _${usedPrefix}wikipedia *<texto>*_
┃⍣ 🔎 _${usedPrefix}ytsearch *<texto>*_
┃⍣ 🔎 _${usedPrefix}playstore *<texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *GRUPO AJUSTES* ━⊜
┃⍣ ⚙️ _${usedPrefix}salir *<admins>*_
┃⍣ ⚙️ _${usedPrefix}add *<numero>*_
┃⍣ ⚙️ _${usedPrefix}kick *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}kick2 *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}listanum *<texto>*_
┃⍣ ⚙️ _${usedPrefix}kicknum *<texto>*_
┃⍣ ⚙️ _${usedPrefix}grupo *<abrir / cerrar>*_
┃⍣ ⚙️ _${usedPrefix}grouptime *<opcion> <tiempo>*_
┃⍣ ⚙️ _${usedPrefix}promote *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}demote *<@tag>*_
┃⍣ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃⍣ ⚙️ _${usedPrefix}demote *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}infogroup_
┃⍣ ⚙️ _${usedPrefix}resetlink_
┃⍣ ⚙️ _${usedPrefix}link_
┃⍣ ⚙️ _${usedPrefix}setname *<texto>*_
┃⍣ ⚙️ _${usedPrefix}setdesc *<texto>*_
┃⍣ ⚙️ _${usedPrefix}invocar *<texto>*_
┃⍣ ⚙️ _${usedPrefix}setwelcome *<texto>*_
┃⍣ ⚙️ _${usedPrefix}setbye *<texto>*_
┃⍣ ⚙️ _${usedPrefix}hidetag *<texto>*_
┃⍣ ⚙️ _${usedPrefix}hidetag *<audio>*_
┃⍣ ⚙️ _${usedPrefix}hidetag *<video>*_
┃⍣ ⚙️ _${usedPrefix}hidetag *<imagen>*_
┃⍣ ⚙️ _${usedPrefix}warn *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}unwarn *<@tag>*_
┃⍣ ⚙️ _${usedPrefix}listwarn_
┃⍣ ⚙️ _${usedPrefix}fantasmas_
┃⍣ ⚙️ _${usedPrefix}destraba_
┃⍣ ⚙️ _${usedPrefix}setpp *<imagen>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *CONVERTIDORES* ━⊜
┃⍣ 🧶 _${usedPrefix}toanime *<imagen>*_
┃⍣ 🧶 _${usedPrefix}togifaud *<video>*_
┃⍣ 🧶 _${usedPrefix}toimg *<sticker>*_
┃⍣ 🧶 _${usedPrefix}tomp3 *<video>*_
┃⍣ 🧶 _${usedPrefix}tomp3 *<nota de voz>*_
┃⍣ 🧶 _${usedPrefix}toptt *<video / audio>*_
┃⍣ 🧶 _${usedPrefix}tovideo *<sticker>*_
┃⍣ 🧶 _${usedPrefix}tourl *<video / imagen / audio>*_
┃⍣ 🧶 _${usedPrefix}tts *<idioma> <texto>*_
┃⍣ 🧶 _${usedPrefix}tts *<efecto> <texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *LOGOS Y EFECTOS* ━⊜
┃⍣ 🖼 _${usedPrefix}logos *<efecto> <texto>*_
┃⍣ 🖼 _${usedPrefix}logochristmas *<texto>*_
┃⍣ 🖼 _${usedPrefix}logocorazon *<texto>*_
┃⍣ 🖼 _${usedPrefix}ytcomment *<texto>*_
┃⍣ 🖼 _${usedPrefix}hornycard *<@tag>*_
┃⍣ 🖼 _${usedPrefix}simpcard *<@tag>*_
┃⍣ 🖼 _${usedPrefix}lolice *<@tag>*_
┃⍣ 🖼 _${usedPrefix}itssostupid_
┃⍣ 🖼 _${usedPrefix}pixelar_
┃⍣ 🖼 _${usedPrefix}blur_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *PIROPOS* ━━⊜
┃⍣ ✏️  _${usedPrefix}piropo_
┃⍣ ✏️  _${usedPrefix}consejo_
┃⍣ ✏️  _${usedPrefix}fraseromantica_
┃⍣ ✏️  _${usedPrefix}historiaromantica_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *RAND ANIMES* ━⊜
┃⍣ 📓 _${usedPrefix}menuanimes_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *RANDOM* ━━⊜
┃⍣ 📺 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┃⍣ 📺 _${usedPrefix}cristianoronaldo_
┃⍣ 📺 _${usedPrefix}messi_
┃⍣ 📺 _${usedPrefix}cat_
┃⍣ 📺 _${usedPrefix}dog_
┃⍣ 📺 _${usedPrefix}meme_
┃⍣ 📺 _${usedPrefix}itzy_
┃⍣ 📺 _${usedPrefix}blackpink_
┃⍣ 📺 _${usedPrefix}navidad_
┃⍣ 📺 _${usedPrefix}wpmontaña_
┃⍣ 📺 _${usedPrefix}pubg_
┃⍣ 📺 _${usedPrefix}wpgaming_
┃⍣ 📺 _${usedPrefix}wpaesthetic_
┃⍣ 📺 _${usedPrefix}wpaesthetic2_
┃⍣ 📺 _${usedPrefix}wprandom_
┃⍣ 📺 _${usedPrefix}wallhp_
┃⍣ 📺 _${usedPrefix}wpvehiculo_
┃⍣ 📺 _${usedPrefix}wpmoto_
┃⍣ 📺 _${usedPrefix}coffee_
┃⍣ 📺 _${usedPrefix}pentol_
┃⍣ 📺 _${usedPrefix}caricatura_
┃⍣ 📺 _${usedPrefix}ciberespacio_
┃⍣ 📺 _${usedPrefix}technology_
┃⍣ 📺 _${usedPrefix}doraemon_
┃⍣ 📺 _${usedPrefix}hacker_
┃⍣ 📺 _${usedPrefix}planeta_
┃⍣ 📺 _${usedPrefix}randomprofile_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *COMANDO +18* ━⊜
┃⍣ 📒 _${usedPrefix}hornymenu_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *EFECTOS DE AUDIOS* ━⊜
┃⍣ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
┃⍣ 🔊 _${usedPrefix}bass_
┃⍣ 🔊 _${usedPrefix}blown_
┃⍣ 🔊 _${usedPrefix}deep_
┃⍣ 🔊 _${usedPrefix}earrape_
┃⍣ 🔊 _${usedPrefix}fast_
┃⍣ 🔊 _${usedPrefix}fat_
┃⍣ 🔊 _${usedPrefix}nightcore_
┃⍣ 🔊 _${usedPrefix}reverse_
┃⍣ 🔊 _${usedPrefix}robot_
┃⍣ 🔊 _${usedPrefix}slow_
┃⍣ 🔊 _${usedPrefix}smooth_
┃⍣ 🔊 _${usedPrefix}tupai_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *CHAT ANONIMO* ━⊜
┃⍣ ✔️ _${usedPrefix}start_
┃⍣ ✔️ _${usedPrefix}next_
┃⍣ ✔️ _${usedPrefix}leave_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *MENU AUDIOS* ━⊜
┃⍣ 📒 _${usedPrefix}menuaudios_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *UTILIDADES* ━⊜
┃⍣ 🌾 _${usedPrefix}inspect *<link wa_gc>*_
┃⍣ 🌾 _${usedPrefix}chatgpt *<texto>*_
┃⍣ 🌾 _${usedPrefix}delchatgpt_
┃⍣ 🌾 _${usedPrefix}gptvoz *<texto>*_
┃⍣ 🌾 _${usedPrefix}dall-e *<texto>*_
┃⍣ 🌾 _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┃⍣ 🌾 _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┃⍣ 🌾 _${usedPrefix}readviewonce *<imagen / video>*_
┃⍣ 🌾 _${usedPrefix}clima *<país> <ciudad>*_
┃⍣ 🌾 _${usedPrefix}encuesta *<texto1|texto2...>*_
┃⍣ 🌾 _${usedPrefix}afk *<motivo>*_
┃⍣ 🌾 _${usedPrefix}ocr *<responde a imagen>*_
┃⍣ 🌾 _${usedPrefix}hd *<responde a imagen>*_
┃⍣ 🌾 _${usedPrefix}acortar *<enlace / link / url>*_
┃⍣ 🌾 _${usedPrefix}calc *<operacion math>*_
┃⍣ 🌾 _${usedPrefix}del *<mensaje>*_
┃⍣ 🌾 _${usedPrefix}whatmusic *<audio>*_
┃⍣ 🌾 _${usedPrefix}readqr *<imagen (QR)>*_
┃⍣ 🌾 _${usedPrefix}qrcode *<texto>*_
┃⍣ 🌾 _${usedPrefix}readmore *<texto1| texto2>*_
┃⍣ 🌾 _${usedPrefix}styletext *<texto>*_
┃⍣ 🌾 _${usedPrefix}traducir *<texto>*_
┃⍣ 🌾 _${usedPrefix}nowa *<numero>*_
┃⍣ 🌾 _${usedPrefix}covid *<pais>*_
┃⍣ 🌾 _${usedPrefix}horario_
┃⍣ 🌾 _${usedPrefix}dropmail_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *LIMITES/ECONOMIAS* ━⊜
┃⍣ 🎪 _${usedPrefix}adventure_
┃⍣ 🎪 _${usedPrefix}cazar_
┃⍣ 🎪 _${usedPrefix}cofre_
┃⍣ 🎪 _${usedPrefix}balance_
┃⍣ 🎪 _${usedPrefix}claim_
┃⍣ 🎪 _${usedPrefix}heal_
┃⍣ 🎪 _${usedPrefix}lb_
┃⍣ 🎪 _${usedPrefix}levelup_
┃⍣ 🎪 _${usedPrefix}myns_
┃⍣ 🎪 _${usedPrefix}perfil_
┃⍣ 🎪 _${usedPrefix}work_
┃⍣ 🎪 _${usedPrefix}minar_
┃⍣ 🎪 _${usedPrefix}minar2_
┃⍣ 🎪 _${usedPrefix}buy_
┃⍣ 🎪 _${usedPrefix}buyall_
┃⍣ 🎪 _${usedPrefix}verificar_
┃⍣ 🎪 _${usedPrefix}robar *<cantidad> <@tag>*_
┃⍣ 🎪 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┃⍣ 🎪 _${usedPrefix}unreg *<numero de serie>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *STICKERS* ━⊜
┃⍣ 🍭 _${usedPrefix}sticker *<responder a imagen o video>*_
┃⍣ 🍭 _${usedPrefix}sticker *<enlace / link / url>*_
┃⍣ 🍭 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┃⍣ 🍭 _${usedPrefix}sticker2 *<enlace / link / url>*_
┃⍣ 🍭 _${usedPrefix}s *<responder a imagen o video>*_
┃⍣ 🍭 _${usedPrefix}s *<enlace / link / url>*_
┃⍣ 🍭 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┃⍣ 🍭 _${usedPrefix}scircle *<imagen>*_
┃⍣ 🍭 _${usedPrefix}sremovebg *<imagen>*_
┃⍣ 🍭 _${usedPrefix}semoji *<tipo> <emoji>*_
┃⍣ 🍭 _${usedPrefix}qc *<texto>*_
┃⍣ 🍭 _${usedPrefix}attp *<texto>*_
┃⍣ 🍭 _${usedPrefix}attp2 *<texto>*_
┃⍣ 🍭 _${usedPrefix}attp3 *<texto>*_
┃⍣ 🍭 _${usedPrefix}ttp *<texto>*_
┃⍣ 🍭 _${usedPrefix}ttp2 *<texto>*_
┃⍣ 🍭 _${usedPrefix}ttp3 *<texto>*_
┃⍣ 🍭 _${usedPrefix}ttp4 *<texto>*_
┃⍣ 🍭 _${usedPrefix}ttp5 *<texto>*_
┃⍣ 🍭 _${usedPrefix}pat *<@tag>*_
┃⍣ 🍭 _${usedPrefix}slap *<@tag>*_
┃⍣ 🍭 _${usedPrefix}kiss *<@tag>*_
┃⍣ 🍭 _${usedPrefix}dado_
┃⍣ 🍭 _${usedPrefix}wm *<packname> <author>*_
┃⍣ 🍭 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┃⍣ 🍭 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
╰━━━━━━━━━━━━━━━━⋄


┏━━⊜ *FUNCIÓN-CREADOR* ━⊜
┃⍣ 👑 > *<funcion>*
┃⍣ 👑 => *<funcion>*
┃⍣ 👑 $ *<funcion>*
┃⍣ 👑 _${usedPrefix}setprefix *<prefijo>*_
┃⍣ 👑 _${usedPrefix}resetprefix_
┃⍣ 👑 _${usedPrefix}autoadmin_
┃⍣ 👑 _${usedPrefix}grouplist_
┃⍣ 👑 _${usedPrefix}chetar_
┃⍣ 👑 _${usedPrefix}leavegc_
┃⍣ 👑 _${usedPrefix}cajafuerte_
┃⍣ 👑 _${usedPrefix}blocklist_
┃⍣ 👑 _${usedPrefix}addowner *<@tag / numero>*_
┃⍣ 👑 _${usedPrefix}delowner *<@tag / numero>*_
┃⍣ 👑 _${usedPrefix}block *<@tag / numero>*_
┃⍣ 👑 _${usedPrefix}unblock *<@tag / numero>*_
┃⍣ 👑 _${usedPrefix}enable *restrict*_
┃⍣ 👑 _${usedPrefix}disable *restrict*_
┃⍣ 👑 _${usedPrefix}enable *autoread*_
┃⍣ 👑 _${usedPrefix}disable *autoread*_
┃⍣ 👑 _${usedPrefix}enable *public*_
┃⍣ 👑 _${usedPrefix}disable *public*_
┃⍣ 👑 _${usedPrefix}enable *pconly*_
┃⍣ 👑 _${usedPrefix}disable *pconly*_
┃⍣ 👑 _${usedPrefix}enable *gconly*_
┃⍣ 👑 _${usedPrefix}disable *gconly*_
┃⍣ 👑 _${usedPrefix}enable *anticall*_
┃⍣ 👑 _${usedPrefix}disable *anticall*_
┃⍣ 👑 _${usedPrefix}enable *antiprivado*_
┃⍣ 👑 _${usedPrefix}disable *antiprivado*_
┃⍣ 👑 _${usedPrefix}enable *antispam*_
┃⍣ 👑 _${usedPrefix}disable *antispam*_
┃⍣ 👑 _${usedPrefix}msg *<texto>*_
┃⍣ 👑 _${usedPrefix}banchat_
┃⍣ 👑 _${usedPrefix}unbanchat_
┃⍣ 👑 _${usedPrefix}resetuser *<@tag>*_
┃⍣ 👑 _${usedPrefix}banuser *<@tag>*_
┃⍣ 👑 _${usedPrefix}unbanuser *<@tag>*_
┃⍣ 👑 _${usedPrefix}dardiamantes *<@tag> <cantidad>*_
┃⍣ 👑 _${usedPrefix}añadirxp *<@tag> <cantidad>*_
┃⍣ 👑 _${usedPrefix}banuser *<@tag>*_
┃⍣ 👑 _${usedPrefix}bc *<texto>*_
┃⍣ 👑 _${usedPrefix}bcchats *<texto>*_
┃⍣ 👑 _${usedPrefix}bcgc *<texto>*_
┃⍣ 👑 _${usedPrefix}bcgc2 *<audio>*_
┃⍣ 👑 _${usedPrefix}bcgc2 *<video>*_
┃⍣ 👑 _${usedPrefix}bcgc2 *<imagen>*_
┃⍣ 👑 _${usedPrefix}bcbot *<texto>*_
┃⍣ 👑 _${usedPrefix}cleartpm_
┃⍣ 👑 _${usedPrefix}restart_
┃⍣ 👑 _${usedPrefix}update_
┃⍣ 👑 _${usedPrefix}banlist_
┃⍣ 👑 _${usedPrefix}addprem *<@tag> <tiempo>*_
┃⍣ 👑 _${usedPrefix}addprem2 *<@tag> <tiempo>*_
┃⍣ 👑 _${usedPrefix}addprem3 *<@tag> <tiempo>*_
┃⍣ 👑 _${usedPrefix}addprem4 *<@tag> <tiempo>*_
┃⍣ 👑 _${usedPrefix}delprem *<@tag>*_
┃⍣ 👑 _${usedPrefix}listcmd_
┃⍣ 👑 _${usedPrefix}setppbot *<responder a imagen>*_
┃⍣ 👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┃⍣ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃⍣ 👑 _${usedPrefix}saveimage_
┃⍣ 👑 _${usedPrefix}viewimage_
╰━━━━━━━━━━━━━━━━⋄`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆ 𝗟𝗢𝗕𝗢 - 𝗕𝗢𝗧 - 𝗠𝗗 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|menú|COMANDOS|comandos)$/i;
export default handler;
