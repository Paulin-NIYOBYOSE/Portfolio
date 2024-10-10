import ScrollToTopButton from "./ScrollToTopButton";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Import necessary icons

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // State to track theme, defaulting to dark mode unless user has a preference
    const [darkMode, setDarkMode] = useState(() => {
        // Get theme preference from localStorage, if available
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true; // Default to dark mode
    });

    // Effect to apply the theme class to the HTML tag
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
        <section className="hero" id="home">
            <header className="flex justify-between items-center p-4 gap-16 font-poppins font-semibold">
                <a href="#home">
                    <div className="ml-5 mt-5">
                        <h3>Paulin</h3>
                    </div>
                </a>
                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
                <div className={`hidden lg:flex flex-row gap-5 items-center`}>
                    <ul className="flex flex-row gap-10 mt-2">
                        <li className="p-2">
                            <a href="#project" className="">Projects</a>
                        </li>
                        <li className="p-2">
                            <a href="#skills" className="">Skills</a>
                        </li>
                        <li className="p-2">
                            <a href="#contact" className="">Contact</a>
                        </li>
                    </ul>
                    <button
                        onClick={toggleTheme}
                        className="p-2 bg-gray-700 text-white rounded-md flex items-center"
                    >
                        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                </div>
            </header>

            {/* Menu overlay for smaller screens */}
            {menuOpen && (
                <div className="fixed mt-40 inset-0 bg-opacity-75 flex justify-center items-center z-50 h-[100px] px-5">
                    <div className="dark:bg-gray-900 bg-white p-6 border-2 border-indigo-400 dark:border-none rounded-md flex flex-col items-center w-full dark:text-white ">

                        <ul className="flex flex-col gap-6 mt-4 text-center">
                            <li>
                                <a href="#project" className="">Projects</a>
                            </li>
                            <li onClick={toggleMenu} className="">Skills</li>
                            <li onClick={toggleMenu} className="">Contact</li>
                        </ul>
                        <button
                            onClick={toggleTheme}
                            className="mt-4 p-2 bg-gray-700 text-white rounded-md flex items-center"
                        >
                            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
                        </button>
                    </div>
                </div>
            )}

            <div className="container mx-auto text-center flex flex-col justify-center items-center min-h-screen">
                <h1 className="font-poppins text-2xl md:text-7xl font-bold text-black mb-4 dark:text-white">
                    Hi, I am <span className="dark:text-indigo-400 text-gray-600">NIYOBYOSE Paulin.</span>
                </h1>

                <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-indigo-300 mb-6">
                    A Fullstack Software Developer
                </h2>
                <p className="max-w-3xl mx-auto text-black font-poppins text-lg dark:text-indigo-300 mb-8">
                    I'm a full-stack software developer based in Rwanda, currently working on FXMA. I specialize in Software Programming and Embedded Systems at the Rwanda Coding Academy.
                    With a strong focus on ML, Python and JAVA, I enjoy tackling complex problems and building efficient, scalable applications.
                    Take a look at my projects, and feel free to reach out if you’d like to connect!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-0 justify-items-center">
                    <a
                        href="/Paulin.pdf"
                        download="Paulin.pdf"
                        className="px-3 py-3 border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md text-center"
                    >
                        Resume
                    </a>
                    <a
                        href="https://github.com/Paulin-NIYOBYOSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md text-center"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niyobyose-paulin-5a8497304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-3 border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md text-center"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                </div>

            </div>
            <ScrollToTopButton />
        </section>
    );
};

export default HeroSection;
