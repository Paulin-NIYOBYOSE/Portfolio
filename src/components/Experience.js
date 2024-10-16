import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState('experience');

    const experiences = [
        {
            title: 'Kick side Rwanda',
            role: 'Frontend Developer',
            duration: 'Aug 2024 - Present',
            description: [
                'Developed beautiful websites such as e-commerce, real estate,..',
                'Collaborated with backend developers to develop complex solutions',
            ],
            icon: <FaBriefcase />,
        },
        {
            title: 'IS TECH',
            role: 'Full stack Developer',
            duration: 'Apr 2024 - Present',
            description: [
                'Developed beautiful e-commerce website for selling tech procducts such as phone',
                'Integrated e-commerce backend with java and PostgreSQL for the database',
            ],
            icon: <FaBriefcase />,
        },
    ];

    const education = [
        {
            title: 'Ecole Des Sciences Des Musanze',
            duration: '2020 - 2023',
            role: 'Ordinary level education',
            icon: <FaGraduationCap />,
        },
        {
            title: 'Rwanda Coding Academy',
            duration: '2024 - 2026',
            role: 'High shcool deploma in Software Programming & Embedded Systems',
            icon: <FaGraduationCap />,
        },

    ];

    return (
        <div className="container mx-auto px-4 py-10" id='experience'>
            <h3 className='text-5xl flex items-center justify-center mb-10'>Experience</h3>
            <div className="flex justify-center space-x-4 mb-10">
                <button
                    className={`px-4 py-2 font-semibold ${activeTab === 'experience' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
                        } rounded-full`}
                    onClick={() => setActiveTab('experience')}
                >
                    Experience
                </button>
                <button
                    className={`px-4 py-2 font-semibold ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'
                        } rounded-full`}
                    onClick={() => setActiveTab('education')}
                >
                    Education
                </button>
            </div>

            <div className="timeline">
                {activeTab === 'experience' && (
                    <div>
                        {experiences.map((item, index) => (
                            <div key={index} className="flex items-start mb-10 lg:ml-[150px]">

                                <div className="ml-4">
                                    <h3 className="text-xl lg:text-2xl text-black dark:text-white font-bold">{item.title}</h3>
                                    <h2 className="text-xs text-black dark:text-white">{item.duration}</h2>
                                    <p className="text-sm dark:text-gray-300 text-gray-800 font-bold">{item.role}</p>
                                    <ul className="dark:text-gray-300 text-gray-800 ">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="list-disc list-inside font-normal">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="bg-blue-500 p-2 rounded-full text-white">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'education' && (
                    <div>
                        {education.map((item, index) => (
                            <div key={index} className="flex items-start mb-10 lg:ml-[200px]">

                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-black dark:text-white">{item.title}</h3>
                                    <h2 className='text-xs font-bold text-black dark:text-white'>{item.duration}</h2>
                                    <p className="text-sm dark:text-gray-300 text-gray-800">{item.role}</p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="bg-blue-500 p-2 rounded-full text-white">
                                        {item.icon}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
