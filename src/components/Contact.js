import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className="" id="contact">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">Contact</h2>
            <div className="md:flex md:justify-center md:items-center gap-2">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-center items-center">
                    <a
                        href="mailto:niyobyosepaulin20@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md"
                    >
                        <MdOutlineEmail className="text-lg" />
                    </a>
                    <a
                        href="https://www.instagram.com/paulinwalker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://x.com/Paulin_walker10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niyobyose-paulin-5a8497304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a
                        href="https://github.com/Paulin-NIYOBYOSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                </div>
            </div>

            <h3 className="flex justify-center items-center mt-10 pb-2">
                Made with ❤️ by Paulin
            </h3>
        </section>
    );
};

export default Contact;
