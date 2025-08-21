
import React, { useState, useContext, useMemo } from 'react';
import { AppContext } from '../contexts/AppContext';
import type { AppContextType } from '../types';
import { Link } from 'react-router-dom';

const BuildingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const StoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const HospitalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5a2 2 0 002 2h4a2 2 0 002-2v0m-6 8h4m-2-2v4" /></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;

const LuxuryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293c.39.39.39 1.024 0 1.414L10 16l-4 4-4-4 6.293-6.293c.39-.39 1.024-.39 1.414 0L15 11zM5 21v-4m-2 2h4" /></svg>;
const SpeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const CapacityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const EconomyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1.667a1.667 1.667 0 01.958-1.518l1.306-.771a1.667 1.667 0 000-2.828L12.042 1.5a1.667 1.667 0 00-1.917 0l-1.306.771a1.667 1.667 0 000 2.828l1.306.771A1.667 1.667 0 0112 4.333V6m0 12v-1.667a1.667 1.667 0 00-.958-1.518l-1.306-.771a1.667 1.667 0 010-2.828l1.306-.771a1.667 1.667 0 011.917 0l1.306.771a1.667 1.667 0 010 2.828l-1.306.771A1.667 1.667 0 0012 17.667V18" /></svg>;

const HeroSection = ({ language }: { language: 'ar' | 'en' }) => {
    const textData = {
        title: { ar: "الرمال الذهبية: نرسم الأفق... ونصعد بك إلى المستقبل.", en: "Golden Sands: We shape the skyline... and ascend you to the future." },
        subtitle: { ar: "نقدم حلول مصاعد مبتكرة تجمع بين الفخامة، الأمان، وأحدث التقنيات لجميع أنواع المشاريع.", en: "We provide innovative elevator solutions that combine luxury, safety, and the latest technology for all types of projects." },
        cta: { ar: "اكتشف حلولنا", en: "Discover Our Solutions" }
    };
    return (
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">{textData.title[language]}</h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-up">{textData.subtitle[language]}</p>
                <Link to="/solutions" className="bg-primary dark:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                    {textData.cta[language]}
                </Link>
            </div>
        </section>
    );
};


const SolutionFinder = ({ language }: { language: 'ar' | 'en' }) => {
    const [buildingType, setBuildingType] = useState<string | null>(null);
    const [floors, setFloors] = useState<number>(10);
    const [priority, setPriority] = useState<string | null>(null);

    const result = useMemo(() => {
        if (!buildingType || !priority) return null;
        if (priority === 'الفخامة' || buildingType === 'تجاري') return { ar: "الحل الأمثل لك هو مصعد بانورامي فاخر. يضيف قيمة جمالية لمشروعك!", en: "The optimal solution for you is a luxury panoramic elevator. It adds aesthetic value to your project!" };
        if (priority === 'السرعة' && floors > 20) return { ar: "الحل الأمثل لك هو مصعد ركاب عالي السرعة. مثالي للمباني الشاهقة.", en: "The optimal solution for you is a high-speed passenger elevator. Ideal for tall buildings." };
        if (priority === 'الحمولة') return { ar: "الحل الأمثل لك هو مصعد بضائع متين. لنقل الأحمال الثقيلة بكفاءة.", en: "The optimal solution for you is a durable goods elevator. For efficient heavy load transport." };
        if (buildingType === 'فيلا') return { ar: "الحل الأمثل لك هو مصعد منزلي أنيق. يجمع بين الراحة والتصميم المدمج.", en: "The optimal solution for you is an elegant home elevator. Combining comfort and compact design." };
        return { ar: "الحل الأمثل لك هو مصعد ركاب اقتصادي. يوازن بين الأداء والتكلفة.", en: "The optimal solution for you is an economical passenger elevator. Balancing performance and cost." };
    }, [buildingType, floors, priority]);

    const textData = {
        title: { ar: "ابحث عن الحل الأمثل لمشروعك", en: "Find the Perfect Solution for Your Project" },
        step1: { ar: "١. نوع المبنى؟", en: "1. Building Type?" },
        step2: { ar: "٢. عدد الطوابق التقريبي؟", en: "2. Approximate Number of Floors?" },
        step3: { ar: "٣. أهم أولوياتك؟", en: "3. Your Top Priority?" },
        resultTitle: { ar: "توصيتنا لك:", en: "Our Recommendation for You:" },
        discoverMore: { ar: "اكتشف المزيد...", en: "Discover More..." },
        buildingTypes: {
            سكني: { ar: "سكني", en: "Residential", icon: <BuildingIcon /> },
            تجاري: { ar: "تجاري", en: "Commercial", icon: <StoreIcon /> },
            مستشفى: { ar: "مستشفى", en: "Hospital", icon: <HospitalIcon /> },
            فيلا: { ar: "فيلا", en: "Villa", icon: <HomeIcon /> },
        },
        priorities: {
            الفخامة: { ar: "الفخامة", en: "Luxury", icon: <LuxuryIcon /> },
            السرعة: { ar: "السرعة", en: "Speed", icon: <SpeedIcon /> },
            الحمولة: { ar: "الحمولة", en: "Capacity", icon: <CapacityIcon /> },
            الاقتصادية: { ar: "الاقتصادية", en: "Economy", icon: <EconomyIcon /> },
        },
    };

    const OptionButton = ({ label, selected, onClick, icon }: { label: string, selected: boolean, onClick: () => void, icon: React.ReactNode }) => (
        <button onClick={onClick} className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition-all duration-300 w-32 h-32 text-center ${selected ? 'border-primary dark:border-primary-dark bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark' : 'border-gray-300 dark:border-gray-600 hover:border-primary/50 dark:hover:border-primary-dark/50'}`}>
            {icon}
            <span className="mt-2 font-semibold text-sm">{label}</span>
        </button>
    );

    return (
        <section className="py-20 bg-gray-50 dark:bg-secondary-light">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">{textData.title[language]}</h2>
                
                {/* Step 1 */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">{textData.step1[language]}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {Object.entries(textData.buildingTypes).map(([key, value]) => (
                            <OptionButton key={key} label={value[language]} selected={buildingType === key} onClick={() => setBuildingType(key)} icon={value.icon} />
                        ))}
                    </div>
                </div>

                {/* Step 2 */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">{textData.step2[language]} {floors}</h3>
                    <div className="max-w-xl mx-auto" dir="ltr">
                         <input type="range" min="2" max="50" value={floors} onChange={(e) => setFloors(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" style={{ accentColor: '#c0a062' }} />
                    </div>
                </div>
                
                {/* Step 3 */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-6">{textData.step3[language]}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {Object.entries(textData.priorities).map(([key, value]) => (
                            <OptionButton key={key} label={value[language]} selected={priority === key} onClick={() => setPriority(key)} icon={value.icon} />
                        ))}
                    </div>
                </div>

                {/* Result */}
                {result && (
                    <div className="mt-12 p-8 bg-white dark:bg-secondary rounded-lg shadow-xl max-w-2xl mx-auto animate-fade-in">
                        <h4 className="text-2xl font-bold mb-4">{textData.resultTitle[language]}</h4>
                        <p className="text-lg mb-6">{result[language]}</p>
                        <Link to="/solutions" className="font-bold text-primary dark:text-primary-dark hover:underline">
                            {textData.discoverMore[language]}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

const Home = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context as AppContextType;

    return (
        <div>
            <HeroSection language={language} />
            <SolutionFinder language={language} />
        </div>
    );
};

export default Home;
