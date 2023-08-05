const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class UserAvatarUpdateService {
  constructor(userAvatarRepository) {
    this.userAvatarRepository = userAvatarRepository;
  }

  async execute({ user_id, avatarFilename }) {
    const diskStorage = new DiskStorage();

    const user = await this.userAvatarRepository.getUserById(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can upload avatar", 401);
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);

    user.avatar = filename;

    await this.userAvatarRepository.update(user, user_id);

    return user;
  }
}

module.exports = UserAvatarUpdateService;