import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../data';

// Safely retrieve API key to prevent crashes if process is undefined
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
  } catch (error) {
    return '';
  }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' }); // Fallback to avoid init error, though calls will fail if key is invalid

export const getProductRecommendation = async (query: string): Promise<string[]> => {
  if (!apiKey) {
    console.warn("API_KEY not found. Returning empty recommendations.");
    return [];
  }

  const productList = PRODUCTS.map(p => ({ id: p.id, title: p.title, category: p.category, desc: p.shortDescription }));
  const prompt = `
    You are a shopping assistant for "ZenithFinds".
    User Query: "${query}"
    Available Products (JSON): ${JSON.stringify(productList)}
    
    Task: Return a JSON array of string IDs (e.g. ["p1", "p3"]) of the products that best match the query. 
    If no products match well, return an empty array [].
    Do not explain. Just return the JSON array.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });
    
    const text = response.text;
    if (!text) return [];
    
    const ids = JSON.parse(text);
    return Array.isArray(ids) ? ids : [];
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [];
  }
};