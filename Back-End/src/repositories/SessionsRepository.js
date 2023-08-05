const knex = require('../database/knex');

class SessionsRepository {
  async findByEmail(email) {
    const [user] = await knex('users').where({ email });

    return user;
  }
}

module.exports = SessionsRepository;