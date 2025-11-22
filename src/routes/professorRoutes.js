const express = require('express');
const router = express.Router();
const { getAllProfessores } = require('../controllers/professorController');

router.get('/', getAllProfessores);

module.exports = {professorRouter: router};