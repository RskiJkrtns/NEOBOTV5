/**
 - Created By Lexxy Official
 - Base Neobot Multi Device
 - Silahkan Di Pakai & Kembangkan Fiturnya
*/

"use strict";
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
        makeInMemoryStore,
	useSingleFileAuthState,
	delay
} = require("@adiwajshing/baileys")
const figlet = require("figlet");
const fs = require("fs");
const moment = require('moment')
const chalk = require('chalk')
const logg = require('pino')
const clui = require('clui')
const { Spinner } = clui
const { serialize, getBuffer } = require("./lib/myfunc");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require("./lib/exifff");
const { color, mylog, infolog } = require("./lib/color");
const time = moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
let setting = JSON.parse(fs.readFileSync('./config.json'));
let session = `./${setting.sessionName}.json`
const { state, saveState } = useSingleFileAuthState(session)
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));

function title() {
	  console.log(chalk.bold.blue(figlet.textSync('NEOBOT', {
		font: 'Standard',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	})))
	console.log(chalk.yellow(`\n ${chalk.green('[ Created By Lexxy Official ]')}\n`))
}
/**
* Uncache if there is file change;
* @param {string} module Module name or path;
* @param {function} cb <optional> ;
*/
function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
	})
}
/**
* Uncache a module
* @param {string} module Module name or path;
*/
function uncache(module = '.') {
	return new Promise((resolve, reject) => {
		try {
			delete require.cache[require.resolve(module)]
			resolve()
		} catch (e) {
			reject(e)
		}
	})
}

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`))
const starting = new Spinner(chalk.cyan(` Preparing After Connect`))
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`))

const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })

const connectToWhatsApp = async () => {
	const conn = makeWASocket({
            printQRInTerminal: true,
            logger: logg({ level: 'fatal' }),
            auth: state,
            browser: ["Neobot Multi Device", "Safari", "3.0"]
        })
	title()
        store.bind(conn.ev)
	
	/* Auto Update */
	require('./message/help')
	require('./message/msg')
	nocache('./message/help', module => console.log(chalk.yellow(`'./message/help.js' Telah diupdate`)))
	nocache('./message/msg', module => console.log(chalk.yellow(`'./message/msg.js' Telah diupdate`)))
	
	conn.multi = true
	conn.nopref = false

	conn.prefa = 'anjing'
	conn.ev.on('messages.upsert', async m => {
		if (!m.messages) return;
		var msg = m.messages[0]
		msg = serialize(conn, msg)
		msg.isBaileys = msg.key.id.startsWith('BAE5') || msg.key.id.startsWith('3EB0')
		require('./message/msg')(conn, msg, m, setting, store, welcome)
	})
	conn.ev.on('connection.update', (update) => {
		const { connection, lastDisconnect } = update
		if (connection === 'close') {
			status.stop()
			reconnect.stop()
			starting.stop()
			console.log(mylog('Server Ready ✓'))
			lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut 
			? connectToWhatsApp()
			: console.log(mylog('Wa web terlogout...'))
		}
	})
	conn.ev.on('creds.update', () => saveState)
	
        conn.ev.on('group-participants.update', async (data) => {
          const isWelcome = welcome.includes(data.id) ? true : false
          if (isWelcome) {
            try {
            	let metadata = await conn.groupMetadata(data.id)
              for (let i of data.participants) {
                try {
                  var pp_user = await conn.profilePictureUrl(i, 'image')
                } catch {
                  var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                if (data.action == "add") {
                  var but = [{buttonId: `/`, buttonText: { displayText: "Welcome" }, type: 1 }, {buttonId: `/infobot`, buttonText: { displayText: "Siapa si aku?" }, type: 1 }]
				conn.sendMessage(data.id, { caption: `Hallo @${i.split("@")[0]} Selamat Datang Di Grup *${metadata.subject}*\n\nIntro Dulu Yuk Kak\n\n\nNama : \nUmur :\nAskot :\nGender :\n\nSemoga Kamu Betah Di Grup ini, Jangan Lupa Untuk Membaca Dan Mematuhi Rules Yang Ada`, image: {url: pp_user}, buttons: but, footer: `Deskripsi : ${metadata.desc}`, mentions: [i]})
		        } else if (data.action == "remove") {
		          var but = [{buttonId: `/`, buttonText: { displayText: "Bye" }, type: 1 }]
				conn.sendMessage(data.id, { caption: `Selamat Tinggal @${i.split("@")[0]}\n\nSemoga Harimu Suram\nTetap Putus Asa Jangan Semangat Dan Jadilah Beban Keluarga 🤙🗿`, image: {url: pp_user}, buttons: but, footer: `${metadata.subject}`, mentions: [i]})
		}
              }
            } catch (e) {
              console.log(e)
            }
          }
        })
        
     conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
    
	conn.reply = (from, content, msg) => conn.sendMessage(from, { text: content }, { quoted: msg })
    conn.sendText = (from, text, quoted = '', options) => conn.sendMessage(from, { text: text, ...options }, { quoted })
	return conn
}

connectToWhatsApp()
.catch(err => console.log(err))
