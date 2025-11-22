// Middleware simples de autenticação "fake"
// Como não estamos gerando tokens, este middleware será **opcional** ou usado apenas se quiser proteger rotas depois.
// Por enquanto, vamos simular uma verificação básica (você pode adaptar para JWT no futuro).

const authMiddleware = (req, res, next) => {
  // Se não há autenticação real (sem token), podemos **ignorar por enquanto**
  // OU exigir um header de exemplo:
  const authHeader = req.headers['authorization'];
  if (authHeader === 'Bearer presensys123') {
    return next(); // acesso permitido
  }
  // Para este projeto, como não há frontend e é só teste, podemos **não usar autenticação nas rotas principais**
  // Mas se quiser ativar:
  // return res.status(401).json({ error: 'Acesso não autorizado' });

  // Por enquanto, deixamos passar (middleware inativo)
  next();
};

module.exports = authMiddleware;