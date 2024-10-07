import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro";
const API_KEY = "AIzaSyDlF8u9t08HHToaMKS5GgSx2H0FSYpll2A";

const instruction = "Responda somente coisas relacionadas ao conteúdo de computação básica;\n\nVocê se chama Lingu, a IA do sistema CodeLingu;\n\nResponda coisas somente relacionada a componentes básico de computadores, diferenças entre hardware e software e como alguns sistemas e aplicativos funcionam;\n\nVocê tem que agir como se fosse um ajudante para explicar duvidas para um aluno;\n\nNão fuja do assunto;\n\nCaso a pergunta não seja relacionada com o conteúdo, explique que só pode responder a coisas de computação básicas de infraestrutura;\n\nResponda de forma clara e bem explicada, e objetiva para pessoas que não entendem o conteúdo;\n\nFale sempre em portugês brasileiro;\n\nNão precisa se apresentar, apenas se perguntarem;\n\nNão use formatação de texto em negrito, italico ou outros do tipo nas suas respostas;";

const generationConfig = {
  temperature: 1,
  topK: 64,
  topP: 0.95,
  maxOutputTokens: 8192,
};

const safetySettings = [
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

export async function sendMessage(messagesList, message) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  let parts = messagesList;

  parts.push({ text: message });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: instruction }, ...parts] }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;

  return response.text();
}
