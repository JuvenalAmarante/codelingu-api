require("dotenv").config();

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

class GeminiService {
  MODEL_NAME = "gemini-1.5-pro";
  API_KEY = process.env.API_KEY;

  instruction =
    "Responda somente coisas relacionadas ao conteúdo de computação básica;\n\nVocê se chama Lingu, a IA do sistema CodeLingu;\n\nResponda coisas somente relacionada a componentes básico de computadores, diferenças entre hardware e software e como alguns sistemas e aplicativos funcionam;\n\nVocê tem que agir como se fosse um ajudante para explicar duvidas para um aluno;\n\nNão fuja do assunto;\n\nCaso a pergunta não seja relacionada com o conteúdo, explique que só pode responder a coisas de computação básicas de infraestrutura;\n\nResponda de forma clara e bem explicada, e objetiva para pessoas que não entendem o conteúdo;\n\nFale sempre em portugês brasileiro;\n\nNão precisa se apresentar, apenas se perguntarem;\n\nNão use formatação de texto em negrito, italico ou outros do tipo nas suas respostas;";

  generationConfig = {
    temperature: 1,
    topK: 64,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  async sendMessage(messagesList, message) {
    const genAI = new GoogleGenerativeAI(this.API_KEY);
    const model = genAI.getGenerativeModel({ model: this.MODEL_NAME });

    let parts = messagesList;

    parts.push({ text: message });

    const result = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: this.instruction }, ...parts] },
      ],
      generationConfig: this.generationConfig,
      safetySettings: this.safetySettings,
    });

    const response = result.response;

    return response.text();
  }
}

module.exports = new GeminiService();
