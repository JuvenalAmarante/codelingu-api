const UserRepository = require("../repositories/UserRepository");

class UserController {
  async index(request, response) {
   
    const users = await UserRepository.findAll();
    response.send(users);
  }

  async show(request, response) {
  
    const { id } = request.params;
    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).send({ error: "User not found" });
    }

    response.send(user);
  }

  async store(request, response) {
    try {
      const { name, email } = request.body;

      if (!name || !email) {
        return response.status(400).send({ error: "Name and email are required" });
      }

     
      const newUser = await UserRepository.store({ name, email });
      response.status(201).send(newUser);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email } = request.body;

    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).send({ error: "User not found" });
    }

   
    const updatedUser = await UserRepository.update(id, { name, email });
    response.send(updatedUser);
  }

  async delete(request, response) {
    const { id } = request.params;

    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).send({ error: "User not found" });
    }

 
    await UserRepository.delete(id);
    response.status(204).send();
  }
}

module.exports = new UserController();
