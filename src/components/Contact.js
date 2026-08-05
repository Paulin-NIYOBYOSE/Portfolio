import React, { useState, useEffect } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaCopy,
    FaCheck,
    FaChevronDown,
    FaPaperPlane,
    FaUser,
    FaCheckCircle,
    FaExternalLinkAlt,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "niyobyosepaulin20@gmail.com";
const CONTACT_PHONE = "+250796358871";

const infoCards = [
    {
        id: "address",
        icon: HiOutlineLocationMarker,
        label: "Address",
        value: "Rubavu, Rwanda",
        href: "https://www.google.com/maps/search/?api=1&query=Rubavu,+Rwanda",
        copyValue: "Rubavu, Rwanda",
    },
    {
        id: "phone",
        icon: HiOutlinePhone,
        label: "Phone",
        value: "+250 796 358 871",
        href: `tel:${CONTACT_PHONE}`,
        copyValue: CONTACT_PHONE,
    },
    {
        id: "email",
        icon: MdOutlineEmail,
        label: "Email",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        copyValue: CONTACT_EMAIL,
    },
];

const cryptoAddresses = [
    { symbol: "BTC", name: "Bitcoin", glyph: "₿", color: "bg-orange-500", address: "1573uj9xAEFFw8u22r9nA8AvXxDXKeVetf" },
    { symbol: "ETH", name: "Ethereum", glyph: "Ξ", color: "bg-blue-500", address: "0x24f4c3f2468efe64d7b5804da2c1d37e7919e43d" },
    { symbol: "USDT", name: "USDT (TRC20)", glyph: "₮", color: "bg-green-500", address: "TKwYwTHLoEg8UJxvgcrmJKVMiL32EpZHzz" },
    { symbol: "SOL", name: "Solana", glyph: "◎", color: "bg-purple-500", address: "CRSy1Eo6PDKpwRTfQ8n3KjCfYaTEimTK6kT4eYTwW98B" },
];

const socialLinks = [
    { name: "Email", icon: MdOutlineEmail, href: `mailto:${CONTACT_EMAIL}` },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/paulinwalker/" },
    { name: "Twitter", icon: FaTwitter, href: "https://x.com/Paulin_walker10" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/niyobyose-paulin-5a8497304/" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com/Paulin-NIYOBYOSE" },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [showToast, setShowToast] = useState(false);
    const [copiedId, setCopiedId] = useState(null);
    const [showCrypto, setShowCrypto] = useState(false);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 4500);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
        const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 2000);
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden" id="contact">
            {/* Decorative background blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container relative mx-auto px-4">
                <Reveal className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Let's discuss your project and bring your ideas to life
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </Reveal>

                {/* Quick info cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                    {infoCards.map((item, index) => (
                        <Reveal
                            key={item.id}
                            delay={index * 100}
                            className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-2xl text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                <item.icon className="w-full h-full" />
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {item.label}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm break-all mb-5">{item.value}</p>

                            <div className="flex items-center justify-center gap-3">
                                <a
                                    href={item.href}
                                    target={item.id === "address" ? "_blank" : undefined}
                                    rel={item.id === "address" ? "noopener noreferrer" : undefined}
                                    title={`Open ${item.label}`}
                                    className="p-2.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                                >
                                    <FaExternalLinkAlt className="text-sm" />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => copyToClipboard(item.copyValue, item.id)}
                                    title="Copy to clipboard"
                                    className="p-2.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                                >
                                    {copiedId === item.id ? <FaCheck className="text-sm text-green-500" /> : <FaCopy className="text-sm" />}
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Message form */}
                    <Reveal className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Name"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                                />
                            </div>
                            <div className="relative">
                                <MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Email"
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your Message"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <FaPaperPlane className="text-sm" />
                            </button>
                        </form>
                    </Reveal>

                    {/* Map */}
                    <Reveal delay={150} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Find Me Here</h3>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Rubavu,+Rwanda"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors duration-300"
                            >
                                Get Directions <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-64"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15997.154757118034!2d29.257235890346943!3d-1.5509722631933052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d40f3c517c3c15%3A0xe6eb00325eb2ec3c!2sGisenyi%2C%20Rubavu%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1697499831670!5m2!1sen!2sus"
                                title="Rubavu, Rwanda Map"
                                style={{ border: "0" }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Reveal>
                </div>

                {/* Crypto support (collapsible) */}
                <Reveal className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 text-center max-w-4xl mx-auto">
                    <button
                        type="button"
                        onClick={() => setShowCrypto((prev) => !prev)}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        aria-expanded={showCrypto}
                    >
                        <span className="text-xl">☕</span>
                        <span className="font-semibold text-gray-900 dark:text-white">Fuel the grind with crypto</span>
                        <FaChevronDown
                            className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${showCrypto ? "rotate-180" : ""}`}
                        />
                    </button>

                    {showCrypto && (
                        <div className="mt-8 animate-fade-in-up">
                            <p className="text-gray-600 dark:text-gray-400 mb-6">Not allergic to coffee!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cryptoAddresses.map((coin) => (
                                    <div
                                        key={coin.symbol}
                                        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 shadow-lg text-left"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-8 h-8 ${coin.color} rounded-full flex items-center justify-center shrink-0`}>
                                                <span className="text-white font-bold text-sm">{coin.glyph}</span>
                                            </div>
                                            <span className="font-semibold text-gray-900 dark:text-white">{coin.name}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                            <code className="text-xs text-gray-700 dark:text-gray-300 truncate" title={coin.address}>
                                                {coin.address}
                                            </code>
                                            <button
                                                type="button"
                                                onClick={() => copyToClipboard(coin.address, coin.symbol)}
                                                title="Copy address"
                                                className="shrink-0 p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:bg-indigo-500 hover:text-white transition-colors duration-300"
                                            >
                                                {copiedId === coin.symbol ? (
                                                    <FaCheck className="text-xs text-green-500" />
                                                ) : (
                                                    <FaCopy className="text-xs" />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Reveal>

                {/* Social links */}
                <Reveal className="mt-16 text-center">
                    <h3 className="text-xl font-semibold mb-8 text-gray-900 dark:text-white">Connect With Me</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110"
                            >
                                <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-gray-700 text-white text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {social.name}
                                </span>
                                <social.icon className="text-xl" />
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Success toast */}
            {showToast && (
                <div className="fixed top-4 right-4 z-50 animate-fade-in-up">
                    <div className="relative bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-green-200/50 dark:border-green-700/50 rounded-2xl shadow-2xl p-5 max-w-sm flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 text-xl mt-0.5 shrink-0" />
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">Message ready!</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Opening your email client to finish sending.</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
