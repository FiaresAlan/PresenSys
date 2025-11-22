const db = require('../config/db');

const Aluno = {
  create: async (nome, matricula) => {
    const [result] = await db.execute(
      'INSERT INTO alunos (nome, matricula) VALUES (?, ?)',
      [nome, matricula]
    );
    return { id: result.insertId, nome, matricula };
  },

  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM alunos');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM alunos WHERE id = ?', [id]);
    return rows[0];
  },
};

module.exports = Aluno;