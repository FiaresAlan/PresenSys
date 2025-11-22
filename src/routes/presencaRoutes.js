const express = require('express');
const router = express.Router();
const { registrarPresenca, getPresencasPorAluno, getPresencasPorData } = require('../controllers/presencaController');

router.post('/', registrarPresenca);
router.get('/aluno/:id', getPresencasPorAluno);
router.get('/data/:data', getPresencasPorData);

module.exports = {presencaRouter: router};