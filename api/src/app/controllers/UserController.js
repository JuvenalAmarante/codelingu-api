const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async login(request, response) {
    const { login, senha } = request.body;

    const result = await UsersRepository.login(login, senha);

    if (result.error) return response.status(result.error).send(result.message);

    return response.send(result);
  }
}

// Singleton
module.exports = new UserController();
