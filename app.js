import express from "express";
import dotenv from "dotenv";
import alunoRoutes from "./routes/alunoRoutes.js";
import presencaRoutes from "./routes/presencaRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/alunos", alunoRoutes);
app.use("/presencas", presencaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
