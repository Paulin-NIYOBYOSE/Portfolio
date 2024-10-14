import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    // State for mobile menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // State for dark mode toggle
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true;
    });

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Handle dark mode toggle
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Function to toggle theme
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="font-bold text-xl text-purple-600 dark:text-indigo-400">Paulin</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-row gap-5 items-center">
                    <ul className="flex space-x-6 text-gray-600 dark:text-gray-300">
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#home">Home</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#about">About</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#services">Services</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#portfolio">Portfolio</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#blog">Blog</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#contact">Contact</a></li>

                    </ul>
                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 bg-gray-700 dark:bg-gray-100 dark:text-gray-800 text-white rounded-md flex items-center"
                    >
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-16 mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-md p-6 rounded-md shadow-lg z-50 max-w-sm flex flex-col items-center justify-center">
                    <button className="self-end mb-4" onClick={toggleMenu}>
                        <FaTimes size={24} className="text-gray-600 dark:text-gray-300" />
                    </button>
                    <ul className="flex flex-col gap-6 text-gray-600 dark:text-gray-300 text-center">
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#services" onClick={toggleMenu}>Services</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#blog" onClick={toggleMenu}>Blog</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="mt-6 p-2 bg-gray-700 dark:bg-gray-100 dark:text-gray-800 text-white rounded-md flex items-center"
                    >
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
