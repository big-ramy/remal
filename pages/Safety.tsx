
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import type { AppContextType } from '../types';

const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 22a12.02 12.02 0 009-1.056c.343-.344.662-.702.958-1.084A11.956 11.956 0 0121.618 9.984z" /></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;
const EmergencyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;

const Safety = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context as AppContextType;

    const textData = {
        title: { ar: "مركز الأمان: التزامنا لا يتزعزع", en: "Safety Hub: Our Unwavering Commitment" },
        subtitle: { ar: "سلامة الركاب هي حجر الزاوية في كل ما نقوم به. نحن نطبق أعلى المعايير العالمية لضمان رحلة آمنة وموثوقة في كل مرة.", en: "Passenger safety is the cornerstone of everything we do. We apply the highest international standards to ensure a safe and reliable journey every time." },
        features: {
            title: { ar: "ميزات الأمان المتقدمة", en: "Advanced Safety Features" },
            desc: { ar: "جميع مصاعدنا مجهزة بتقنيات متطورة لضمان أقصى درجات الحماية.", en: "All our elevators are equipped with advanced technologies to ensure maximum protection." },
            list: [
                { ar: "نظام هبوط تلقائي للطوارئ (ARD) عند انقطاع التيار.", en: "Automatic Rescue Device (ARD) for power outages." },
                { ar: "ستائر ضوئية بالأشعة تحت الحمراء لمنع إغلاق الباب على الركاب.", en: "Infrared light curtains to prevent doors from closing on passengers." },
                { ar: "نظام اتصال داخلي مباشر مع فريق الطوارئ.", en: "Direct intercom system with the emergency team." },
                { ar: "منظم سرعة متطور لمنع تجاوز السرعة المحددة.", en: "Advanced speed governor to prevent over-speeding." },
            ]
        },
        certifications: {
            title: { ar: "شهاداتنا واعتماداتنا", en: "Our Certifications" },
            desc: { ar: "نحن ملتزمون بالمعايير الدولية ونحمل شهادات مرموقة تثبت جودة وأمان منتجاتنا وخدماتنا.", en: "We are committed to international standards and hold prestigious certificates that prove the quality and safety of our products and services." },
            list: [
                { ar: "شهادة الجودة العالمية ISO 9001.", en: "ISO 9001 International Quality Certification." },
                { ar: "الامتثال للمواصفات الأوروبية EN 81-20/50.", en: "Compliance with European standards EN 81-20/50." },
                { ar: "اعتماد الدفاع المدني السعودي.", en: "Saudi Civil Defense accreditation." },
            ]
        },
        protocols: {
            title: { ar: "بروتوكولات الطوارئ", en: "Emergency Protocols" },
            desc: { ar: "فريقنا مدرب على أعلى مستوى للتعامل مع أي حالة طارئة بكفاءة وسرعة لضمان سلامة الجميع.", en: "Our team is highly trained to handle any emergency situation efficiently and quickly to ensure everyone's safety." },
            list: [
                { ar: "فريق استجابة سريع متاح على مدار الساعة.", en: "24/7 rapid response team." },
                { ar: "تدريب دوري على عمليات الإنقاذ والإخلاء.", en: "Regular training on rescue and evacuation procedures." },
                { ar: "تنسيق كامل مع خدمات الطوارئ المحلية.", en: "Full coordination with local emergency services." },
            ]
        }
    };
    
    const SafetyCard = ({ icon, title, desc, items }: { icon: React.ReactNode; title: string; desc: string; items: string[] }) => (
        <div className="bg-white dark:bg-secondary rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
            <div className="text-primary dark:text-primary-dark mb-4">{icon}</div>
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{desc}</p>
            <ul className="space-y-2 text-left rtl:text-right">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-green-500 font-bold ltr:mr-2 rtl:ml-2 mt-1">&#10003;</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="py-16 bg-gray-50 dark:bg-secondary-light">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-secondary dark:text-white mb-4">{textData.title[language]}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">{textData.subtitle[language]}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <SafetyCard 
                        icon={<ShieldIcon />}
                        title={textData.features.title[language]}
                        desc={textData.features.desc[language]}
                        items={textData.features.list.map(i => i[language])}
                    />
                     <SafetyCard 
                        icon={<CertificateIcon />}
                        title={textData.certifications.title[language]}
                        desc={textData.certifications.desc[language]}
                        items={textData.certifications.list.map(i => i[language])}
                    />
                     <SafetyCard 
                        icon={<EmergencyIcon />}
                        title={textData.protocols.title[language]}
                        desc={textData.protocols.desc[language]}
                        items={textData.protocols.list.map(i => i[language])}
                    />
                </div>
            </div>
        </div>
    );
};

export default Safety;
