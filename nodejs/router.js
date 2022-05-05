/* 創建路由模塊 */
const express = require('express')

/* 創建路由對象 */
const router  = express.Router();

router.get('/demo', (req, res) => {
    res.send('router get')
})
router.post('/demo', (req, res) => {
    res.send('router post')
})

/* 向外導出路由模塊 */
module.exports = router;