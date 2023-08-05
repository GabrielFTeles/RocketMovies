const AppError = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');

class UserUpdateService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id, name, email, password, old_password }) {
    email = email.toLowerCase();
    
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exist.');
    }

    const regexEmail = new RegExp('^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$');

    if (!regexEmail.test(email)) {
      throw new AppError('Please enter a valid email.');
    }

    const ownerOfEmail = await this.usersRepository.findByEmail(email);

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

    const userUpdated_id = await this.usersRepository.update({ user });

    return userUpdated_id;
  }
}

module.exports = UserUpdateService;