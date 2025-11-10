import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true;
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'project', 'skills', 'experience', 'service', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial active section

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    // Helper function to get active class for desktop nav
    const getNavLinkClass = (sectionId) => {
        const baseClass = "px-4 py-2 rounded-full transition-all duration-300 font-medium";
        const activeClass = "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-sm";
        const inactiveClass = "hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-600 dark:text-gray-300";
        
        return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
    };

    // Helper function to get active class for mobile nav
    const getMobileNavLinkClass = (sectionId) => {
        const baseClass = "block py-3 px-4 rounded-xl transition-all duration-300 font-medium";
        const activeClass = "bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shadow-sm";
        const inactiveClass = "hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 text-gray-600 dark:text-gray-300";
        
        return `${baseClass} ${activeSection === sectionId ? activeClass : inactiveClass}`;
    };

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <span className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Paulin
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-row gap-1 items-center bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-12 px-2 rounded-full shadow-inner">
                    <ul className="flex space-x-1">
                        <li>
                            <a href="#home" className={getNavLinkClass('home')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#project" className={getNavLinkClass('project')}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className={getNavLinkClass('skills')}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className={getNavLinkClass('experience')}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#service" className={getNavLinkClass('service')}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className={getNavLinkClass('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                
                <button
                    onClick={toggleTheme}
                    className="hidden lg:flex items-center p-3 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                >
                    {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>

                {/* Mobile Menu Button */}
                <div className="block lg:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="p-2 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        {menuOpen ? <FaTimes size={20} className="text-gray-700 dark:text-gray-300" /> : <FaBars size={20} className="text-gray-700 dark:text-gray-300" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-x-0 top-20 mx-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 z-50 max-w-sm mx-auto">
                    <ul className="flex flex-col gap-4 text-center">
                        <li>
                            <a href="#home" onClick={toggleMenu} className={getMobileNavLinkClass('home')}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#project" onClick={toggleMenu} className={getMobileNavLinkClass('project')}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={toggleMenu} className={getMobileNavLinkClass('skills')}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={toggleMenu} className={getMobileNavLinkClass('experience')}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#service" onClick={toggleMenu} className={getMobileNavLinkClass('service')}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleMenu} className={getMobileNavLinkClass('contact')}>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                        <button
                            onClick={toggleTheme}
                            className="w-full p-3 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {darkMode ? (
                                <>
                                    <FaSun size={18} />
                                    <span>Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <FaMoon size={18} />
                                    <span>Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
