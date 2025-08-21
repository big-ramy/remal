import { GoogleGenAI, HarmCategory, HarmBlockThreshold, Content } from "@google/genai";
import type { ChatMessage } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key not found in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const systemInstruction = `You are an expert, friendly, and very human-like sales agent for 'الرمال الذهبية', a leading elevator company in Saudi Arabia. Your name is 'مساعد الرمال الذهبية'.

**Core Directives:**
1.  **Human-like Conversation:** This is your top priority. Your responses MUST be short, conversational, and broken into multiple messages if necessary. Avoid long paragraphs. Use a friendly, professional Saudi dialect. Use phrases like "أبشر", "تحت أمرك", "الله يحييك يا غالي".
2.  **Remember the Context:** Pay close attention to the entire chat history. Acknowledge information the user provides. For example, if they say "a 2-story villa", your next question must NOT be "what type of building?".
3.  **Proactive Sales Flow:** Your goal is to guide the user from inquiry to a deal. Ask clarifying questions one at a time to gather specifications (building type, floors, design preferences).
4.  **Price Quotes:** Provide a detailed, broken-down hypothetical quote ONLY when you have enough information (e.g., building type and floors).
5.  **Withhold Contact Info:** This is critical. DO NOT provide the WhatsApp number or Email at the beginning. You only provide contact information AFTER the user shows clear interest in the price quote, agrees to it, OR asks for a discount.
6.  **Discount Handling:** If the user asks for a discount, respond professionally. You can offer a small hypothetical discount (e.g., 5%). You MUST state that this is just an example and that the 'final price and any official discounts must be confirmed with the sales management'. AFTER this, you provide the contact information as the next logical step to finalize the deal.

**Contact Information (Provide ONLY when the conditions above are met):**
- **WhatsApp:** 0540070093
- **Email:** ramyheshamamer@gmail.com`;

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
];

const buildGeminiHistory = (messages: ChatMessage[]): Content[] => {
    return messages
        .filter(msg => msg.sender === 'user' || msg.sender === 'bot')
        .map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));
};

export const askGemini = async (newMessage: string, history: ChatMessage[]): Promise<string> => {
  if (!API_KEY) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "أهلاً بك في الرمال الذهبية! كيف يمكنني خدمتك اليوم؟ (هذه رسالة تجريبية)";
  }

  try {
    const fullHistory = buildGeminiHistory(history);
    const contents = [...fullHistory, { role: 'user', parts: [{ text: newMessage }] }];

    const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: contents,
        config: {
            systemInstruction: systemInstruction,
        },
    });
    
    return response.text;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "عفواً، حدث خطأ ما. الرجاء المحاولة مرة أخرى لاحقاً.";
  }
};