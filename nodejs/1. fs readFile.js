// 1. 導入 fs 模塊
const fs = require('fs');

// 2. fs.readFile('讀取文件路徑', [, option], callback)
// 用uft8 編碼方式開啟
fs.readFile('fs readFile1.txt', 'utf8', function (err, dataStr) {
    if (err) {
       return console.log('讀取失敗 ' + err.message)
    }
    console.log('讀取成功 ' + dataStr)
})



