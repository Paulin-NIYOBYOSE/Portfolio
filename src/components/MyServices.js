import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaTools, FaComments, FaClipboardList } from 'react-icons/fa';

const services = [
    {
        icon: <FaCode size={50} className="text-purple-600" />,
        title: 'Web Design',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
    {
        icon: <FaPaintBrush size={50} className="text-purple-600" />,
        title: 'Graphic Design',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
    {
        icon: <FaMobileAlt size={50} className="text-purple-600" />,
        title: 'App Design',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
    {
        icon: <FaTools size={50} className="text-purple-600" />,
        title: 'Web Development',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
    {
        icon: <FaComments size={50} className="text-purple-600" />,
        title: 'Consultancy and Support',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
    {
        icon: <FaClipboardList size={50} className="text-purple-600" />,
        title: 'Illustration Design',
        description: 'Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enim dictum.'
    },
];

const MyServices = () => {
    return (
        <section className="md:px-[80px] bg-white dark:bg-gray-800">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-gray-700 dark:text-white mb-8">My Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12">
                    Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                    efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-100 dark:bg-gray-700 border border-purple-300 dark:border-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 my-4">
                            <div className="flex justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyServices;
