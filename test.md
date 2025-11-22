Com base no **`README.md`** e na estrutura do projeto, a API tem **três funcionalidades principais**, todas testáveis via **Postman** ou **Insomnia** (sem frontend).  

Aqui está um guia completo para **testar cada funcionalidade**:

---

## ✅ Funcionalidades da API

### 1. **Cadastrar alunos**
- **Rota**: `POST /api/alunos`
- **Corpo da requisição (JSON)**:
  ```json
  {
    "nome": "João Silva",
    "matricula": "2025001"
  }
  ```
- **Resposta esperada (201 Created)**:
  ```json
  {
    "id": 1,
    "nome": "João Silva",
    "matricula": "2025001"
  }
  ```

> ❗ `nome` e `matricula` são obrigatórios.  
> ❗ `matricula` deve ser única.

---

### 2. **Registrar presenças por data**
- **Rota**: `POST /api/presencas`
- **Corpo da requisição (JSON)**:
  ```json
  {
    "aluno_id": 1,
    "data": "2025-11-22"
  }
  ```
- **Resposta esperada (201 Created)**:
  ```json
  {
    "id": 1,
    "aluno_id": 1,
    "data": "2025-11-22"
  }
  ```

> ❗ `aluno_id` deve existir na tabela `alunos`.  
> ❗ Não é possível registrar **duas presenças no mesmo dia para o mesmo aluno** (único por `aluno_id + data`).

---

### 3. **Consultar presenças**

#### a) Por aluno
- **Rota**: `GET /api/presencas/aluno/:id`
- **Exemplo**: `GET /api/presencas/aluno/1`
- **Resposta esperada (200 OK)**:
  ```json
  [
    {
      "id": 1,
      "aluno_id": 1,
      "data": "2025-11-22",
      "aluno_nome": "João Silva"
    }
  ]
  ```

#### b) Por data
- **Rota**: `GET /api/presencas/data/:data`
- **Exemplo**: `GET /api/presencas/data/2025-11-22`
- **Resposta esperada (200 OK)**:
  ```json
  [
    {
      "id": 1,
      "aluno_id": 1,
      "data": "2025-11-22",
      "aluno_nome": "João Silva",
      "matricula": "2025001"
    }
  ]
  ```

---

## 🔧 Como testar passo a passo

1. **Inicie o servidor**:
   ```bash
   npm run dev
   ```
   → Deve mostrar: `Servidor rodando na porta 3000`

2. **Abra o Postman ou Insomnia**

3. **Teste na ordem abaixo**:

   ### 🔹 Etapa 1: Cadastre um aluno
   - Método: `POST`
   - URL: `http://localhost:3000/api/alunos`
   - Body: JSON com `nome` e `matricula`

   ### 🔹 Etapa 2: Registre uma presença
   - Método: `POST`
   - URL: `http://localhost:3000/api/presencas`
   - Body: JSON com `aluno_id` (use o `id` retornado na etapa 1) e `data` no formato `YYYY-MM-DD`

   ### 🔹 Etapa 3: Consulte as presenças
   - `GET http://localhost:3000/api/presencas/aluno/1`
   - `GET http://localhost:3000/api/presencas/data/2025-11-22` (use a data que você registrou)

---

## 🛠️ Rotas extras (opcionais)

Embora **não sejam obrigatórias** pelo objetivo do projeto, o projeto inclui:

- `GET /api/alunos` → lista todos os alunos  
- `POST /api/auth/login` → autenticação de professor (com email e senha em texto claro)

---

## ✅ Resumo dos endpoints essenciais

| Método | Endpoint                         | Descrição                     |
|--------|----------------------------------|-------------------------------|
| POST   | `/api/alunos`                    | Cadastrar aluno               |
| POST   | `/api/presencas`                 | Registrar presença            |
| GET    | `/api/presencas/aluno/:id`       | Ver presenças de um aluno     |
| GET    | `/api/presencas/data/:data`      | Ver presenças em uma data     |

---

Se (MySQL rodando, banco criado, `.env` preenchido), irá funcionar.