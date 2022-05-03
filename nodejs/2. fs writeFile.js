const fs = require('fs')

// fs.writeFile('寫入的位置', '寫入的內容', [, option], callback)
// 寫入的內容會取代原本的內容
// 路徑找不到會新增同名檔案
// __dirname 是當前位置的絕對路徑 所以不管在哪裡執行 JS 都可以指向當前位置
fs.writeFile(__dirname + 'txt/fs writefile.txt', 'writeFile 更新參數', 'utf8', function (err) {
    if (err) {
        return console.log('寫入失敗' + err.message)
    }
    console.log('寫入成功')

})
