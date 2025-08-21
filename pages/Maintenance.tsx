
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import type { AppContextType } from '../types';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const Maintenance = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context as AppContextType;

    const textData = {
        title: { ar: "الصيانة والتحديث", en: "Maintenance & Modernization" },
        subtitle: { ar: "نضمن استمرارية عمل مصاعدكم بأعلى مستويات الأداء والأمان.", en: "We ensure your elevators continue to operate at the highest levels of performance and safety." },
        maintenanceTitle: { ar: "عقود صيانة وقائية", en: "Preventive Maintenance Contracts" },
        maintenanceDesc: { ar: "نقدم خطط صيانة مرنة ومصممة خصيصاً لتناسب احتياجاتكم، لضمان الكشف المبكر عن الأعطال وتقليل فترات التوقف.", en: "We offer flexible and customized maintenance plans to suit your needs, ensuring early fault detection and minimizing downtime." },
        maintenancePoints: [
            { ar: "فحص دوري شامل لجميع مكونات المصعد.", en: "Comprehensive periodic inspection of all elevator components." },
            { ar: "استجابة سريعة لطلبات الطوارئ على مدار 24/7.", en: "Fast response to emergency calls 24/7." },
            { ar: "فريق فني متخصص ومؤهل.", en: "Specialized and qualified technical team." },
            { ar: "استخدام قطع غيار أصلية ومضمونة.", en: "Use of original and guaranteed spare parts." },
        ],
        modernizationTitle: { ar: "حلول التحديث والتطوير", en: "Modernization and Upgrade Solutions" },
        modernizationDesc: { ar: "هل مصعدك قديم؟ يمكننا تحديثه بأحدث التقنيات لرفع مستوى الأمان، تحسين الكفاءة، وإعطائه مظهراً عصرياً.", en: "Is your elevator old? We can upgrade it with the latest technology to increase safety, improve efficiency, and give it a modern look." },
        modernizationPoints: [
            { ar: "تحديث أنظمة التحكم ولوحات التشغيل.", en: "Updating control systems and operating panels." },
            { ar: "تجديد تصميم الكابينة الداخلي.", en: "Renovating the interior cabin design." },
            { ar: "تركيب أنظمة توفير الطاقة.", en: "Installing energy-saving systems." },
            { ar: "إضافة ميزات أمان متطورة.", en: "Adding advanced safety features." },
        ],
        cta: { ar: "اطلب استشارة مجانية", en: "Request a Free Consultation" }
    };
    
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-secondary dark:text-white mb-4">{textData.title[language]}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">{textData.subtitle[language]}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Maintenance Section */}
                    <div className="bg-gray-50 dark:bg-secondary-light p-8 rounded-lg shadow-lg">
                        <img src="https://picsum.photos/seed/maintenance/800/500" alt="Maintenance" className="rounded-lg mb-6 w-full object-cover h-64" />
                        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary-dark">{textData.maintenanceTitle[language]}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{textData.maintenanceDesc[language]}</p>
                        <ul className="space-y-4">
                            {textData.maintenancePoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="ltr:ml-3 rtl:mr-3">{point[language]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Modernization Section */}
                    <div className="bg-gray-50 dark:bg-secondary-light p-8 rounded-lg shadow-lg">
                        <img src="https://picsum.photos/seed/modernization/800/500" alt="Modernization" className="rounded-lg mb-6 w-full object-cover h-64" />
                        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-primary-dark">{textData.modernizationTitle[language]}</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{textData.modernizationDesc[language]}</p>
                         <ul className="space-y-4">
                            {textData.modernizationPoints.map((point, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon />
                                    <span className="ltr:ml-3 rtl:mr-3">{point[language]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Link to="/contact" className="bg-primary dark:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                        {textData.cta[language]}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
