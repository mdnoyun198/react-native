import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import React, { createContext, useContext, useState, ReactNode } from 'react';


type ThemeMode = 'light' | 'dark';

// ২. কনটেক্সটের ভ্যালুর জন্য ইন্টারফেস
interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

// ৩. চিলড্রেন প্রপসের জন্য ইন্টারফেস
interface CustomThemeProviderProps {
  children: ReactNode;
}

// ৪. কনটেক্সট তৈরি (ডিফল্ট ভ্যালু undefined রাখা হলো)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ৫. আমাদের র‍্যাপার প্রোভাইডার
export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <ThemeProvider value={themeMode === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// ৬. কাস্টম হুক (এরর হ্যান্ডেলিং সহ, যাতে প্রোভাইডারের বাইরে ইউজ করলে ওয়ার্নিং দেয়)
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a CustomThemeProvider');
  }
  return context;
};