
import React, { useState, useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import type { AppContextType } from '../types';

const Contact = () => {
    const context = useContext(AppContext);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus(textData.error[language]);
            return;
        }
        // Mock submission
        setStatus(textData.success[language]);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    if (!context) return null;
    const { language } = context as AppContextType;
    
    const textData = {
        title: { ar: "تواصل معنا", en: "Contact Us" },
        subtitle: { ar: "يسعدنا استقبال استفساراتكم. فريقنا جاهز لمساعدتكم في إيجاد الحل الأمثل لمشروعكم.", en: "We are happy to receive your inquiries. Our team is ready to help you find the perfect solution for your project." },
        infoTitle: { ar: "معلومات الاتصال", en: "Contact Information" },
        address: { ar: "العنوان", en: "Address" },
        addressValue: { ar: "طريق الملك فهد، الرياض، المملكة العربية السعودية", en: "King Fahd Road, Riyadh, Saudi Arabia" },
        phone: { ar: "الهاتف", en: "Phone" },
        email: { ar: "البريد الإلكتروني", en: "Email" },
        formTitle: { ar: "أرسل لنا رسالة", en: "Send Us a Message" },
        name: { ar: "الاسم الكامل", en: "Full Name" },
        emailLabel: { ar: "البريد الإلكتروني", en: "Email Address" },
        phoneLabel: { ar: "رقم الهاتف (اختياري)", en: "Phone Number (Optional)" },
        message: { ar: "رسالتك", en: "Your Message" },
        send: { ar: "إرسال", en: "Send Message" },
        success: { ar: "تم استلام رسالتك بنجاح! سنتواصل معك قريباً.", en: "Your message has been received successfully! We will contact you soon." },
        error: { ar: "الرجاء تعبئة الحقول المطلوبة.", en: "Please fill in the required fields." }
    };

    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-secondary dark:text-white mb-4">{textData.title[language]}</h1>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">{textData.subtitle[language]}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-secondary rounded-lg shadow-xl p-8">
                    {/* Contact Info & Map */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{textData.infoTitle[language]}</h2>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p><strong>{textData.address[language]}:</strong> {textData.addressValue[language]}</p>
                            <p><strong>{textData.phone[language]}:</strong> +966 11 123 4567</p>
                            <p><strong>{textData.email[language]}:</strong> info@goldensands.com</p>
                        </div>
                        <div className="mt-8 rounded-lg overflow-hidden">
                            {/* Google Maps Embed Placeholder */}
                            <div className="w-full h-80 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                                <p className="text-gray-500">{language === 'ar' ? 'خريطة جوجل هنا' : 'Google Map Here'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{textData.formTitle[language]}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1 font-medium">{textData.name[language]}</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-secondary-light dark:border-gray-600 focus:ring-primary focus:border-primary" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-medium">{textData.emailLabel[language]}</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-secondary-light dark:border-gray-600 focus:ring-primary focus:border-primary" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-1 font-medium">{textData.phoneLabel[language]}</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-secondary-light dark:border-gray-600 focus:ring-primary focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-medium">{textData.message[language]}</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-2 border rounded-md bg-gray-50 dark:bg-secondary-light dark:border-gray-600 focus:ring-primary focus:border-primary" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary dark:bg-primary-dark text-white font-bold py-3 px-6 rounded-md shadow-lg hover:opacity-90 transition-opacity">
                                    {textData.send[language]}
                                </button>
                            </div>
                            {status && <p className={`text-center p-2 rounded-md ${status.includes('نجاح') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
