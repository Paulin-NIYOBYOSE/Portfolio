import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setIsVisible(scrollTop > 300);
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r={radius} fill="none" strokeWidth="2" className="stroke-gray-200 dark:stroke-gray-700" />
                <circle
                    cx="24"
                    cy="24"
                    r={radius}
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    className="stroke-indigo-500 transition-[stroke-dashoffset] duration-150"
                />
            </svg>
            <FaArrowUp className="relative text-indigo-600 dark:text-indigo-400 text-sm" />
        </button>
    );
};

export default ScrollToTopButton;
