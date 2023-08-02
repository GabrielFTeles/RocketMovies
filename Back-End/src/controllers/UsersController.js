const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');
const UsersRepository = require('../repositories/UsersRepository');
const UserCreateService = require('../services/UserCreateService');

const regexEmail = new RegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$');
class UsersController {
  async create(request, response) {
    let { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const userCreateService = new UserCreateService(usersRepository);

    await userCreateService.execute({ name, email, password });
    
    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const user = await knex('users').where({ id: user_id }).first();

    if (!user) {
      throw new AppError('User does not exist.');
    }

    if (!regexEmail.test(email)) {
      throw new AppError('Please enter a valid email.');
    }

    const ownerOfEmail = await knex('users').where({ email }).first();

    if (ownerOfEmail && ownerOfEmail.id !== user.id) {
      throw new AppError('This e-mail is already in use.')
    }

    if (password && !old_password) {
      throw new AppError('Need to inform the old password to update the user.');
    }

    if(password && old_password) {
      const isOldPasswordCorrect = await compare(old_password, user.password);

      if (!isOldPasswordCorrect) {
        throw new AppError('Old password is incorrect.');
      }

      user.password = await hash(password, 8);
    }
    
    user.name = name || user.name;
    user.email = email || user.email;

    await knex('users')
      .where({ id: user.id })
      .update({
        name: user.name,
        email: user.email,
        password: user.password,
      });

    return response.json();
  }
}

module.exports = UsersController;