const knex = require('../database/knex');
const AppError = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');

const regexEmail = new RegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$');
class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    if (!regexEmail.test(email)) {
      throw new AppError('Please enter a valid email.');
    }

    const emailAlreadyExists = await knex('users')
      .where({ email }).first();

    if (emailAlreadyExists) {
      throw new AppError('E-mail already in use.');
    }

    const hashedPassword = await hash(password, 8);

    await knex('users').insert({
      name, 
      email, 
      password: hashedPassword,
    });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { user_id } = request.params;

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