const { v4 } = require('uuid');

const messages = [
  {
    id: v4(),
    user: 'Irineu Campos',
    message: 'Apu',
  },
  {
    id: v4(),
    user: 'José',
    message: 'Aba ba',
  },
];

class MessagesRepository {
  findAll() {
    return new Promise((resolve) => resolve(messages));
  }

  findById(id) {
    return new Promise((resolve) =>
      resolve(messages.find((contact) => contact.id === id)),
    );
  }
}

module.exports = new MessagesRepository();
