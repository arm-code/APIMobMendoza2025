const { Pool } = require('pg');
const dotenv = require('dotenv');
const fs = require('fs')

dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync('src/certs/ca.crt').toString(),

    }
})


// probar la conexion a la DB
pool.connect((error, client, release) => {
    if(error){
        console.log('error de conexion!!');
    }else{
        console.log('Conextion exitosa')
        release()
    }
})
module.exports = pool