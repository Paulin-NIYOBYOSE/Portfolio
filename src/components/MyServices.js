import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaTools, FaComments, FaClipboardList } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode size={50} className="text-indigo-500" />,
        title: 'Web Design',
        description: 'I provide professional web design services, creating stunning and user-friendly websites tailored to your needs.'
    },
    {
        icon: <FaPaintBrush size={50} className="text-indigo-500" />,
        title: 'Graphic Design',
        description: 'I offer graphic design services to craft visually appealing and impactful designs that elevate your brand identity '
    },
    {
        icon: <FaMobileAlt size={50} className="text-indigo-500" />,
        title: 'App Design',
        description: 'I offer mobile development services, crafting intuitive and engaging applications for both iOS and Android. '
    },
    {
        icon: <FaTools size={50} className="text-indigo-500" />,
        title: 'Web Development',
        description: 'I provide web development services, creating responsive and user-friendly websites.'
    },
    {
        icon: <FaComments size={50} className="text-indigo-500" />,
        title: 'Consultancy and Support',
        description: 'I offer IT consultancy and support services to help optimize your technology infrastructure.'
    },
    {
        icon: <FaClipboardList size={50} className="text-indigo-500" />,
        title: 'Illustration Design',
        description: "I provide illustration design services to create unique and engaging visuals"
    },
];

const MyServices = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800" id='service'>
            <div className="container mx-auto text-center px-4">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        My Services
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        I offer a range of services designed to meet your needs and help you succeed.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="mb-6 p-4 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm flex-grow">
                                    {service.description}
                                </p>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
