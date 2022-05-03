const path = require('path')
const fs = require('fs')




// 讀取文檔 並用方法拆分對映標籤 style script
fs.readFile(path.join(__dirname, '../28 - 滑鼠事件對象.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log('讀取錯誤');
    solveStyle(dataStr);
    solveScript(dataStr);
})

// 使用正則表達式設定拆分規則
let regStyle = /<style>[\s\S]*<\/style>/;
let regScript = /<script>[\s\S]*<\/script>/

// 創建方法

function solveStyle(dataHTML) {
    const r1 = regStyle.exec(dataHTML);
    const r2 = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/txt/project disassembled style.txt'), r2, 'utf8', (err) =>{
        if (err) console.log('錯誤')
    })
}

function solveScript(dataHTML) {
    const r1 = regScript.exec(dataHTML);
    const r2 = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/txt/project disassembled script.txt'), r2, 'utf8', (err) =>{
        if (err) return console.log('錯誤')
    })
}