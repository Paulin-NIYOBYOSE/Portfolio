import React, { useEffect, useState } from 'react';
import './cursor.css';  // Import the custom styles

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);  // Check if screen size is medium or larger
        };

        if (isLargeScreen) {
            window.addEventListener('mousemove', moveCursor);
        } else {
            setPosition({ x: -100, y: -100 });  // Move cursor off-screen for smaller devices
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', handleResize);
        };
    }, [isLargeScreen]);

    if (!isLargeScreen) return null;

    return (
        <>
            <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            <div className="cursor-before" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
        </>
    );
};

export default CustomCursor;
