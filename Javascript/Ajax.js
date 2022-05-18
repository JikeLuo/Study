const express = require('express');
const {request, response} = require("express");
const apps = express();

// delay 服務端
apps.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(()=>{
        response.send('網路延遲三秒')
    },3000)
})

// axios 服務端
apps.all('/axios', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('all')
})

// same-origin 服務端
apps.all('/same-origin', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
   // __dirname node.js 獲得絕對路徑 ./index.html 同一路徑的HTML檔案
    response.sendFile(__dirname + '/66 - Ajax 同源策略.html')
})
// same-origin-data 服務端
apps.all('/same-origin-data', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // __dirname node.js 獲得絕對路徑 ./index.html 同一路徑的HTML檔案
    let data = '獲取了數據 + \n'
    response.send(JSON.stringify(data))
})

// all 請求 接收所有請求
apps.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    // response.send('all')
    const data = {
        name: 'Zeke'
    }
    response.send(JSON.stringify(data)
    )
})

// GET 請求
// apps.get('/server', (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin','*')
//
//     response.setHeader('Access-Control-Allow-Origin','*')
// });

// post 請求
// apps.post('/server', (request, response) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.setHeader('Access-Control-Allow-Headers', '*')
//     response.send('媽的 是post請求')
// })

// json-server 服務端
// 可自定義響應頭
// 定義path
apps.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')

    // 創建對象
    const data = {
        name: 'red',
    }
    // 把對象轉換成字符串
    let str = JSON.stringify(data);
    // 只能傳送字符串和buffer
    response.send(str)

})

apps.listen(8000,() => {
    console.log('端口8000 已連接')
});