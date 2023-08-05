const AppError = require('../utils/AppError');
const { hash } = require('bcryptjs');

class UserCreateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, email, password }) {
    email = email.toLowerCase();

    const regexEmail = new RegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$');

    if (!regexEmail.test(email)) {
      throw new AppError('Please enter a valid email.');
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError('E-mail already in use.');
    }

    const hashedPassword = await hash(password, 8);

    const userCreated_id = await this.usersRepository.create({ name, email, password: hashedPassword });

    return userCreated_id;
  }
}

module.exports = UserCreateService;