const MessagesRepository = require("../repositories/MessagesRepository");
const GeminiService = require("../services/GeminiService");

class MessageController {
  async index(request, response) {
   
    const messages = await MessagesRepository.findAll();
    response.send(messages);
  }

  async show(request, response) {
    
    const { id } = request.params;
    const message = await MessagesRepository.findById(id);

    if (!message) {
      return response.status(404).send({ error: "Message not found" });
    }

    response.send(message);
  }

  async sendBotMessage(request, response) {
    try {
      const { user, message } = request.body;

     
      const userMessage = await MessagesRepository.store({ user, message });

      
      const geminiResponse = await GeminiService.sendMessage([], message);

      
      const botMessage = await MessagesRepository.store({
        user: 'Bot',
        message: geminiResponse,
      });

      
      return response.send({
        userMessage,
        botMessage,
      });
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }

  async store(request, response) {
    try {
      const { user, message } = request.body;
      
      
      const newMessage = await MessagesRepository.store({ user, message });
      response.status(201).send(newMessage);
    } catch (error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

module.exports = new MessageController();
