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
        <section className="md:px-[80px] bg-white dark:bg-gray-800" id='service'>
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">My Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">
                    I offer a range of services designed to meet your needs and help you succeed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-800 border  border-purple-300 dark:border-indigo-500  p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 my-4">
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
