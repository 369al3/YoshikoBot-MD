import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝗕𝘂𝗲𝗻𝗼𝘀 𝗱𝗶𝗮𝘀 𝗕𝗕☀️!!', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '💖', key: m.key } })
  let txt =`import fetch from 'node-fetch';
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

 await m.reply(`😸 Eɴᴠɪᴀɴᴅᴏ Eʟ Mᴇɴᴜ Dᴇʟ Bᴏᴛ, SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD....`);

const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `${conn.user.jid == global.conn.user.jid ? '' : `𝐒𝐎𝐘 𝐒𝐔𝐁𝐁𝐎𝐓 » 𝐃𝐄: *@${global.conn.user.jid.split`@`[0]}*`}

╭✨️⸽⃕SᴀᴋᴜʀᴀBᴏᴛLɪᴛᴇ-MD🍁⃨፝⃕✰
┃⍣ *🧑‍💻Dueño Del Bot:* Diego       
┃⍣ *👤Cliente:* ${taguser}
┃⍣ *🧭Bot:* ${packname}
┃⍣ *🪁Subbot De:* ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || 'No Soy Subbot'}
┃⍣ *🔋Bateria:* ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Cargando...' : '⚡ Desconectado'}` : 'Desconocido'}
┃⍣ *⚕️Prefijo Usado:* 
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
┃⍣ 📋 _donar_
┃⍣ 📋 _owner_
┃⍣ 📋 _script_
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
┃⍣ 🌹 _ppt *<papel / tijera /piedra>*_
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
┃⍣ ✨️ _enable *welcome*_
┃⍣ ✨️ _disable *welcome*_
┃⍣ ✨️ _enable *modohorny*_
┃⍣ ✨️ _disable *modohorny*_
┃⍣ ✨️ _enable *antilink*_
┃⍣ ✨️ _disable *antilink*_
┃⍣ ✨️ _enable *antilink2*_
┃⍣ ✨️ _disable *antilink2*_
┃⍣ ✨️ _enable *detect*_
┃⍣ ✨️ _disable *detect*_
┃⍣ ✨️ _enable *audios*_
┃⍣ ✨️ _disable *audios*_
┃⍣ ✨️ _enable *autosticker*_
┃⍣ ✨️ _disable *autosticker*_
┃⍣ ✨️ _enable *antiviewonce*_
┃⍣ ✨️ _disable *antiviewonce*_
┃⍣ ✨️ _enable *antitoxic*_
┃⍣ ✨️ _disable *antitoxic*_
┃⍣ ✨️ _enable *antitraba*_
┃⍣ ✨️ _disable *antitraba*_
┃⍣ ✨️ _enable *antiarabes*_
┃⍣ ✨️ _disable *antiarabes*_
┃⍣ ✨️ _enable *modoadmin*_
┃⍣ ✨️ _disable *modoadmin*_
┃⍣ ✨️ _enable *antidelete*_
┃⍣ ✨️ _disable *antidelete*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *REPORTE* ━━⊜
┃⍣ 🖥 _reporte *<texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *DESCARGAS* ━━⊜
┃⍣ 🛰 _instagram *<enlace / link / url>*_
┃⍣ 🛰 _mediafire *<enlace / link / url>*_
┃⍣ 🛰 _gitclone *<enlace / link / url>*_
┃⍣ 🛰 _gdrive *<enlace / link / url>*_
┃⍣ 🛰 _tiktok *<enlace / link / url>*_
┃⍣ 🛰 _tiktokimg *<enlace / link / url>*_
┃⍣ 🛰 _xnxxdl *<enlace / link / url>*_
┃⍣ 🛰 _xvideosdl *<enlace / link / url>*_
┃⍣ 🛰 _twitter *<enlace / link / url>*_
┃⍣ 🛰 _fb *<enlace / link / url>*_
┃⍣ 🛰 _ytshort *<enlace / link / url>*_
┃⍣ 🛰 _ytmp3 *<enlace / link / url>*_
┃⍣ 🛰 _ytmp4 *<enlace / link / url>*_
┃⍣ 🛰 _ytmp3doc *<enlace / link / url>*_
┃⍣ 🛰 _ytmp4doc *<enlace / link / url>*_
┃⍣ 🛰 _videodoc *<enlace / link / url>*_
┃⍣ 🛰 _dapk2 *<enlace / link / url>*_
┃⍣ 🛰 _stickerpack *<enlace / link / url>*_
┃⍣ 🛰 _play *<texto>*_
┃⍣ 🛰 _play2 *<texto>*_
┃⍣ 🛰 _play.1 *<texto>*_
┃⍣ 🛰 _play.2 *<texto>*_
┃⍣ 🛰 _playdoc *<texto>*_
┃⍣ 🛰 _playdoc2 *<texto>*_
┃⍣b🛰 _playlist *<texto>*_
┃⍣ 🛰 _spotify *<texto>*_
┃⍣ 🛰 _ringtone *<texto>*_
┃⍣ 🛰 _soundcloud *<texto>*_
┃⍣ 🛰 _imagen *<texto>*_
┃⍣ 🛰 _pinterest *<texto>*_
┃⍣ 🛰 _wallpaper *<texto>*_
┃⍣ 🛰 _pptiktok *<nombre de usuario>*_
┃⍣ 🛰 _igstalk *<nombre de usuario>*_
┃⍣ 🛰 _igstory *<nombre de usuario>*_
┃⍣ 🛰 _tiktokstalk *<username>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *BUSCADORES* ━━⊜
┃⍣ 🔎 _githubsearch *<texto>*_
┃⍣ 🔎 _pelisplus *<texto>*_
┃⍣ 🔎 _modapk *<texto>*_
┃⍣ 🔎 _stickersearch *<texto>*_
┃⍣ 🔎 _stickersearch2 *<texto>*_
┃⍣ 🔎 _xnxxsearch *<texto>*_
┃⍣ 🔎 _animeinfo *<texto>*_
┃⍣ 🔎 _google *<texto>*_
┃⍣ 🔎 _letra *<texto>*_
┃⍣ 🔎 _wikipedia *<texto>*_
┃⍣ 🔎 _ytsearch *<texto>*_
┃⍣ 🔎 _playstore *<texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *GRUPO AJUSTES* ━⊜
┃⍣ ⚙️ _salir *<admins>*_
┃⍣ ⚙️ _add *<numero>*_
┃⍣ ⚙️ _kick *<@tag>*_
┃⍣ ⚙️ _kick2 *<@tag>*_
┃⍣ ⚙️ _listanum *<texto>*_
┃⍣ ⚙️ _kicknum *<texto>*_
┃⍣ ⚙️ _grupo *<abrir / cerrar>*_
┃⍣ ⚙️ _grouptime *<opcion> <tiempo>*_
┃⍣ ⚙️ _promote *<@tag>*_
┃⍣ ⚙️ _demote *<@tag>*_
┃⍣ ⚙️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┃⍣ ⚙️ _demote *<@tag>*_
┃⍣ ⚙️ _infogroup_
┃⍣ ⚙️ _resetlink_
┃⍣ ⚙️ _link_
┃⍣ ⚙️ _setname *<texto>*_
┃⍣ ⚙️ _setdesc *<texto>*_
┃⍣ ⚙️ _invocar *<texto>*_
┃⍣ ⚙️ _setwelcome *<texto>*_
┃⍣ ⚙️ _setbye *<texto>*_
┃⍣ ⚙️ _hidetag *<texto>*_
┃⍣ ⚙️ _hidetag *<audio>*_
┃⍣ ⚙️ _hidetag *<video>*_
┃⍣ ⚙️ _hidetag *<imagen>*_
┃⍣ ⚙️ _warn *<@tag>*_
┃⍣ ⚙️ _unwarn *<@tag>*_
┃⍣ ⚙️ _listwarn_
┃⍣ ⚙️ _fantasmas_
┃⍣ ⚙️ _destraba_
┃⍣ ⚙️ _setpp *<imagen>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *CONVERTIDORES* ━⊜
┃⍣ 🧶 _toanime *<imagen>*_
┃⍣ 🧶 _togifaud *<video>*_
┃⍣ 🧶 _toimg *<sticker>*_
┃⍣ 🧶 _tomp3 *<video>*_
┃⍣ 🧶 _tomp3 *<nota de voz>*_
┃⍣ 🧶 _toptt *<video / audio>*_
┃⍣ 🧶 _tovideo *<sticker>*_
┃⍣ 🧶 _tourl *<video / imagen / audio>*_
┃⍣ 🧶 _tts *<idioma> <texto>*_
┃⍣ 🧶 _tts *<efecto> <texto>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *LOGOS Y EFECTOS* ━⊜
┃⍣ 🖼 _logos *<efecto> <texto>*_
┃⍣ 🖼 _logochristmas *<texto>*_
┃⍣ 🖼 _logocorazon *<texto>*_
┃⍣ 🖼 _ytcomment *<texto>*_
┃⍣ 🖼 _hornycard *<@tag>*_
┃⍣ 🖼 _simpcard *<@tag>*_
┃⍣ 🖼 _lolice *<@tag>*_
┃⍣ 🖼 _itssostupid_
┃⍣ 🖼 _pixelar_
┃⍣ 🖼 _blur_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *PIROPOS* ━━⊜
┃⍣ ✏️  _piropo_
┃⍣ ✏️  _consejo_
┃⍣ ✏️  _fraseromantica_
┃⍣ ✏️  _historiaromantica_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *RAND ANIMES* ━⊜
┃⍣ 📓 _menuanimes_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *RANDOM* ━━⊜
┃⍣ 📺 _kpop *<blackpink / exo / bts>*_
┃⍣ 📺 _cristianoronaldo_
┃⍣ 📺 _messi_
┃⍣ 📺 _cat_
┃⍣ 📺 _dog_
┃⍣ 📺 _meme_
┃⍣ 📺 _itzy_
┃⍣ 📺 _blackpink_
┃⍣ 📺 _navidad_
┃⍣ 📺 _wpmontaña_
┃⍣ 📺 _pubg_
┃⍣ 📺 _wpgaming_
┃⍣ 📺 _wpaesthetic_
┃⍣ 📺 _wpaesthetic2_
┃⍣ 📺 _wprandom_
┃⍣ 📺 _wallhp_
┃⍣ 📺 _wpvehiculo_
┃⍣ 📺 _wpmoto_
┃⍣ 📺 _coffee_
┃⍣ 📺 _pentol_
┃⍣ 📺 _caricatura_
┃⍣ 📺 _ciberespacio_
┃⍣ 📺 _technology_
┃⍣ 📺 _doraemon_
┃⍣ 📺 _hacker_
┃⍣ 📺 _planeta_
┃⍣ 📺 _randomprofile_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *COMANDO +18* ━⊜
┃⍣ 📒 _hornymenu_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *EFECTOS DE AUDIOS* ━⊜
┃⍣ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘈 𝘜𝘯𝘢 𝘕𝘰𝘵𝘢 𝘋𝘦 𝘈𝘶𝘥𝘪𝘰
┃⍣ 🔊 _bass_
┃⍣ 🔊 _blown_
┃⍣ 🔊 _deep_
┃⍣ 🔊 _earrape_
┃⍣ 🔊 _fast_
┃⍣ 🔊 _fat_
┃⍣ 🔊 _nightcore_
┃⍣ 🔊 _reverse_
┃⍣ 🔊 _robot_
┃⍣ 🔊 _slow_
┃⍣ 🔊 _smooth_
┃⍣ 🔊 _tupai_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *CHAT ANONIMO* ━⊜
┃⍣ ✔️ _start_
┃⍣ ✔️ _next_
┃⍣ ✔️ _leave_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *MENU AUDIOS* ━⊜
┃⍣ 📒 _menuaudios_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *UTILIDADES* ━⊜
┃⍣ 🌾 _inspect *<link wa_gc>*_
┃⍣ 🌾 _chatgpt *<texto>*_
┃⍣ 🌾 _delchatgpt_
┃⍣ 🌾 _gptvoz *<texto>*_
┃⍣ 🌾 _dall-e *<texto>*_
┃⍣ 🌾 _spamwa *<numero|texto|cantidad>*_
┃⍣ 🌾 _tamaño *<cantidad> <imagen / video>*_
┃⍣ 🌾 _readviewonce *<imagen / video>*_
┃⍣ 🌾 _clima *<país> <ciudad>*_
┃⍣ 🌾 _encuesta *<texto1|texto2...>*_
┃⍣ 🌾 _afk *<motivo>*_
┃⍣ 🌾 _ocr *<responde a imagen>*_
┃⍣ 🌾 _hd *<responde a imagen>*_
┃⍣ 🌾 _acortar *<enlace / link / url>*_
┃⍣ 🌾 _calc *<operacion math>*_
┃⍣ 🌾 _del *<mensaje>*_
┃⍣ 🌾 _whatmusic *<audio>*_
┃⍣ 🌾 _readqr *<imagen (QR)>*_
┃⍣ 🌾 _qrcode *<texto>*_
┃⍣ 🌾 _readmore *<texto1| texto2>*_
┃⍣ 🌾 _styletext *<texto>*_
┃⍣ 🌾 _traducir *<texto>*_
┃⍣ 🌾 _nowa *<numero>*_
┃⍣ 🌾 _covid *<pais>*_
┃⍣ 🌾 _horario_
┃⍣ 🌾 _dropmail_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *LIMITES/ECONOMIAS* ━⊜
┃⍣ 🎪 _adventure_
┃⍣ 🎪 _cazar_
┃⍣ 🎪 _cofre_
┃⍣ 🎪 _balance_
┃⍣ 🎪 _claim_
┃⍣ 🎪 _heal_
┃⍣ 🎪 _lb_
┃⍣ 🎪 _levelup_
┃⍣ 🎪 _myns_
┃⍣ 🎪 _perfil_
┃⍣ 🎪 _work_
┃⍣ 🎪 _minar_
┃⍣ 🎪 _minar2_
┃⍣ 🎪 _buy_
┃⍣ 🎪 _buyall_
┃⍣ 🎪 _verificar_
┃⍣ 🎪 _robar *<cantidad> <@tag>*_
┃⍣ 🎪 _transfer *<tipo> <cantidad> <@tag>*_
┃⍣ 🎪 _unreg *<numero de serie>*_
╰━━━━━━━━━━━━━━━━⋄

┏━━⊜ *STICKERS* ━⊜
┃⍣ 🍭 _sticker *<responder a imagen o video>*_
┃⍣ 🍭 _sticker *<enlace / link / url>*_
┃⍣ 🍭 _sticker2 *<responder a imagen o video>*_
┃⍣ 🍭 _sticker2 *<enlace / link / url>*_
┃⍣ 🍭 _s *<responder a imagen o video>*_
┃⍣ 🍭 _s *<enlace / link / url>*_
┃⍣ 🍭 _emojimix *<emoji 1>&<emoji 2>*_
┃⍣ 🍭 _scircle *<imagen>*_
┃⍣ 🍭 _sremovebg *<imagen>*_
┃⍣ 🍭 _semoji *<tipo> <emoji>*_
┃⍣ 🍭 _qc *<texto>*_
┃⍣ 🍭 _attp *<texto>*_
┃⍣ 🍭 _attp2 *<texto>*_
┃⍣ 🍭 _attp3 *<texto>*_
┃⍣ 🍭 _ttp *<texto>*_
┃⍣ 🍭 _ttp2 *<texto>*_
┃⍣ 🍭 _ttp3 *<texto>*_
┃⍣ 🍭 _ttp4 *<texto>*_
┃⍣ 🍭 _ttp5 *<texto>*_
┃⍣ 🍭 _pat *<@tag>*_
┃⍣ 🍭 _slap *<@tag>*_
┃⍣ 🍭 _kiss *<@tag>*_
┃⍣ 🍭 _dado_
┃⍣ 🍭 _wm *<packname> <author>*_
┃⍣ 🍭 _stickermarker *<efecto> <imagen>*_
┃⍣ 🍭 _stickerfilter *<efecto> <imagen>*_
╰━━━━━━━━━━━━━━━━⋄


┏━━⊜ *FUNCIÓN-CREADOR* ━⊜
┃⍣ 👑 > *<funcion>*
┃⍣ 👑 => *<funcion>*
┃⍣ 👑 $ *<funcion>*
┃⍣ 👑 _setprefix *<prefijo>*_
┃⍣ 👑 _resetprefix_
┃⍣ 👑 _autoadmin_
┃⍣ 👑 _grouplist_
┃⍣ 👑 _chetar_
┃⍣ 👑 _leavegc_
┃⍣ 👑 _cajafuerte_
┃⍣ 👑 _blocklist_
┃⍣ 👑 _addowner *<@tag / numero>*_
┃⍣ 👑 _delowner *<@tag / numero>*_
┃⍣ 👑 _block *<@tag / numero>*_
┃⍣ 👑 _unblock *<@tag / numero>*_
┃⍣ 👑 _enable *restrict*_
┃⍣ 👑 _disable *restrict*_
┃⍣ 👑 _enable *autoread*_
┃⍣ 👑 _disable *autoread*_
┃⍣ 👑 _enable *public*_
┃⍣ 👑 _disable *public*_
┃⍣ 👑 _enable *pconly*_
┃⍣ 👑 _disable *pconly*_
┃⍣ 👑 _enable *gconly*_
┃⍣ 👑 _disable *gconly*_
┃⍣ 👑 _enable *anticall*_
┃⍣ 👑 _disable *anticall*_
┃⍣ 👑 _enable *antiprivado*_
┃⍣ 👑 _disable *antiprivado*_
┃⍣ 👑 _enable *antispam*_
┃⍣ 👑 _disable *antispam*_
┃⍣ 👑 _msg *<texto>*_
┃⍣ 👑 _banchat_
┃⍣ 👑 _unbanchat_
┃⍣ 👑 _resetuser *<@tag>*_
┃⍣ 👑 _banuser *<@tag>*_
┃⍣ 👑 _unbanuser *<@tag>*_
┃⍣ 👑 _dardiamantes *<@tag> <cantidad>*_
┃⍣ 👑 _añadirxp *<@tag> <cantidad>*_
┃⍣ 👑 _banuser *<@tag>*_
┃⍣ 👑 _bc *<texto>*_
┃⍣ 👑 _bcchats *<texto>*_
┃⍣ 👑 _bcgc *<texto>*_
┃⍣ 👑 _bcgc2 *<audio>*_
┃⍣ 👑 _bcgc2 *<video>*_
┃⍣ 👑 _bcgc2 *<imagen>*_
┃⍣ 👑 _bcbot *<texto>*_
┃⍣ 👑 _cleartpm_
┃⍣ 👑 _restart_
┃⍣ 👑 _update_
┃⍣ 👑 _banlist_
┃⍣ 👑 _addprem *<@tag> <tiempo>*_
┃⍣ 👑 _addprem2 *<@tag> <tiempo>*_
┃⍣ 👑 _addprem3 *<@tag> <tiempo>*_
┃⍣ 👑 _addprem4 *<@tag> <tiempo>*_
┃⍣ 👑 _delprem *<@tag>*_
┃⍣ 👑 _listcmd_
┃⍣ 👑 _setppbot *<responder a imagen>*_
┃⍣ 👑 _addcmd *<texto> <responder a sticker/imagen>*_
┃⍣ 👑 _delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┃⍣ 👑 _saveimage_
┃⍣ 👑 _viewimage_
╰━━━━━━━━━━━━━━━━⋄`.trim();     if (m.isGroup) { 
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
}`.trim();     if (m.isGroup) { 
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