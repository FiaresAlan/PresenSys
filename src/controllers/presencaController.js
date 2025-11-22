const Presenca = require('../models/presencaModel');

const registrarPresenca = async (req, res) => {
  const { aluno_id, data } = req.body;
  if (!aluno_id || !data) {
    return res.status(400).json({ error: 'aluno_id e data são obrigatórios' });
  }
  try {
    const presenca = await Presenca.create(aluno_id, data);
    res.status(201).json(presenca);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Presença já registrada para este aluno nesta data' });
    }
    res.status(500).json({ error: 'Erro ao registrar presença' });
  }
};

const getPresencasPorAluno = async (req, res) => {
  const { id } = req.params;
  try {
    const presencas = await Presenca.findByAlunoId(id);
    res.json(presencas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar presenças' });
  }
};

const getPresencasPorData = async (req, res) => {
  const { data } = req.params;
  try {
    const presencas = await Presenca.findByData(data);
    res.json(presencas);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar presenças' });
  }
};

module.exports = { registrarPresenca, getPresencasPorAluno, getPresencasPorData };