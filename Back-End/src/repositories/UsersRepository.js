const knex = require('../database/knex');

class UsersRepository {
  async findByEmail(email) {
    const [user] = await knex('users')
      .where({ email });

    return user;
  }
  
  async findById(id) {
    const [user] = await knex('users').where({ id });

    return user;
  }

  async create({ name, email, password }) {
    const userId = await knex('users').insert({
      name, 
      email, 
      password,
    });

    return { id: userId };
  }

  async update({ user }) {
    const userId = await knex('users')
      .where({ id: user.id })
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
      });

    return { id: userId };
  }
}

module.exports = UsersRepository;