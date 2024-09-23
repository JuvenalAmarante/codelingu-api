const MessagesRepository = require("../repositories/MessagesRepository");
const GeminiService = require("../services/GeminiService");

class MessageController {
  async index(request, response) {
    // Listar todos os registros
    const messages = await MessagesRepository.findAll();

    response.send(messages);
  }

  async show(request, response) {
    // Obter um registro
    const { id } = request.params;

    const contact = await MessagesRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).send({ error: "Message not found" });
    }

    response.send(contact);
  }

  async sendBotMessage(request, response) {
    try {
      const { message } = request.body;

      const geminiMessage = await GeminiService.sendMessage([], message);

      return response.send({
        message: geminiMessage,
      });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }

  store() {
    // Criar novo registro
  }
}

// Singleton
module.exports = new MessageController();
