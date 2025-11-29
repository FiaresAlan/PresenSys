  const professor = require('../models/professorModel');

  const createProfessor = async (req, res) => {
  const {emailProfessor, senhaProfessor, nomeProfessor} = req.body;
  if (!emailProfessor || !senhaProfessor || !nomeProfessor) {
    return res.status(400).json({ error: 'Email,senha e nome são obrigatórios' });
  }

   try {
    const Professor = await professor.create(emailProfessor, senhaProfessor, nomeProfessor);
    res.status(201).json(Professor);
  } catch (err) {
    console.error('Erro no banco:', err);
    if (err.message && err.message.includes('UNIQUE')) {
      return res.status(409).json({ error: 'Professor já cadastrado' });
    }
    res.status(500).json({ error: 'Erro ao cadastrar professor' });
   }
  };
  const getAllProfessores = async (req, res) => {
    try {
    const Professores = await professor.findAll();
    res.json(Professores);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar professores' });
   }
};
module.exports = { createProfessor, getAllProfessores };