const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'travel0988984007',
    database: 'my_database_01'
})

const sqlStr = 'delete from users where id=?'

db.query(sqlStr, 10, (err, results) => {
    if (err) console.log(err.message)
    if (results.affectedRows === 1) console.log('數據刪除成功')
})