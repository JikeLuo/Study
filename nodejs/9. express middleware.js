const express = require('express');
const app = express();

/* 全局中介層 */
app.use((req, res, next) => {
    console.log(typeof req.query.num) //string
    let aa = parseInt(req.query.num);
    aa *= aa;
    req.aa = aa;
    next();
})
app.get('/demo', (req, res) => {
    console.log(typeof req) // object
    //res.send 只能傳 JSON 和 字串
    res.send(JSON.stringify(req.aa))
})


/* 局部中介層 */
const mw1 = function (req, res, next) {
    console.log('mw1')
    next();
}
const mw2 = function (req, res, next) {
    console.log('mw2')
    next();
}
const mw3 = function (req, res, next) {
    console.log('mw3')
    next();
}
const mw = [mw1, mw2, mw3];

// 增加參數 mw 來使用局部中介層
app.get('/mw', mw, (req, res) => {
    console.log('mw page')
    res.send('mw page test')
})


app.listen('8000', () => {
    console.log('running')
})