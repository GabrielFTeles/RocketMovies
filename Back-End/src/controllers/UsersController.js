const UsersRepository = require("../repositories/UsersRepository");
const UserCreateService = require("../services/UserCreateService");
const UserUpdateService = require("../services/UserUpdateService");
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

    const usersRepository = new UsersRepository();
    const userUpdateService = new UserUpdateService(usersRepository);

    await userUpdateService.execute({
      id: user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json();
  }
}

module.exports = UsersController;