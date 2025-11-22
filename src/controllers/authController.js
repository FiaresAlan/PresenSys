const Professor = require('../models/professorModel');

const login = async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ error: 'Email e senha obrigatórios' });
  }

  const professor = await Professor.findByEmail(email);
  if (!professor || professor.senha !== senha) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  res.json({
    message: 'Login bem-sucedido',
    professor: { id: professor.id, nome: professor.nome, email: professor.email }
  });
};

module.exports = { login };