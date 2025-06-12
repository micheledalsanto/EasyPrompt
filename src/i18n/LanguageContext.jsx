import React, { createContext, useState, useEffect } from "react";
import it from "./it";
import en from "./en";

export const LanguageContext = createContext();

const translations = {
  it,
  en,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("it");

  const dictionary = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}
