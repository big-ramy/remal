import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import { askGemini } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { AppContext } from '../contexts/AppContext';
import type { AppContextType } from '../types';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.956-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.501-.182-.001-.381-.001-.579-.001-.198 0-.521.074-.792.372-.271.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
    </svg>
);
const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
);

const ChatMessageContent = ({ text }: { text: string }) => {
    const linkifiedText = useMemo(() => {
        const phoneRegex = /(05[0-9]{8})/g;
        const whatsappLink = 'https://wa.me/966540070093';

        return text.split(/(\s+)/).map((part, index) => {
            if (phoneRegex.test(part)) {
                return <a key={index} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline font-bold">{part}</a>;
            }
            return part;
        });
    }, [text]);

    return <p className="text-sm leading-relaxed whitespace-pre-wrap">{linkifiedText}</p>;
};

const WhatsAppWidget = () => {
    const context = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble1, setShowBubble1] = useState(false);
    const [showBubble2, setShowBubble2] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null);
    const [isBotTyping, setIsBotTyping] = useState(false);

    useEffect(() => {
        if (isOpen) return;
        const t1 = setTimeout(() => setShowBubble1(true), 3000);
        const t2 = setTimeout(() => {
            setShowBubble1(false);
            setTimeout(() => setShowBubble2(true), 500);
        }, 8000); // Bubble 1 shows for 5s
         const t3 = setTimeout(() => {
            setShowBubble2(false);
        }, 13500); // Bubble 2 shows for 5s

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [isOpen]);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isBotTyping]);
    
const handleOpenChat = () => {
        setIsOpen(true);
        if (messages.length === 0) {
            // Add the welcome messages directly to the chat history
            setMessages([
                { id: Date.now(), sender: 'bot', text: textData.bubble1[language] },
                { id: Date.now() + 1, sender: 'bot', text: textData.bubble2[language] }
            ]);

            // Then, show typing and add the final greeting
            setIsBotTyping(true);
            setTimeout(() => {
                setMessages(prev => [
                    ...prev,
                    { id: Date.now() + 2, sender: 'bot', text: textData.welcome1[language] }
                ]);
                setIsBotTyping(false);
            }, 2000); // Simulate typing
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isBotTyping) return;

        const newUserMessage: ChatMessage = { id: Date.now(), sender: 'user', text: userInput };
        const currentHistory = [...messages, newUserMessage];
        setMessages(currentHistory);
        setUserInput('');
        setIsBotTyping(true);

        try {
            const botResponseText = await askGemini(userInput, messages);
            const newBotMessage: ChatMessage = { id: Date.now() + 1, sender: 'bot', text: botResponseText };
            setMessages(prev => [...prev, newBotMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { id: Date.now() + 1, sender: 'bot', text: textData.error[language] };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsBotTyping(false);
        }
    };

    if (!context) return null;
    const { language } = context as AppContextType;
    
    const textData = {
        bubble1: { ar: "مرحبا انا موظف خدمة العملاء", en: "Hello, I am the customer service representative" },
        bubble2: { ar: "سعيدين في خدمتك, شركة الرمال الذهبية تقدم افضل خيارات التنقل العامودي الذي يتميز بالجودة والكفاءة والامان", en: "Happy to serve you. Golden Sands offers the best vertical transportation options..." },
        welcome1: { ar: "حياك الله يا غالي، كيف لنا ان نساعدك اليوم؟", en: "Welcome, dear! How can we help you today?" },
        chatHeader: { ar: "الرمال الذهبية", en: "Golden Sands" },
        chatSubheader: { ar: "مساعد المبيعات الذكي", en: "AI Sales Assistant" },
        inputPlaceholder: { ar: "اكتب رسالتك هنا...", en: "Type your message here..." },
        error: { ar: "عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى.", en: "Sorry, an error occurred. Please try again." },
    };

    const Bubble = ({ text, show }: { text: string; show: boolean }) => (
        <div className={`absolute bottom-0 ltr:left-16 rtl:right-16 mb-2 transition-all duration-500 transform ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg">
                <p className="text-sm">{text}</p>
            </div>
        </div>
    );

    return (
        <div className="fixed bottom-5 ltr:left-5 rtl:right-5 z-50">
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
                    <div onClick={e => e.stopPropagation()} className="w-full max-w-sm h-[70vh] flex flex-col bg-gray-100 dark:bg-secondary-light rounded-lg shadow-2xl m-4">
                        <header className="bg-green-600 dark:bg-green-700 text-white p-4 rounded-t-lg flex items-center">
                            <WhatsAppIcon />
                            <div className="ltr:ml-3 rtl:mr-3">
                                <h3 className="font-bold">{textData.chatHeader[language]}</h3>
                                <p className="text-xs">{textData.chatSubheader[language]}</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="ltr:ml-auto rtl:mr-auto text-2xl">&times;</button>
                        </header>
                        <div className="flex-1 p-4 overflow-y-auto bg-gray-200 dark:bg-secondary">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex my-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-lg text-white ${msg.sender === 'user' ? 'bg-green-500 dark:bg-green-600' : 'bg-gray-500 dark:bg-gray-600'}`}>
                                       {msg.sender === 'bot' ? <ChatMessageContent text={msg.text} /> : <p className="text-sm">{msg.text}</p>}
                                    </div>
                                </div>
                            ))}
                             {isBotTyping && (
                                <div className="flex my-2 justify-start">
                                    <div className="max-w-[80%] p-3 rounded-lg text-white bg-gray-500 dark:bg-gray-600">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 bg-gray-100 dark:bg-secondary-light border-t dark:border-gray-600 flex items-center gap-2">
                            <input
                                type="text"
                                value={userInput}
                                onChange={e => setUserInput(e.target.value)}
                                placeholder={textData.inputPlaceholder[language]}
                                className="flex-1 p-2 border rounded-full bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <button type="submit" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors disabled:bg-gray-400" disabled={isBotTyping}>
                                <SendIcon />
                            </button>
                        </form>
                    </div>
                </div>
            )}
            
            <div className="relative">
                <Bubble text={textData.bubble1[language]} show={showBubble1} />
                <Bubble text={textData.bubble2[language]} show={showBubble2} />
                <button onClick={handleOpenChat} className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <WhatsAppIcon />
                </button>
            </div>
        </div>
    );
};

export default WhatsAppWidget;