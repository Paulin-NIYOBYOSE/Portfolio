import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';


export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState('experience');

    const experiences = [
        {
            title:"Digital Cost Estimation",
            role:"BIM specialist",
            duration:"Sept 2024 - Present",
            description:[
            'Developed modern platforms for employee management, project budget planning and construction cost estimation',
            'Developed useful plugins used in Revit and Archicad to export and report information from those applications',
            'Developed cost estimation tools used to calculate bills of quantities in construction project planning'
            ],
            icon: <FaBriefcase />,
        },
        {
            title: 'Kick side Rwanda',
            role: 'Frontend Developer',
            duration: 'Aug 2024 - Present',
            description: [
                'Developed modern websites including the kickside official newspaper publishing site',
                'Collaborated with backend developers to create complex construction and software solutions',
                'Implemented responsive designs and optimized user experiences across multiple projects',
            ],
            icon: <FaBriefcase />,
        },
        {
            title: 'IS TECH',
            role: 'Full Stack Developer',
            duration: 'Apr 2024 - Present',
            description: [
                'Developed comprehensive e-commerce platform for selling electronic devices and tech products',
                'Integrated robust backend systems using Java and PostgreSQL for inventory management',
                'Built RESTful APIs and implemented secure payment processing systems',
            ],
            icon: <FaBriefcase />,
        
        },
        
    ];

    const education = [
        {
            title: 'Rwanda Coding Academy',
            duration: '2024 - Present',
            role: 'High School Diploma in Software Programming & Embedded Systems',
            icon: <FaGraduationCap />,
        },
        {
            title: 'Ecole Des Sciences Des Musanze',
            duration: '2020 - 2023',
            role: 'Ordinary Level Education',
            icon: <FaGraduationCap />,
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900" id='experience'>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Experience & Education
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and educational background
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="flex justify-center space-x-2 mb-12">
                    <button
                        className={`px-8 py-3 font-semibold rounded-full transition-all duration-300 ${
                            activeTab === 'experience' 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Experience
                    </button>
                    <button
                        className={`px-8 py-3 font-semibold rounded-full transition-all duration-300 ${
                            activeTab === 'education' 
                                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg' 
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                </div>

                <div className="max-w-4xl mx-auto">
                    {activeTab === 'experience' && (
                        <div className="relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                            
                            <div className="space-y-12">
                                {experiences.map((item, index) => (
                                    <div key={index} className="group relative flex items-start">
                                        {/* Timeline Node */}
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-800">
                                                {item.icon}
                                            </div>
                                            {/* Timeline connector dot */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-800"></div>
                                        </div>
                                        
                                        {/* Content Card */}
                                        <div className="flex-grow ml-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-x-2">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                                                    {item.duration}
                                                </span>
                                            </div>
                                            
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                                {item.role}
                                            </p>
                                            
                                            <ul className="space-y-2">
                                                {item.description.map((desc, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            
                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className="relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
                            
                            <div className="space-y-12">
                                {education.map((item, index) => (
                                    <div key={index} className="group relative flex items-start">
                                        {/* Timeline Node */}
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-full text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-gray-800">
                                                {item.icon}
                                            </div>
                                            {/* Timeline connector dot */}
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-2 border-white dark:border-gray-800"></div>
                                        </div>
                                        
                                        {/* Content Card */}
                                        <div className="flex-grow ml-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-x-2">
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                                                    {item.duration}
                                                </span>
                                            </div>
                                            
                                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                                {item.role}
                                            </p>
                                            
                                            {/* Bottom accent line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
