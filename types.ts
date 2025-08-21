
import type { ReactNode } from 'react';

export type Theme = 'light' | 'dark';
export type Language = 'ar' | 'en';

export interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

export interface NavLink {
  path: string;
  label: Record<Language, string>;
}

export interface ChatMessage {
    id: number;
    sender: 'user' | 'bot' | 'system';
    text: string;
    isTyping?: boolean;
}

export interface Project {
  id: number;
  title: Record<Language, string>;
  category: 'Commercial' | 'Residential' | 'Hospitals';
  image: string;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
}

export interface Solution {
    id: number;
    title: Record<Language, string>;
    image: string;
    description: Record<Language, string>;
}
