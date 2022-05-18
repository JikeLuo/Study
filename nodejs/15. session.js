const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const session = require('express-session')

app.use(session({
    secret: 'Jeke',
    resave: false,
    saveUninitialized: true
}))


app.post('/api/login', (req, res) => {
    if (req.body.username !== 'root' || req.body.password !== 'qaz123') return res.send({status: 1, msg: '帳號或密碼失敗'})
    req.session.user = req.body
    req.session.isLogin = true
    res.send({status: 0, msg: '登入成功'})
})

app.get('/api/user', (req, res) => {
    if (!req.session.isLogin) return res.send({status: 1, msg: '您未登錄'})
    res.send({status: 0, msg: '成功登錄', username: req.session.user.username})
})

app.post('/api/logout', (req,res) => {
    req.session.destroy()
    res.send({status: 1, msg: '您已登出'})
})


app.listen(8000, () => {
    console.log('running')
})