const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.SERVER_USERNAME,
  password: process.env.SERVER_PASSWORD,
  server: process.env.SERVER_DB, // ex: 'PresenSys.mssql.somee.com'
  database: process.env.DATABASE,
  options: {
    encrypt: true, // necessário para Azure/Somee
    trustServerCertificate: true, // contorna erro de certificado
    enableArithAbort: true,
    connectTimeout: 30000,
    requestTimeout: 60000,
  },
  port: 1433,
};

let pool;

async function connect() {
  try {
    pool = await sql.connect(config);
    console.log('✅ Conectado ao SQL Server (Somee)!');
  } catch (err) {
    console.error('❌ Erro ao conectar ao SQL Server:', err);
    process.exit(1);
  }
}

function getPool() {
  if (!pool) throw new Error('Pool não inicializado. Chame connect() primeiro.');
  return pool;
}

module.exports = { connect, getPool };