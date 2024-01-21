const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283169231840@s.whatsapp.net"]
global.nomerOwner = "6283169231840"
global.nomorOwner = ['6283169231840']
global.namaDeveloper = "THOMZ-JB"
global.namaBot = "THOMZ BOT"
global.packname = ""
global.author = "Thomvelz"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = "Assalamualaikum,  Save bang Thomz jb kalo mau buy panel / bot push kontak pm bre 😁"
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By IrulLz Dev (Gausah Di Ganti Hargai Gua!!)
Di Jalankan Dan Di Fix Oleh IrulLz Dev & Namamu
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/