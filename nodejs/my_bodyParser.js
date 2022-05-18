const express = require('express');
const qs = require('querystring');

// querystring 把數據解析成對象


const bodyParser = (req, res, next) => {
    // 把 urlencoded數據導入一個變數
    let str = '';

    // 事件data 接收客戶端的數據
    req.on('data', (chunk) => {
        str += chunk;
    })

    req.on('end', () => {
        // 解析數據成對象
        const body = qs.parse(str)
        // 存入 req.body
        res.body = body;
        next();
    })
}

module.exports = bodyParser;
