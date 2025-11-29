const sql = require('mssql');

const { getPool } = require('../config/db');

const professor = {
  create: async (emailProfessor, senhaProfessor, nomeProfessor) => {
    const pool = getPool();
    const result = await pool.request()
      .input('emailProfessor', sql.NVarChar, emailProfessor)
      .input('senhaProfessor', sql.NVarChar, senhaProfessor)
      .input('nomeProfessor', sql.NVarChar, nomeProfessor)
      .query(`
        INSERT INTO Professores (emailProfessor, senhaProfessor, nomeProfessor)
        OUTPUT INSERTED.emailProfessor, INSERTED.senhaProfessor, INSERTED.nomeProfessor
        VALUES (@emailProfessor, @senhaProfessor, @nomeProfessor)
      `);
    return result.recordset[0];
  },

  findAll: async () => {
    const pool = getPool();
    const result = await pool.request().query('SELECT * FROM professores');
    return result.recordset;
  },
};
module.exports = professor;