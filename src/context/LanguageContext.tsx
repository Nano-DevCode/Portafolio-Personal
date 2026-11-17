import React, { useEffect, useState } from 'react';
import { LanguageContext, type Language } from './language-context';
import { translations } from '../i18n/translations';

const STORAGE_KEY = 'portfolio-lang';

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'es' || saved === 'en') {
    return saved;
  }

  const browserLanguages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language || 'es'];

  const primaryLang = browserLanguages[0]?.toLowerCase() || 'es';
  return primaryLang.startsWith('es') ? 'es' : 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(detectInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
