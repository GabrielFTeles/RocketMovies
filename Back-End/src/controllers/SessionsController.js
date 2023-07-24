const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');

class SessionsRoutes {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      throw new AppError('E-mail or password is not valid.', 401);
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new AppError('E-mail or password is not valid.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });

    return response.json({ user, token });
  }
}

module.exports = SessionsRoutes;