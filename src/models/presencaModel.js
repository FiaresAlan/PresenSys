const sql = require('mssql');
const { getPool } = require('../config/db');

const Presenca = {
  create: async (aluno_id, data) => {
    const pool = getPool();
    const result = await pool.request()
      .input('aluno_id', sql.Int, aluno_id)
      .input('data', sql.Date, data)
      .query(`
        INSERT INTO presencas (aluno_id, data)
        OUTPUT INSERTED.id, INSERTED.aluno_id, INSERTED.data
        VALUES (@aluno_id, @data)
      `);
    return result.recordset[0];
  },

  findByAlunoId: async (aluno_id) => {
    const pool = getPool();
    const result = await pool.request()
      .input('aluno_id', sql.Int, aluno_id)
      .query(`
        SELECT p.*, a.nome AS aluno_nome
        FROM presencas p
        JOIN alunos a ON p.aluno_id = a.id
        WHERE p.aluno_id = @aluno_id
        ORDER BY p.data DESC
      `);
    return result.recordset;
  },

  findByData: async (data) => {
    const pool = getPool();
    const result = await pool.request()
      .input('data', sql.Date, data)
      .query(`
        SELECT p.*, a.nome AS aluno_nome, a.matricula
        FROM presencas p
        JOIN alunos a ON p.aluno_id = a.id
        WHERE p.data = @data
        ORDER BY a.nome
      `);
    return result.recordset;
  },
};

module.exports = Presenca;