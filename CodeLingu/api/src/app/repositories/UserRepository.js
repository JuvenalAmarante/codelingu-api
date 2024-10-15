const { v4 } = require('login');

let users = [
  {
    id: v4(),
    name: "Juvenal",
    email: "Juvenal@gmail.com",
    password: "1234567",
  },

  {
    id: v4(),
    name: "João Silva",
    email: "joao@gmail.com",
    password: "123456",
  },

  {
    id: v4(),
    name: "Maria Paula",
    email: "mariPaula@gmail.com",
    password: "senha123", 
  },

  {
    id: v4(),
    name: "Maria Souza",
    email: "maria@gmail.com",
    password: "123456789",
  },

  
];

class UserRepository {
    findByEmail(email) {
      return new Promise((resolve) =>
        resolve(users.find((user) => user.email === email))
      );
    }
  }

class UserRepository {
  findAll() {
    return new Promise((resolve) => resolve(users));
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(users.find((user) => user.id === id))
    );
  }

  store({ name, email }) {
    return new Promise((resolve) => {
      const newUser = { id: v4(), name, email };
      users.push(newUser);
      resolve(newUser);
    });
  }

  update(id, { name, email }) {
    return new Promise((resolve) => {
      const index = users.findIndex((user) => user.id === id);
      if (index === -1) {
        return resolve(null);
      }
      users[index] = { id, name, email };
      resolve(users[index]);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      users = users.filter((user) => user.id !== id);
      resolve();
    });
  }
}

module.exports = new UserRepository();
