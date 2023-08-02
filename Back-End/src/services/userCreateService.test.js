const UserCreateService = require('./UserCreateService');
const UsersRepositoryInMemory = require('../repositories/UsersRepositoryInMemory');

it("User should be created.", async () => {
  const user = {
    name: "User Test",
    email: "user@test.com",
    password: "123"
  }

  const usersRepositoryInMemory = new UsersRepositoryInMemory();
  const userCreateService = new UserCreateService(usersRepositoryInMemory);
  const userCreated = await userCreateService.execute(user);

  expect(userCreated).toHaveProperty("id");
});