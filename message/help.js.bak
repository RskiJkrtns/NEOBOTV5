const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

angka = 0
let HB = '⊳'
let SB = '•'
let SK = '❏'
let K1 = '『'
let K2 = '』'
let YR = '⇒'
let BF = '_'
let P4 = '```'
let GK = '➛'

let monospace = '_'
let stripkiri = ' ⊳ *_'
let stripknan = '_*'
let formatText = ' <text>'
let formatPesan = ' <reply pesan>'
let formatPesann = ' <key@response>'
let formatNya = ' <key>'
let TextKiri = '⭓ *'
let textKanan = '*'

let teks1= 'MENU SIMPLE'
let teks2 = 'NULIS MENU'
let teks3 = 'DOWNLOADER'
let teks4 = 'ISLAMIC MENU'
let teks5 = 'GROUP MENU'
let teks6 = 'OWNER MENU'
let teks7 = 'WALLPAPER RANDOM'
let teks8 = 'KERANG AJAIB'
let teks9 = 'PAYMENT/BANK'
let teks10 = 'CONVERT/TOOLS'
let teks11 = 'SEARCH MENU'
let teks12 = 'STORE MENU'
let teks13 = 'RANDOM MENU'
let teks14 = 'GAMES MENU'
let teks15 = 'PREMIUM MENU'
let teks16 = 'TEXTPRO MENU'
let teks17 = 'AUEOTEXT MENU'
let teks18 = 'MAGER NULIS'

let textMenu1 =`${TextKiri}${teks1}${textKanan}`
let textMenu2 =`${TextKiri}${teks2}${textKanan}`
let textMenu3 =`${TextKiri}${teks3}${textKanan}`
let textMenu4 =`${TextKiri}${teks4}${textKanan}`
let textMenu5 =`${TextKiri}${teks5}${textKanan}`
let textMenu6 =`${TextKiri}${teks6}${textKanan}`
let textMenu7 =`${TextKiri}${teks7}${textKanan}`
let textMenu8 =`${TextKiri}${teks8}${textKanan}`
let textMenu9 =`${TextKiri}${teks9}${textKanan}`
let textMenu10 =`${TextKiri}${teks10}${textKanan}`
let textMenu11 =`${TextKiri}${teks11}${textKanan}`
let textMenu12 =`${TextKiri}${teks12}${textKanan}`
let textMenu13 =`${TextKiri}${teks13}${textKanan}`
let textMenu14 =`${TextKiri}${teks14}${textKanan}`
let textMenu15 =`${TextKiri}${teks15}${textKanan}`
let textMenu16 =`${TextKiri}${teks16}${textKanan}`
let textMenu17 =`${TextKiri}${teks17}${textKanan}`
let textMenu18 =`${TextKiri}${teks18}${textKanan}`

let J1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[`
let J4 =`]`
let J3 =`┃╰──────────────────
╚━══━══━══━══━══━══━`
let J2 =`┃│⭓ `
let TT1 =`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═➤`
let TT2 =`⌟`
let TT3 =`┃│➢`
let DR =`*──────────────────*`
let H4 =`└───⭓`

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*───•「 ${setting.botName} - MD 」•───*
	
 _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

 ❑ *INFO SERVER*
 ➢ _Library : Baileys-MD._
 ➢ _Prefix : Multi Prefix_
 ➢ _Author : Lexxy Official_
 ➢ _Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
 ➢ _Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_
 
 ❑ *INFO USERS*
 ➢ _Name : ${pushname}_
 ➢ _Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}_
 ➢ _Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 ➢ _Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}_
 ➢ _Saldo : Rp.${toCommas(getBalance(sender, balance))}_
 
${textMenu1}
${stripkiri}${prefix}id${stripknan}
${stripkiri}${prefix}db${stripknan}
${stripkiri}${prefix}listpc${stripknan}
${stripkiri}${prefix}listgc${stripknan}
${stripkiri}${prefix}ping${stripknan}
${stripkiri}${prefix}simi${stripknan}
${stripkiri}${prefix}rules${stripknan}
${stripkiri}${prefix}script${stripknan}
${stripkiri}${prefix}owner${stripknan}
${stripkiri}${prefix}donasi${stripknan}
${stripkiri}${prefix}speed${stripknan}
${stripkiri}${prefix}runtime${stripknan}
${stripkiri}${prefix}sewabot${stripknan}
${stripkiri}${prefix}botstatus${stripknan}
${stripkiri}${prefix}statusbot${stripknan}
${stripkiri}${prefix}buildpack${stripknan}
${stripkiri}${prefix}dashboard${stripknan}

${textMenu2}
${stripkiri}${prefix}nulis${stripknan}
${stripkiri}${prefix}nuliskiri${stripknan}
${stripkiri}${prefix}nuliskanan${stripknan}
${stripkiri}${prefix}foliokiri${stripknan}
${stripkiri}${prefix}foliokanan${stripknan}

${textMenu3}
${stripkiri}${prefix}play${stripknan}
${stripkiri}${prefix}tiktok${stripknan}
${stripkiri}${prefix}ytmp4${stripknan}
${stripkiri}${prefix}ytmp3${stripknan}
${stripkiri}${prefix}facebook${stripknan}
${stripkiri}${prefix}mediafire${stripknan}
${stripkiri}${prefix}instagram${stripknan}
${stripkiri}${prefix}tiktokaudio${stripknan}
 
${textMenu4}
${stripkiri}${prefix}doaharian${stripknan}
${stripkiri}${prefix}asmaulhusna${stripknan}
${stripkiri}${prefix}bacaansholat${stripknan}

${textMenu5}
${stripkiri}${prefix}kick${stripknan}
${stripkiri}${prefix}demote${stripknan}
${stripkiri}${prefix}promote${stripknan}
${stripkiri}${prefix}group${stripknan}
${stripkiri}${prefix}jadian${stripknan}
${stripkiri}${prefix}jodohku${stripknan}
${stripkiri}${prefix}revoke${stripknan}
${stripkiri}${prefix}hidetag${stripknan}
${stripkiri}${prefix}setdesc${stripknan}
${stripkiri}${prefix}linkgrup${stripknan}
${stripkiri}${prefix}setppgrup${stripknan}
${stripkiri}${prefix}setnamegc${stripknan}

${textMenu6}
${stripkiri}${prefix}bc${stripknan}
${stripkiri}${prefix}join${stripknan}
${stripkiri}${prefix}exif${stripknan}
${stripkiri}${prefix}leave${stripknan}
${stripkiri}${prefix}mysesi${stripknan}
${stripkiri}${prefix}sendsesi${stripknan}
${stripkiri}${prefix}setting${stripknan}
${stripkiri}${prefix}creategc${stripknan}
${stripkiri}${prefix}delprem${stripknan}
${stripkiri}${prefix}addprem${stripknan}
${stripkiri}${prefix}setppbot${stripknan}
${stripkiri}${prefix}broadcast${stripknan}

${textMenu7}
${stripkiri}${prefix}loli${stripknan}
${stripkiri}${prefix}akira${stripknan}
${stripkiri}${prefix}neko${stripknan}
${stripkiri}${prefix}anime${stripknan}
${stripkiri}${prefix}gamers${stripknan}
${stripkiri}${prefix}ahegao${stripknan}
${stripkiri}${prefix}islamic${stripknan}
${stripkiri}${prefix}akiyama${stripknan}
${stripkiri}${prefix}aesthetic${stripknan}
${stripkiri}${prefix}mountain${stripknan}
${stripkiri}${prefix}technology${stripknan}
${stripkiri}${prefix}progaming${stripknan}

${textMenu8}
${stripkiri}${prefix}rate${stripknan}
${stripkiri}${prefix}apakah${stripknan}
${stripkiri}${prefix}bisakah${stripknan}
${stripkiri}${prefix}siapakah${stripknan}
${stripkiri}${prefix}bagaimanakah${stripknan}

${textMenu9}
${stripkiri}${prefix}tf${stripknan}
${stripkiri}${prefix}limit${stripknan}
${stripkiri}${prefix}saldo${stripknan}
${stripkiri}${prefix}transfer${stripknan}
${stripkiri}${prefix}buylimit${stripknan}
${stripkiri}${prefix}buyglimit${stripknan}
${stripkiri}${prefix}topsaldo${stripknan}

${textMenu10}
${stripkiri}${prefix}tahta${stripknan}
${stripkiri}${prefix}ssweb${stripknan}
${stripkiri}${prefix}toimg${stripknan}
${stripkiri}${prefix}tovid${stripknan}
${stripkiri}${prefix}cuttly${stripknan}
${stripkiri}${prefix}sticker${stripknan}
${stripkiri}${prefix}tovideo${stripknan}
${stripkiri}${prefix}toimage${stripknan}
${stripkiri}${prefix}emojimix${stripknan}
${stripkiri}${prefix}emojimix2${stripknan}
 
${textMenu11}
${stripkiri}${prefix}jam${stripknan}
${stripkiri}${prefix}news${stripknan}
${stripkiri}${prefix}detik${stripknan}
${stripkiri}${prefix}cekhp${stripknan}
${stripkiri}${prefix}lirik${stripknan}
${stripkiri}${prefix}loker${stripknan}
${stripkiri}${prefix}meme${stripknan}
${stripkiri}${prefix}couple${stripknan}
${stripkiri}${prefix}quotes${stripknan}
${stripkiri}${prefix}ghstalk${stripknan}
${stripkiri}${prefix}grupwa${stripknan}
${stripkiri}${prefix}domain${stripknan}
${stripkiri}${prefix}translate${stripknan}
${stripkiri}${prefix}ytsearch${stripknan}
${stripkiri}${prefix}darkjokes${stripknan}
${stripkiri}${prefix}faktaunik${stripknan}
${stripkiri}${prefix}ppcouple${stripknan}
${stripkiri}${prefix}memeindo${stripknan}
${stripkiri}${prefix}infogempa${stripknan}
${stripkiri}${prefix}jadwalbola${stripknan}
${stripkiri}${prefix}jadwalbioskop${stripknan}

${textMenu12}
${stripkiri}${prefix}kali${stripknan}
${stripkiri}${prefix}bagi${stripknan}
${stripkiri}${prefix}kurang${stripknan}
${stripkiri}${prefix}tambah${stripknan}
${stripkiri}${prefix}buysc${stripknan}
${stripkiri}${prefix}jasarun${stripknan}
${stripkiri}${prefix}store${stripknan}
${stripkiri}${prefix}ceklist${stripknan}
${stripkiri}${prefix}topupff${stripknan}
${stripkiri}${prefix}dellist${formatNya}${stripknan}
${stripkiri}${prefix}addlist${formatPesann}${stripknan}
${stripkiri}${prefix}updatelist${formatPesann}${stripknan}
${stripkiri}done${formatPesan}${stripknan}
${stripkiri}proses${formatPesan}${stripknan}

${textMenu13}
${stripkiri}${prefix}quote${stripknan}
${stripkiri}${prefix}cecan${stripknan}
${stripkiri}${prefix}cogan${stripknan}
${stripkiri}${prefix}husbu${stripknan}
${stripkiri}${prefix}waifu1${stripknan}
${stripkiri}${prefix}waifu2${stripknan}
${stripkiri}${prefix}kitsune${stripknan}

${textMenu14}
${stripkiri}${prefix}slot${stripknan}
${stripkiri}${prefix}suit${stripknan}
${stripkiri}${prefix}asahotak${stripknan}
${stripkiri}${prefix}susunkata${stripknan}
${stripkiri}${prefix}tebakangka${stripknan}
${stripkiri}${prefix}caklontong${stripknan}
${stripkiri}${prefix}tebakgambar${stripknan}

${textMenu15}
${stripkiri}${prefix}rika${stripknan}
${stripkiri}${prefix}bocil${stripknan}
${stripkiri}${prefix}hijaber${stripknan}
${stripkiri}${prefix}asupan${stripknan}
${stripkiri}${prefix}buyprem${stripknan}
${stripkiri}${prefix}cekprem${stripknan}
${stripkiri}${prefix}listprem${stripknan}

${textMenu16}
${stripkiri}${prefix}snow${stripknan}${formatText}
${stripkiri}${prefix}blood${stripknan}${formatText}
${stripkiri}${prefix}cloud${stripknan}${formatText}
${stripkiri}${prefix}berry${stripknan}${formatText}
${stripkiri}${prefix}candy${stripknan}${formatText}
${stripkiri}${prefix}circuit${stripknan}${formatText}
${stripkiri}${prefix}pencil${stripknan}${formatText}
${stripkiri}${prefix}glitch${stripknan}${formatText}
${stripkiri}${prefix}matrix${stripknan}${formatText}
${stripkiri}${prefix}metalic${stripknan}${formatText}
${stripkiri}${prefix}deepsea${stripknan}${formatText}
${stripkiri}${prefix}darkgold${stripknan}${formatText}
${stripkiri}${prefix}papercut${stripknan}${formatText}
${stripkiri}${prefix}discovery${stripknan}${formatText}
${stripkiri}${prefix}christmas${stripknan}${formatText}
${stripkiri}${prefix}transformer${stripknan}${formatText}

${textMenu17}
${stripkiri}${prefix}hilih${stripknan}${formatText}
${stripkiri}${prefix}heleh${stripknan}${formatText}
${stripkiri}${prefix}halah${stripknan}${formatText}
${stripkiri}${prefix}huluh${stripknan}${formatText}
${stripkiri}${prefix}holoh${stripknan}${formatText}

${textMenu18}
${stripkiri}${prefix}mager1${stripknan}${formatText}
${stripkiri}${prefix}mager2${stripknan}${formatText}
${stripkiri}${prefix}mager3${stripknan}${formatText}
${stripkiri}${prefix}mager4${stripknan}${formatText}
${stripkiri}${prefix}mager5${stripknan}${formatText}
`
}

exports.rulesnya = (sender, prefix) => {
   return `
   ≻ *RULES BOT*
   
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini di jual oleh Lexxy Official Jika Minat Chat Wa.me/6283834558105

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add group.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Neobot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Neobot
😖🙏`
}

exports.sewabot = (sender, prefix) => {
   return `
☞ *LIST HARGA SEWABOT*
 ➢ _2 Hari : Rp3.000_
 ➢ _5 Hari : Rp5.000_
 ➢ _1 Minggu : Rp7.000_
 ➢ _2 Minggu : Rp12.000_
 ➢ _1 Bulan : Rp15.000_
 ➢ _2 Bulan : Rp25.000_
 ➢ _3 Bulan : Rp45.000_

_Hai Kak Mau Sewa Bot ??_
_Untuk Fiturnya Bisa Di Cek #allmenu_
_Jika Minat Chat Owner Ketik #owner_

*───•「 ${setting.botName} - MD 」•───*
`
}

exports.donasibot = (sender, prefix) => {
   return `
  ‣ *DONASI BOT*
 ➢ DANA = 085789004732
 ➢ OVO = 085789004732
 ➢ PULSA = 085789004732
 ➢ QRIS = https://telegra.ph/file/d015def9028eb1c0a156b.jpg
 
Hallo Kak ${ucapanWaktu}
Beneran Mau Donasi Bot ??
Silahkan Pilih Payment Di Atas

Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini
`
}