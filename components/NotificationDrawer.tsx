
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { NOTIFICATION_MESSAGES } from '../constants';
import type { AppContextType } from '../types';

const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary dark:text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);


const NotificationDrawer = () => {
    const context = useContext(AppContext);
    const [isVisible, setIsVisible] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const showInterval = setInterval(() => {
            setMessageIndex(Math.floor(Math.random() * NOTIFICATION_MESSAGES.length));
            setIsVisible(true);
            const hideTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 8000); // Display for 8 seconds

            // Cleanup timeout if component unmounts
            return () => clearTimeout(hideTimeout);
        }, 15000); // Show every 15 seconds

        // Cleanup interval on unmount
        return () => clearInterval(showInterval);
    }, []);

    if (!context) return null;
    const { language } = context as AppContextType;
    
    return (
        <div 
            className={`fixed top-16 left-0 right-0 z-40 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="bg-white/90 dark:bg-secondary/90 backdrop-blur-sm shadow-lg w-full">
                <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4">
                    <LightbulbIcon />
                    <p className="text-sm font-medium text-secondary dark:text-gray-200 text-center">
                        {NOTIFICATION_MESSAGES[messageIndex][language]}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotificationDrawer;
