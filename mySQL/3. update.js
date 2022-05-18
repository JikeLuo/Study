const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'travel0988984007',
    database: 'my_database_01'
})

/* 數據更新 */
// const user = {username: 'bigDickJack', password: 'Huuuuuuuge', id: 9}
// const sqlStr = 'update users set username=?, password=? where id=?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('數據更新成功')
// })

/* 數據更新的簡單方式 */
const user = {username: 'dickX', password: 'XXX', id: 17}
const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('數據更新成功')
// })

const sqlStr1 = 'update users set status=? where id=?'
db.query(sqlStr1,[1, 13], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) console.log('數據更新成功')
})







