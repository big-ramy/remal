
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { SOLUTIONS_DATA } from '../constants';
import type { AppContextType } from '../types';
import { Link } from 'react-router-dom';

const Solutions = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context as AppContextType;

    const textData = {
        title: { ar: "حلولنا المتكاملة للمصاعد", en: "Our Integrated Elevator Solutions" },
        subtitle: { ar: "نقدم مجموعة واسعة من المصاعد والسلالم المتحركة التي تناسب جميع الاحتياجات والمشاريع، من الفلل السكنية إلى أضخم الأبراج التجارية.", en: "We offer a wide range of elevators and escalators to suit all needs and projects, from residential villas to the largest commercial towers." },
        cta: { ar: "اعرف المزيد", en: "Learn More" }
    };
    
    return (
        <div className="py-16 bg-gray-50 dark:bg-secondary-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-secondary dark:text-white mb-4">{textData.title[language]}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">{textData.subtitle[language]}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SOLUTIONS_DATA.map((solution) => (
                        <div key={solution.id} className="bg-white dark:bg-secondary rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={solution.image} alt={solution.title[language]} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-secondary dark:text-white">{solution.title[language]}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-hidden">{solution.description[language]}</p>
                                <Link to="/contact" className="inline-block bg-primary dark:bg-primary-dark text-white font-bold py-2 px-5 rounded-full shadow-md hover:opacity-90 transition-opacity">
                                    {textData.cta[language]}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solutions;
