# Código creado por @gata_dios      

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución     
COMANDOS = "pkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/diegojadibot/SakuraBotLite-MD\ncd SakuraBotLite-MD\nyarn install\nnpm install\nnpm start"

echo -e "\e[35m

_░▒███████
░██▓▒░░▒▓██
██▓▒░__░▒▓██___██████
██▓▒░____░▓███▓__░▒▓██
██▓▒░___░▓██▓_____░▒▓██
██▓▒░_______________░▒▓██
_██▓▒░______________░▒▓██
__██▓▒░____________░▒▓██
___██▓▒░__________░▒▓██
____██▓▒░________░▒▓██
_____██▓▒░_____░▒▓██
______██▓▒░__░▒▓██
_______█▓▒░░▒▓██
_________░▒▓██
_______░▒▓██
_____░▒▓██

　╭━━━━━━╮
 ╭┃ ╭━━━━╮
 ┃┃ ╰━━━━╯
 ┃┃ ┈🦋🙌🏻🚀💖
 ╰┃ ┈┃ ─┌ ┈┃
　╰━╯ ┈ ╰━╯
├┬┴┬┴ Iniciando Instalacion Automatica ┬┴┬┴┤\n\e[0m" 

echo -e "\033[01;93mPreparando instalación...\nPreparing installation...\n\033[0m"
echo -e "\033[01;32m\033[01mInstalando dependencias!!\nInstalling dependencies!!\n\033[0m" 
echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █ ▀█▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▄█ █ ░█░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33mGit ya estaba instalado anteriormente.\nGit was already installed previously.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Git. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mGit se ha instalado correctamente.\nGit has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄ █▀▀ ░ ░░█ █▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▄█ █▄▀ ██▄ ▄ █▄█ ▄█\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33mNodejs ya estaba instalado anteriormente.\nNodejs was already installed previously.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Node.js. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js se ha instalado correctamente.\nNode.js has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▀▀ █▀▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █▀░ █▀░ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e "\033[01;33mFfmpeg ya estaba instalado anteriormente.\nFfmpeg was already installed previously.\033[0m"
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mFFmpeg se ha instalado correctamente.\nFFmpeg has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █ █▀▄▀█ ▄▀█ █▀▀ █▀▀ █▀▄▀█ ▄▀█ █▀▀ █ █▀▀ █▄▀
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █ █░▀░█ █▀█ █▄█ ██▄ █░▀░█ █▀█ █▄█ █ █▄▄ █░█\n\e[0m"

if command -v convert >/dev/null 2>&1; then
echo -e "\033[01;33mImagemagick ya estaba instalado anteriormente.\nImagemagick was already installed previously.\033[0m"
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mImageMagick se ha instalado correctamente.\nImageMagick has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄█ ▄▀█ █▀█ █▄░█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33mYarn ya estaba instalado anteriormente.\nYarn was already installed previously.\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33m$COMANDOS\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mYarn se ha instalado correctamente.\nYarn has been installed successfully.\n\033[0m" 
fi
fi

echo -e "\e[36m
▀▀█▀▀ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 　 ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀▀█▀▀ ▒█▀▀▀█ 
░▒█░░ ▒█░░▒█ ▒█░▒█ ▒█░░▒█ 　 ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█▄▄▀ ▒█▀▀▀ ▒█░░░ ░▒█░░ ▒█░░▒█ 
░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█ 　 ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█░▒█ ▒█▄▄▄ ▒█▄▄█ ░▒█░░ ▒█▄▄▄█

░█▀▀█ ▒█░░░ ▒█░░░ 　 ▒█▀▀█ ▀█▀ ▒█▀▀█ ▒█░▒█ ▀▀█▀▀ 
▒█▄▄█ ▒█░░░ ▒█░░░ 　 ▒█▄▄▀ ▒█░ ▒█░▄▄ ▒█▀▀█ ░▒█░░ 
▒█░▒█ ▒█▄▄█ ▒█▄▄█ 　 ▒█░▒█ ▄█▄ ▒█▄▄█ ▒█░▒█ ░▒█░░\n\e[0m"
echo -e "\033[01;32m\033[01m\nTodas las dependencias se han instalado correctamente.\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m
██╗░░██╗░░██╗░░  ██╗███╗░░██╗░██████╗████████╗░█████╗░██╗░░░░░██╗░░░░░
╚██╗░╚██╗░╚██╗░  ██║████╗░██║██╔════╝╚══██╔══╝██╔══██╗██║░░░░░██║░░░░░
░╚██╗░╚██╗░╚██╗  ██║██╔██╗██║╚█████╗░░░░██║░░░███████║██║░░░░░██║░░░░░
░██╔╝░██╔╝░██╔╝  ██║██║╚████║░╚═══██╗░░░██║░░░██╔══██║██║░░░░░██║░░░░░
██╔╝░██╔╝░██╔╝░  ██║██║░╚███║██████╔╝░░░██║░░░██║░░██║███████╗███████╗
╚═╝░░╚═╝░░╚═╝░░  ╚═╝╚═╝░░╚══╝╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚══════╝\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/diegojadibot/SakuraBotLite-MD.git
echo -e "\033[01;32m\033[01mLa clonación se ha descargado e instalado correctamente.\nThe clone has been downloaded and installed successfully.\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando al directorio del repositorio!!\nChanging to the repository directory!!\n\033[0m" 
cd SakuraBotLite-MD

echo -e "\e[36m
█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀   █▄█ ▄▀█ █▀█ █▄░█
█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄   ░█░ █▀█ █▀▄ █░▀█\n\e[0m"

echo -e "\033[0;34mSe actualizará yarn automáticamente. Esto puede tomar tiempo, Espere por favor.\nIt will update yarn automatically. This may take time, please wait..\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mYarn se ha actualizado correctamente.\nYarn has been successfully updated.\n\033[0m" 
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░░ █░░   █▄░█ █▀█ █▀▄▀█
█ █░▀█ ▄█ ░█░ █▀█ █▄▄ █▄▄   █░▀█ █▀▀ █░▀░█\n\e[0m"

echo -e "\033[0;34mSe instalará NPM automáticamente. Espere un momento por favor.\nNPM will be installed automatically. Wait a moment please.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar NPM. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mNPM se ha instalado correctamente..\n\033[0m" 
fi

clear
echo -e "\e[36m
┏╍┅┅┅╍⪻ 𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭-𝐌𝐃 ⪼┅┅┅┅┅┓
┋❥ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫: diegojadibot
┋❥ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞: www.youtube.com/@SakuraBotLite
┋❥ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤: www.facebook.com/Diego Crn
┋❥ 𝐆𝐢𝐭𝐇𝐮𝐛: github.com/diegojadibot
┋❥ 𝐍𝐮𝐦𝐞𝐫𝐨: +57 301 3482814
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋❥ 𝖭𝗈 𝗍𝖾 𝗈𝗅𝗏𝗂𝖽𝖾𝗌 𝖽𝖾𝗃𝖺𝗋 𝗎𝗇𝖺 𝖾𝗌𝗍𝗋𝖾𝗅𝗅𝖺 𝖺𝗅 𝗋𝖾𝗉𝗈𝗌𝗂𝗍𝗈𝗋𝗂𝗈 𝗈𝖿𝗂𝖼𝗂𝖺𝗅 𝖽𝖾𝗅 𝖻𝗈𝗍 🌟, 🟢 𝖲𝗂 𝗎𝗌𝖺𝗌 𝗇𝗎𝖾𝗌𝗍𝗋𝗈 𝖻𝗈𝗍 𝗌𝗂𝖾𝗆𝗉𝗋𝖾 𝗉𝗈𝖽𝗋𝖺𝗌 𝗀𝖺𝗇𝖺𝗋 𝗌𝖾𝗋 𝖺𝖽𝗆𝗂𝗇𝗌 𝖾𝗇 𝗅𝗈𝗌 𝗀𝗋𝗎𝗉𝗈𝗌 𝖽𝖾𝗅 𝖻𝗈𝗍 𝖺𝗌𝗍𝖺 𝖾𝗌𝗍𝖺𝗋 𝖾𝗇 𝖾𝗅 𝗆𝖾𝗇𝗎 𝖼𝗈𝗆𝗈 𝖻𝗈𝗍 𝗈𝖿𝗂𝖼𝗂𝖺𝗅 🚀
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋❥ 𝐍𝐎𝐓𝐀: 𝖤𝗅 𝖻𝗈𝗍 𝗌𝖾 𝖺𝗀𝗋𝖾𝗀𝖺 𝖺𝗎𝗍𝗈𝗆𝖺𝗍𝗂𝖼𝖺𝗆𝖾𝗇𝗍𝖾 𝖺𝗅 𝗀𝗋𝗎𝗉𝗈 𝗈𝖿𝗂𝖼𝗂𝖺𝗅 𝖽𝖾𝗅 𝖻𝗈𝗍, 𝖽𝗈𝗇𝖽𝖾 𝖾𝗌𝗍𝖺𝗆𝗈𝗌 𝗁𝖺𝖻𝗅𝖺𝗇𝖽𝗈 𝖽𝖾 𝗅𝖺 𝖿𝗎𝗇𝗍𝗎𝗋𝖺 𝗏𝖾𝗋𝗌𝗂𝗈́𝗇😻. 
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛

　　｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶ 
𝐆 𝐑 𝐀 𝐂 𝐈 𝐀 𝐒, 𝐏 𝐎 𝐑, 𝐏 𝐑 𝐄 𝐅 𝐄 𝐑 𝐈 𝐑 𝐍 𝐎 𝐒 🦋\n\e[0m"


echo -e "\033[01;32m\033[01mIniciando SakuraBotLite!!\nStarting SakuraBotLite!!\n\033[0m"
npm start
