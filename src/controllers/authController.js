const professorAuth = require('../models/professorModel');

const login = async (req, res) => {
  const { emailProfessor, senhaProfessor,} = req.body;
  if (!emailProfessor || !senhaProfessor) {
    return res.status(400).json({ error: 'Email, senha e nome obrigatórios' });
  }

  const ProfessorAuth = await professorAuth.findByEmail(emailProfessor);
  if (!ProfessorAuth || ProfessorAuth.senhaProfessor !== senhaProfessor) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  res.json({
    message: 'Login bem-sucedido',
    ProfessorAuth: { senhaProfessor: professor.senhaProfessor, emailProfessor: professor.emailProfessor }
  });
};

module.exports = { login };