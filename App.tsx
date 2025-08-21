
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NotificationDrawer from './components/NotificationDrawer';
import WhatsAppWidget from './components/WhatsAppWidget';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Maintenance from './pages/Maintenance';
import Projects from './pages/Projects';
import Safety from './pages/Safety';
import Contact from './pages/Contact';

import { AppContext } from './contexts/AppContext';
import type { Language, Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('ar');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === 'ar' ? 'en' : 'ar'));
  }, []);
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const contextValue = useMemo(() => ({
    theme,
    language,
    toggleTheme,
    toggleLanguage,
  }), [theme, language, toggleTheme, toggleLanguage]);


  return (
    <AppContext.Provider value={contextValue}>
      <HashRouter>
        <div className={`bg-white dark:bg-secondary text-secondary dark:text-gray-200 min-h-screen flex flex-col`}>
          <Header />
          <NotificationDrawer />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <WhatsAppWidget />
          <Footer />
        </div>
      </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
