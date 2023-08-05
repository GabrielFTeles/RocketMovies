const knex = require('../database/knex');

class UserAvatarRepository {
  async getUserById(id) {
    const [user] = await knex('users')
      .where({ id });

    return user;
  }

  async update(user, id) {
    const userUpdated = await knex('users')
      .where({ id })
      .update(user);

    return userUpdated;
  }
}

module.exports = UserAvatarRepository;