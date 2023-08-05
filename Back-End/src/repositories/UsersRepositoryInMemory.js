class UsersRepositoryInMemory {
  users = [
    {
      id: 1001,
      name: "User Test",
      email: "update@test.com",
      password: "123"
    }
  ];

  async findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  async findById(id) {
    return this.users.find(user => user.id === id);
  }

  async create({ name, email, password }) {
    const user = {
      id: Math.floor(Math.random() * 1000) + 1,
      email,
      name,
      password
    }

    this.users.push(user);

    return user;
  }
}

module.exports = UsersRepositoryInMemory;