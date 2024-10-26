const jwt = require('jsonwebtoken');
const { connect } = require('../config/db');

class UsersRepository {
  async login(email, senha) {
    try {
      const db = await connect();

      const result = await db.query(
        `
          SELECT
            id,
            nome,
            email
          FROM usuarios
          WHERE email = $1::text
            AND senha = $2::text
        `,
        [email, senha],
      );

      if (!result.rows.length) {
        return { error: 400, message: 'Usuário não encontrado' };
      }
      const userData = result.rows[0];

      const token = jwt.sign({ id: userData.id }, process.env.SECRET);

      return { ...userData, token };
    } catch (err) {
      console.log(err);
      return { error: 500, message: 'Ocorreu um erro interno' };
    }
  }
}

module.exports = new UsersRepository();
