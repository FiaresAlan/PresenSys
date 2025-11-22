const sql = require('mssql');

const { getPool } = require('../config/db');

const Aluno = {
  create: async (nome, matricula) => {
    const pool = getPool();
    const result = await pool.request()
      .input('nome', sql.NVarChar, nome)
      .input('matricula', sql.NVarChar, matricula)
      .query(`
        INSERT INTO alunos (nome, matricula)
        OUTPUT INSERTED.id, INSERTED.nome, INSERTED.matricula
        VALUES (@nome, @matricula)
      `);
    return result.recordset[0];
  },

  findAll: async () => {
    const pool = getPool();
    const result = await pool.request().query('SELECT * FROM alunos');
    return result.recordset;
  },
};

module.exports = Aluno;