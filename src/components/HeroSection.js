import React, { useState, useEffect } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [roleText, setRoleText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const roles = [
            "Mobile Application Developer",
            "Full Stack Developer",
            "A BIM Developer",
        ];

        const role = roles[currentRoleIndex];
        let index = 0;
        let currentText = "";

        setRoleText(""); // Clear the role text before starting

        const typingInterval = setInterval(() => {
            if (index < role.length) {
                currentText += role[index];
                setRoleText(currentText);
                index += 1;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
                setTimeout(() => {
                    setIsTyping(true);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }, 1000);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, [currentRoleIndex]);

    return (
        <section className="hero flex flex-col gap-8 lg:flex-row relative min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20" id="home">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="container mx-auto text-center flex flex-col justify-center items-center mt-24 md:mt-auto md:min-h-screen w-full lg:w-2/3 relative z-10">
                <div className="animate-fade-in-up">
                    <h1 className="font-poppins text-2xl md:text-6xl font-bold text-black mb-6 dark:text-white leading-tight">
                        Hi, I am <span className="dark:text-indigo-400 text-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">NIYOBYOSE Paulin.</span>
                    </h1>
                </div>
                
                <div className="animate-fade-in-up delay-200">
                    <h2 className="font-poppins text-xl md:text-4xl font-semibold text-indigo-500 dark:text-indigo-300 mb-8 min-h-[3rem] md:min-h-[4rem]">
                        {roleText}
                        {isTyping && <span className="blink-caret text-indigo-500">|</span>}
                    </h2>
                </div>
                
                <div className="animate-fade-in-up delay-400">
                    <p className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 font-poppins text-lg md:text-xl leading-relaxed mb-10 px-4">
                        I'm a <span className="font-semibold text-indigo-600 dark:text-indigo-400">full-stack software developer and BIM specialist</span> based in Rwanda. I specialize in fullstack software development and BIM technologies
                        With expertise in <span className="font-semibold text-purple-600 dark:text-purple-400">Software Development and BIM technologies</span>, I provide innovative construction solutions and enjoy tackling complex problems in both software development and building information modeling.
                    </p>
                </div>
                
                <div className="animate-fade-in-up delay-600">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <a
                            href="/Paulin.pdf"
                            download="Paulin.pdf"
                            className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 rounded-full text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                        >
                            <span>Download Resume</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                        
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Paulin-NIYOBYOSE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 border-2 border-indigo-300 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-110"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/niyobyose-paulin-5a8497304/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 border-2 border-indigo-300 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-md hover:shadow-lg transform hover:scale-110"
                            >
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="animate-fade-in-up delay-800">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Take a look at my projects, and feel free to reach out if you'd like to connect!
                    </p>
                </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center items-center lg:mt-20 mb-10 relative z-10 animate-fade-in-right">
                <div className="relative group">
                    {/* Animated background glow */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    
                    {/* Main image container with hero background */}
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                        {/* Background matching hero section */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20"></div>
                        
                        {/* Programmer image */}
                        <img 
                            src="/programmer.png" 
                            alt="Paulin - BIM Developer & Software Engineer" 
                            className="relative z-10 w-full h-full object-contain scale-90 group-hover:scale-95 transition-transform duration-500" 
                        />
                        
                        {/* Subtle overlay for better integration */}
                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-purple-500/10 group-hover:from-indigo-500/15 group-hover:to-purple-500/15 transition-all duration-300"></div>
                        
                        {/* Decorative border */}
                        <div className="absolute inset-0 rounded-full border-4 border-indigo-300/30 dark:border-indigo-500/30 group-hover:border-indigo-400/50 dark:group-hover:border-indigo-400/50 transition-colors duration-300"></div>
                    </div>
                    
                    {/* Floating tech icons around the image */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float opacity-80">
                        <span className="text-sm font-bold">BIM</span>
                    </div>
                    <div className="absolute bottom-8 left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float opacity-80" style={{animationDelay: '1s'}}>
                        <span className="text-xs font-bold">ML</span>
                    </div>
                    <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float opacity-80" style={{animationDelay: '0.5s'}}>
                        <span className="text-xs font-bold">JS</span>
                    </div>
                    
                </div>
            </div>
            
            <ScrollToTopButton />
        </section>
    );
};

export default HeroSection;
