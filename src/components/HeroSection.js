import React from 'react'; // Add this line
import ScrollToTopButton from "./ScrollToTopButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="hero flex flex-col gap-5 lg:flex-row" id="home">
            <div className="container mx-auto text-center flex flex-col justify-center items-center mt-20 md:mt-auto md:min-h-screen w-full  md:w-2/3">
                <h1 className="font-poppins text-xl md:text-5xl font-bold text-black mb-4 dark:text-white">
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
            <div className="w-full lg:w-1/3 lg:mt-20 mb-10 md:mr-5 border-[10px] border-indigo-500 rounded-lg">
                <img src="./paulinw.png" alt="" className="h-full w-full rounded-sm" />
            </div>
            <ScrollToTopButton />
        </section>
    );
};

export default HeroSection;
