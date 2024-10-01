import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when the page is scrolled up to a certain height
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        padding: '10px',
                        backgroundColor: 'gray',
                        color: '#fff',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '20px',
                        zIndex: '1000',
                        width: '50px'
                    }}
                >
                    ⬆
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
