const express = require('express');

const app = express();

app.get('/demo', (req, res) => {
    res.send('212112')
})

app.post('/demo', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send({name: 'Gan', age: 23})
})

/*  res.query 可以查詢客戶端逤傳送的參數
    回傳是空對象
    客戶端 /query?id=10&name=gan
    用途: YT搜尋影片 */
app.get('/query', (req, res)=>{
    res.send(req.query)
})

// res.params是動態參數 可以接收客戶端發送的數據
// :id/:tag server, client idNum/tagName
app.get('/params/:id/:tag', (req, res) => {
    res.send(req.params)
})

app.listen(8000, () => {
    console.log('running')
})