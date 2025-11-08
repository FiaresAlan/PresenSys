Branch -> 40: Caio.

Branch -> 30: Lucas

Branch -> 20: João

Branch -> 10: Alan

--------------------------

### ESTRUTURA

src/
├── config/
│   └── db.js
├── controllers/
│   ├── alunoController.js
│   ├── professorController.js
│   ├── presencaController.js
│   └── authController.js
├── routes/
│   ├── alunoRoutes.js
│   ├── professorRoutes.js
│   ├── presencaRoutes.js
│   └── authRoutes.js
└── app.js

---------------------
# Objetivo do Projeto
Criar uma API REST para gerenciar alunos e presenças, permitindo:
cadastrar alunos,
registrar presenças por data,
consultar presenças por aluno ou por data.

Sem frontend — tudo testado via Postman ou Insomnia.

#  Tecnologias
Node.js
Express (para criar a API)
MySQL (banco de dados relacional)
mysql2 (biblioteca para conectar o Node ao MySQL)
dotenv (para guardar as credenciais do banco)
nodemon (para rodar o servidor com atualização automática)