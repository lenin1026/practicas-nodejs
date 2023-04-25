const mysql = require('mysql2/promise');

async function connectDB() {
    const connection = await mysql.createConnection({
        host: 'aws.connect.psdb.cloud',
        user: 'tc64f7ms32m854pukugl',
        password: 'pscale_pw_F2apRFH4QSJKckD5p5VUixppGzs50zDfq3k69zA0sY5',
        database: 'expressdb',
        ssl : {
            rejectUnauthorized: false
        }
    })
    
    const result = await connection.query('SELECT "hola mundo" AS Result')
    console.log(result)
}

module.exports = connectDB