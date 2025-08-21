
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { NAV_LINKS } from '../constants';
import type { AppContextType } from '../types';

const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
        {children}
    </a>
);

const Footer = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { language } = context as AppContextType;

    const textData = {
        logo: { ar: "الرمال الذهبية", en: "Golden Sands" },
        about: { ar: "نحن نرسم الأفق ونصعد بك إلى المستقبل بحلول مصاعد مبتكرة وآمنة.", en: "We shape the skyline and ascend you to the future with innovative and safe elevator solutions." },
        quickLinks: { ar: "روابط سريعة", en: "Quick Links" },
        solutions: { ar: "حلولنا", en: "Our Solutions" },
        contact: { ar: "تواصل معنا", en: "Contact Us" },
        address: { ar: "طريق الملك فهد، الرياض، المملكة العربية السعودية", en: "King Fahd Road, Riyadh, Saudi Arabia" },
        phone: { ar: "+966 11 123 4567", en: "+966 11 123 4567" },
        email: { ar: "info@goldensands.com", en: "info@goldensands.com" },
        copyright: { ar: `© ${new Date().getFullYear()} الرمال الذهبية. جميع الحقوق محفوظة.`, en: `© ${new Date().getFullYear()} Golden Sands. All rights reserved.` },
    };

    const solutionLinks = [
        { ar: 'مصاعد الركاب', en: 'Passenger Elevators' },
        { ar: 'المصاعد البانورامية', en: 'Panoramic Elevators' },
        { ar: 'مصاعد البضائع', en: 'Goods Elevators' },
        { ar: 'المصاعد المنزلية', en: 'Home Elevators' },
    ];
    
    return (
        <footer className="bg-secondary text-gray-300 pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary dark:text-primary-dark">{textData.logo[language]}</h3>
                        <p className="text-sm text-gray-400">{textData.about[language]}</p>
                        <div className="flex space-x-4" dir="ltr">
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm4.5-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" /></svg></SocialIcon>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{textData.quickLinks[language]}</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label[language]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Solutions */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{textData.solutions[language]}</h4>
                        <ul className="space-y-2">
                            {solutionLinks.map(link => (
                                <li key={link.en}>
                                    <Link to="/solutions" className="text-sm text-gray-400 hover:text-white transition-colors">{link[language]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">{textData.contact[language]}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-start"><span className="w-5 h-5 ltr:mr-2 rtl:ml-2 mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg></span><span>{textData.address[language]}</span></li>
                            <li className="flex items-center"><span className="w-5 h-5 ltr:mr-2 rtl:ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758c1.37 2.785 4.22 5.635 7.005 7.005l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg></span><span>{textData.phone[language]}</span></li>
                            <li className="flex items-center"><span className="w-5 h-5 ltr:mr-2 rtl:ml-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg></span><span>{textData.email[language]}</span></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    <p>{textData.copyright[language]}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
