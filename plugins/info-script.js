import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          m.reply(`👋 Hola ${name} Aqui Está El Script Del Bot, Puedes Usar #instalarbot Para Ver Los Comandos De Intalación En Termux\n\nhttps://github.com/diegojadibot/Multiverse-MD`);
            });
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['sc', 'script']
handler.register = true
export default handler