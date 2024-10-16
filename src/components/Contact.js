import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="contact">


            <div className="mt-10 px-4 md:px-20 lg:px-40">
                <h3 className="text-center text-2xl md:text-3xl font-semibold mb-6 dark:text-white">Get In Touch</h3>
                <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
                    Get in touch with me to discuss your project!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                    <div className="text-center p-6 border border-indigo-500 rounded-md shadow-lg flex flex-col items-center">
                        <HiOutlineLocationMarker className="text-4xl mb-3 text-indigo-300" />
                        <h4 className="font-semibold text-lg mb-1 dark:text-white">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                            Mbugangari, Gisenyi, Rubavu, Rwanda
                        </p>
                    </div>
                    <div className="text-center p-6 border border-indigo-500 rounded-md shadow-lg flex flex-col items-center">
                        <HiOutlinePhone className="text-4xl mb-3 text-indigo-300" />
                        <h4 className="font-semibold text-lg mb-1 dark:text-white">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300">+250785214322</p>
                        <p className="text-gray-600 dark:text-gray-300">+250784794400</p>
                    </div>
                    <div className="text-center p-6 border border-indigo-500 rounded-md shadow-lg flex flex-col items-center">
                        <MdOutlineEmail className="text-4xl mb-3 text-indigo-300" />
                        <h4 className="font-semibold text-lg mb-1 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">niyobyosepaulin20@gmail.com</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">paulinwalker@gmail.com</p>
                    </div>
                </div>


                <div className="md:flex gap-8">
                    <form className="md:w-1/2">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 border border-indigo-500 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-indigo-500 rounded-md dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Message"
                                className="w-full p-3 border border-indigo-500 rounded-md dark:bg-gray-700 dark:text-white"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-indigo-300 text-gray-800 font-semibold rounded-md transition-colors duration-300 hover:bg-indigo-400"
                        >
                            Send Message
                        </button>
                    </form>
                    <div className="md:w-1/2 mt-6 md:mt-0">
                        <iframe
                            className="md:w-[500px] w-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15997.154757118034!2d29.257235890346943!3d-1.5509722631933052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d40f3c517c3c15%3A0xe6eb00325eb2ec3c!2sGisenyi%2C%20Rubavu%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1697499831670!5m2!1sen!2sus"
                            title="Gisenyi, Rubavu, Rwanda Map"
                            width="500"
                            height="250"
                            style={{ border: '0' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>



                    </div>
                </div>
            </div>
            <div className="md:flex md:justify-center md:items-center gap-2">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center md:ml-1 ml-[50px]">
                    <a
                        href="mailto:niyobyosepaulin20@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md m-2"
                    >
                        <MdOutlineEmail className="text-lg" />
                    </a>
                    <a
                        href="https://www.instagram.com/paulinwalker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md m-2"
                    >
                        <FaInstagram className="text-lg" />
                    </a>
                    <a
                        href="https://x.com/Paulin_walker10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md m-2"
                    >
                        <FaTwitter className="text-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niyobyose-paulin-5a8497304/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md m-2"
                    >
                        <FaLinkedin className="text-lg" />
                    </a>
                    <a
                        href="https://github.com/Paulin-NIYOBYOSE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex justify-center items-center border-2 border-indigo-300 text-indigo-300 hover:bg-indigo-300 hover:text-gray-800 transition-colors duration-300 rounded-md m-2"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                </div>
            </div>


            <h3 className="flex justify-center items-center mt-10 pb-2 dark:text-white">
                Made with <span role="img" aria-label="heart">❤️</span> by Paulin
            </h3>

        </section>
    );
};

export default Contact;
