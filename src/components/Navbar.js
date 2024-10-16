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
                <div className="hidden lg:flex flex-row gap-5 items-cente border h-14 w-[28rem] items-center justify-center rounded-[2rem] border-indigo-500">
                    <ul className="flex space-x-6 text-gray-600 dark:text-gray-300">
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#home">Home</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#about">About</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#experience">Experience</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#project">Project</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#contact">Contact</a></li>
                    </ul>

                </div>
                <button
                    onClick={toggleTheme}
                    className="hidden  ml-4 p-2 bg-gray-700 dark:bg-gray-100 dark:text-gray-800 text-white rounded-md lg:flex items-center"
                >
                    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-16 mx-auto bg-white dark:bg-gray-900 p-6 rounded-md shadow-lg z-50 max-w-sm flex flex-col items-center justify-center">
                    <ul className="flex flex-col gap-6 text-gray-600 dark:text-gray-300 text-center">
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#service" onClick={toggleMenu}>Services</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li className="hover:text-purple-600 dark:hover:text-indigo-400"><a href="#project" onClick={toggleMenu}>Project</a></li>
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
