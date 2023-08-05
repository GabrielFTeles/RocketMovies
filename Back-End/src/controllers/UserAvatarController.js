const UserAvatarRepository = require('../repositories/UserAvatarRepository');
const UserAvatarUpdateService = require('../services/UserAvatarUpdateService');
class UserAvatarController {
  async update(request, response) {
    const user_id = request.user.id;
    const avatarFilename = request.file.filename;

    const userAvatarRepository = new UserAvatarRepository();
    const userAvatarUpdateService = new UserAvatarUpdateService(userAvatarRepository);

    const user = await userAvatarUpdateService.execute({ user_id, avatarFilename });

    return response.json(user);
  }
}

module.exports = UserAvatarController;