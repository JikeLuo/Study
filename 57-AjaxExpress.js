// 1. 引入express
const express = require('express');
const {request, response} = require("express");

// 2. 創建應用對象
const  app = express();

// 3. 創建路由規則
// request 請求報文封裝
// response 響應報文封裝
app.get('/', (request, response) => {
    // 設置響應
    response.send('Hello Aajax Express');
})

// 4. 監聽端口啟動服務
app.listen(8000, () => {
    console.log('8000 端口監聽中')
})
