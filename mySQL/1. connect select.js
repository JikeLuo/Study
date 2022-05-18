const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',              // 數據庫 IP
    user: 'root',                   // 數據庫帳號
    password: 'travel0988984007',   // 數據庫密碼
    database: 'my_database_01',      // 操作哪數據庫
})

/* 測試數據是否連接 */
// 成功則 RowDataPacket { '1': 1 }
// db.query('select 1', (err, results) => {
//     if (err) return console.log(err.message)
//     console.log(results)
// })

/* 搜索列表 */
// 搜尋的條件
const query = 'select * from users';
db.query(query, (err, results) => {
    if (err) return console.log(err.message)
    console.log(results) /* select 返回是數組 */
})



