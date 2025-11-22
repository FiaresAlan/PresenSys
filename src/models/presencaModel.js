const db = require('../config/db');

const Presenca = {
  create: async (aluno_id, data) => {
    const [result] = await db.execute(
      'INSERT INTO presencas (aluno_id, data) VALUES (?, ?)',
      [aluno_id, data]
    );
    return { id: result.insertId, aluno_id, data };
  },

  findByAlunoId: async (aluno_id) => {
    const [rows] = await db.execute(`
      SELECT p.*, a.nome AS aluno_nome
      FROM presencas p
      JOIN alunos a ON p.aluno_id = a.id
      WHERE p.aluno_id = ?
      ORDER BY p.data DESC
    `, [aluno_id]);
    return rows;
  },

  findByData: async (data) => {
    const [rows] = await db.execute(`
      SELECT p.*, a.nome AS aluno_nome, a.matricula
      FROM presencas p
      JOIN alunos a ON p.aluno_id = a.id
      WHERE p.data = ?
      ORDER BY a.nome
    `, [data]);
    return rows;
  },
};

module.exports = Presenca;