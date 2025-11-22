const Aluno = require('../models/alunoModel');

const createAluno = async (req, res) => {
  const { nome, matricula } = req.body;
  if (!nome || !matricula) {
    return res.status(400).json({ error: 'Nome e matrícula são obrigatórios' });
  }
  try {
    const aluno = await Aluno.create(nome, matricula);
    res.status(201).json(aluno);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Matrícula já cadastrada' });
    }
    res.status(500).json({ error: 'Erro ao cadastrar aluno' });
  }
};

const getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
};

module.exports = { createAluno, getAllAlunos };