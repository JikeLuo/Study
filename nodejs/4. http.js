// 使用 http 模塊
const http = require('http');

// 創建服務器
const server = http.createServer();

// 接收請求 和回傳響應
// req 接收請求端
// res 響應請求端
server.on('request', (req, res) => {
    console.log('some one visit your server')
    let str = `your request url is ${req.url}, request method is ${req.method}, 今天天氣真是好`;

    // 設置響應頭 讓中文正常顯示
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8')

    // 響應的東西
    res.end(str)

})

// 設置端口 8000 啟動服務
server.listen('8000',() => {
    console.log('your server is running in http://127.0.0.1:8000')
})