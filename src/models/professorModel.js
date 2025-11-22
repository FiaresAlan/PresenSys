const db = require('../config/db');

const Professor = {
  findByEmail: async (email) => {
    const [rows] = await db.execute('SELECT * FROM professores WHERE email = ?', [email]);
    return rows[0];
  },
};

module.exports = Professor;