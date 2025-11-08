const sql = require('mssql');

const CONFIG = {
    user: process.env.SERVER_USERNAME,
    password: process.env.SERVER_PASSWORD,
    server: process.env.SERVER_DB,
    database: process.env.DATABASE,
    options:{
        encrypt: true,
        trustServerCertificate: true // Ignora o erro de certificado autoassinado
    }
}