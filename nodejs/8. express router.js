const express = require('express');
/* 引入路由模塊 */
const router = require('./router');

const app = express();

/* 使用路由 */
// app.use() 是註冊全局的中介軟體 用來連接系統各部件的溝通軟體
// 加入前綴 = http://127.0.0.1:8000/api/demo
app.use('/api', router)


app.listen('8000', () => {
    console.log('running')
})

