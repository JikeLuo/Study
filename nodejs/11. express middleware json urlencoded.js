const express = require('express');
const app = express();

/* 以下中介層可以解析 json urlencoded 數據 */
/* 兩種都是用 req.body 接收 */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/json', (req, res) => {
    // 不加解析中介層回傳 undefined
    console.log(req.body)
    res.send('hi json!!')
    /* json 格式為
    * {
    *   "name": "Gan", key值必須雙引號
    *   "age": 23
    * } */
})

app.get('/url', (req, res) => {
    // 不加解析中介層回傳 {}
    console.log(req.body)
    res.send('hi url!!')
})


app.listen('8000', () => {
    console.log('running')
})