const express = require('express')
const app = express();

// express.static('./folder') 可以對外提供 指定目錄的檔案
app.use(express.static('../../JS'))

// 加入前綴 http://127.0.0.1/images/fileName
app.use('images', express.static('../images'))

app.listen('8000', () => {
    console.log('running')
})