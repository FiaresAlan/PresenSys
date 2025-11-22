const express = require('express');
const router = express.Router();
const { createAluno, getAllAlunos } = require('../controllers/alunoController');

router.post('/', createAluno);
router.get('/', getAllAlunos);

module.exports = {alunoRouter: router};