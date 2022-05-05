const express = require('express');
const app = express();

app.get('/error', (req,res) => {
    throw new Error('finding a new Error!!!') // = err.message
    res.send('Hello') // 不執行
})

/* 錯誤層級的中介層 */
// 必須放路由的最下方
app.use((err,req,res,next) => {
    console.log(err.message)
    res.send('Error: ' + err.message)
})

app.listen('8000',()=> {
    console.log('running')
})