/* 目標: 接收客戶端數據並轉成對象 封裝再響應 */
const express = require('express');
const mymw = require('./my_bodyParser');


const app = express();

const cors = require('cors');
app.use(cors())

app.use(mymw);

/*
app.use((req, res, next) => {
    // 把 urlencoded數據導入一個變數
    let str = '';
    req.on('data', (chunk) => {
        str += chunk;
    })

    req.on('end', (data) => {
        // 解析數據成對象
        const body = qs.parse(str)
        // 存入 req.body
        res.body = body;
        next();
    })
})
*/


app.get('/demo', (req, res) => {
    res.send(res.body)
})




app.listen('8000', () => {
    console.log('running')
})
