const UserRepository = require("../repositories/UserRepository");

class AuthController {
  async login(request, response) {
    try {
      const { email, password } = request.body;

    
      const user = await UserRepository.findByEmail(email);
      if (!user) {
        return response.status(400).send({ error: "Invalid email or password" });
      }

   
      if (user.password !== password) {
        return response.status(400).send({ error: "Invalid email or password" });
      }

     
      return response.send({ message: "Login successful", user });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

module.exports = new AuthController();
