const path = require('path')
const fs = require('fs')

// path.join 可結合路徑名
// ../ 可刪除前一路徑名 可重複使用
// const pathJoin = path.join('a/', '/b', '/c/z/x', '../../', '/d', '/e')
const pathJoin = path.join('/txt/zzz', '../', 'fs readFile.txt') // /txt/fs readFile.txt

fs.readFile(path.join(__dirname, pathJoin), 'utf8', (err, dataStr) => {
    if (err) {
        return console.log('讀取失敗' + err.message)
    }
    console.log(dataStr)
})

// path.basename 可查詢位置的最終端名稱
// 後項可刪除副檔名
const base  = path.basename(pathJoin, '.txt')
console.log(base)

// path.extname 可以知道副檔名
const ext = path.extname(pathJoin)
console.log(ext)