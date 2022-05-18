const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'travel0988984007',
    database: 'my_database_01'
})

/* mySQL 新增數據 */
// // 創建要新增的對象
// const user = {username: 'Iron-man', password: 'ironBigDick222'}
// // 設定 mysql 語法 (?是佔位符 在執行程式後會自行填入
// const sqlStr = 'insert into users(username, password) value(?,?)'
// //  使用數組形式
// db.query(sqlStr, [user.username, user.password], (err, result) => {
//     if (err) return console.log(err.message)
//     // affectRows 是 mySQL 的一個參數 判定是否成功
//     if (result.affectedRows === 1) console.log('插入數據成功') /* insert into 返回是對象 */
// })

/* 新增數據的簡便寫法 */
const user1 = {username: 'bigXXX', password: 'XXX'}
const sqlStr1 = 'insert into users set ?'
db.query(sqlStr1, user1, (err, result) => {
    if (err) return console.log(err.message)
    if (result.affectedRows === 1) console.log('數據插入成功')

})
