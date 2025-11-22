const express = require("express");
require('dotenv').config();
const {alunoRouter} = require("./src/routes/alunoRoutes");
const {presencaRouter} = require ("./src/routes/presencaRoutes");
const {professorRouter} = require ("./src/routes/professorRoutes");
const {authRouter} = require ("./src/routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/alunos', alunoRouter);
app.use('/api/presencas', presencaRouter);
app.use('/api/professores', professorRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
  res.json({ message: 'API PresenSys (MySQL) está funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});