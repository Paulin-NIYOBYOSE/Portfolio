import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800" id="contact">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Let's discuss your project and bring your ideas to life
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                    <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <HiOutlineLocationMarker className="w-full h-full" />
                        </div>
                        <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Address</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                            Mbugangari, Gisenyi, Rubavu, Rwanda
                        </p>
                    </div>
                    
                    <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <HiOutlinePhone className="w-full h-full" />
                        </div>
                        <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-400">+250796358871</p>
                    </div>
                    
                    <div className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                            <MdOutlineEmail className="w-full h-full" />
                        </div>
                        <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Email</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">niyobyosepaulin20@gmail.com</p>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h3>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </form>
                    </div>
                    
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Find Me Here</h3>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-64"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15997.154757118034!2d29.257235890346943!3d-1.5509722631933052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d40f3c517c3c15%3A0xe6eb00325eb2ec3c!2sGisenyi%2C%20Rubavu%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1697499831670!5m2!1sen!2sus"
                                title="Gisenyi, Rubavu, Rwanda Map"
                                style={{ border: '0' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
                            <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 text-center">
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
                        <span>☕</span> Fuel the grind with crypto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Not allergic to coffee!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {/* Bitcoin Address */}
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">₿</span>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Bitcoin (BTC)</span>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                <code className="text-xs text-gray-700 dark:text-gray-300 break-all">
                                    1573uj9xAEFFw8u22r9nA8AvXxDXKeVetf
                                </code>
                            </div>
                        </div>
                        
                        {/* Ethereum Address */}
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">Ξ</span>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Ethereum (ETH)</span>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                <code className="text-xs text-gray-700 dark:text-gray-300 break-all">
                                    0x24f4c3f2468efe64d7b5804da2c1d37e7919e43d
                                </code>
                            </div>
                        </div>
                        
                        {/* USDT Address */}
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">₮</span>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">USDT (TRC20)</span>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                <code className="text-xs text-gray-700 dark:text-gray-300 break-all">
                                    TKwYwTHLoEg8UJxvgcrmJKVMiL32EpZHzz
                                </code>
                            </div>
                        </div>
                        
                        {/* Solana Address */}
                        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">◎</span>
                                </div>
                                <span className="font-semibold text-gray-900 dark:text-white">Solana (SOL)</span>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                <code className="text-xs text-gray-700 dark:text-gray-300 break-all">
                                    CRSy1Eo6PDKpwRTfQ8n3KjCfYaTEimTK6kT4eYTwW98B
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                <div className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white">Connect With Me</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="mailto:niyobyosepaulin20@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                        >
                            <MdOutlineEmail className="text-xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/paulinwalker/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                        >
                            <FaInstagram className="text-xl" />
                        </a>
                        <a
                            href="https://x.com/Paulin_walker10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                        >
                            <FaTwitter className="text-xl" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/niyobyose-paulin-5a8497304/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                        >
                            <FaLinkedin className="text-xl" />
                        </a>
                        <a
                            href="https://github.com/Paulin-NIYOBYOSE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                        >
                            <FaGithub className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
