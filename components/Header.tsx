
import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { NAV_LINKS } from '../constants';
import type { AppContextType } from '../types';

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);
const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 00-9-9m-9 9a9 9 0 019-9" /></svg>
);


const Header = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { theme, language, toggleTheme, toggleLanguage } = context as AppContextType;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navHeight = isScrolled ? 'h-16' : 'h-20';
    const navBg = isScrolled ? 'bg-white/90 dark:bg-secondary/90 backdrop-blur-sm' : 'bg-transparent';
    const logoSize = isScrolled ? 'text-2xl' : 'text-3xl';
    
    const textData = {
        logo: { ar: "الرمال الذهبية", en: "Golden Sands" },
        cta: { ar: "اطلب عرض سعر الآن", en: "Request a Quote Now" }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navHeight} ${navBg} shadow-md`}>
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
                <Link to="/" className={`font-extrabold text-primary dark:text-primary-dark transition-all duration-300 ${logoSize}`}>
                    {textData.logo[language]}
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map(link => (
                        <NavLink 
                          key={link.path} 
                          to={link.path}
                          className={({ isActive }) => 
                            `text-sm font-bold transition-colors hover:text-primary dark:hover:text-primary-dark ${isActive ? 'text-primary dark:text-primary-dark' : 'text-secondary dark:text-gray-200'}`
                          }
                        >
                            {link.label[language]}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-secondary-light transition-colors">
                        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                    </button>
                    <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-secondary-light transition-colors">
                        <GlobeIcon />
                    </button>
                    <a href="#/contact" className="hidden sm:block bg-primary dark:bg-primary-dark text-white font-bold py-2 px-5 rounded-full shadow-lg hover:opacity-90 transition-opacity">
                        {textData.cta[language]}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
