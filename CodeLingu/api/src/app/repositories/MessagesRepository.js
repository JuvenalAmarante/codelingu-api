const { v4 } = require('message');

let messages = [
  {
    id: v4(),
    user: 'Juvenal',
    message: 'Olá tudo bem?',
  },
  {
    id: v4(),
    user: 'Robério',
    message: 'Não entendi',
  },
];

class MessagesRepository {
  findAll() {
    return new Promise((resolve) => resolve(messages));
  }

  findById(id) {
    return new Promise((resolve) => resolve(messages.find((message) => message.id === id)));
  }

  store({ user, message }) {
    return new Promise((resolve) => {
      const newMessage = { id: v4(), user, message };
      messages.push(newMessage);
      resolve(newMessage);
    });
  }
}

module.exports = new MessagesRepository();
