const express = require('express');
const router = express.Router();
const { createProfessor, getAllProfessores } = require('../controllers/professorController');

router.post('/', createProfessor);
router.get('/', getAllProfessores);

module.exports = {professorRouter: router};