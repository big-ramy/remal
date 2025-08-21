
import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this project, we assume it's set.
  console.warn("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const companyInfo = `You are a helpful and friendly customer service agent for 'الرمال الذهبية', a leading elevator company in the Gulf region. Your goal is to answer user questions professionally and encourage them to request a quote. Company specialties include: panoramic, passenger, and goods elevators for luxury residential and commercial projects. Key selling points are safety, modern technology, and high-quality maintenance services. Always respond in a Gulf Arabic dialect. Keep your answers concise and friendly.`;

/**
 * Sends a user message to the Gemini API and gets a response.
 * @param message The user's message.
 * @param history The chat history (optional).
 * @returns The AI's response text.
 */
export const askGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    // Simulate a delay and return a mock response if API key is not available
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "أهلاً بك في الرمال الذهبية! كيف يمكنني خدمتك اليوم؟ (هذه رسالة تجريبية حيث أن مفتاح الواجهة البرمجية غير متوفر)";
  }

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ role: 'user', parts: [{ text: message }] }],
        config: {
            systemInstruction: companyInfo,
        },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "عفواً، حدث خطأ ما. الرجاء المحاولة مرة أخرى لاحقاً.";
  }
};
