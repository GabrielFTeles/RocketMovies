const AppError = require('../utils/AppError');
const authConfig = require('../configs/auth');

const { sign } = require('jsonwebtoken');
const { compare } = require('bcryptjs');

class SessionsCreateService {
  constructor(sessionsRepository) {
    this.sessionsRepository = sessionsRepository;
  }

  async execute({ email, password }) {
    email = email.toLowerCase();

    const user = await this.sessionsRepository.findByEmail(email);

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

    return { user: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    }, token };
  }
}

module.exports = SessionsCreateService;