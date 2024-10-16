import { useState } from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState('experience');

    const experiences = [
        {
            title: 'D-Tech Systems',
            role: 'Frontend Developer',
            description: [
                'Developed web apps for different organizations',
                'Collaborated with backend developers to develop complex solutions',
            ],
            icon: <FaBriefcase />,
        },
    ];

    const education = [
        {
            title: 'Rwanda Coding Academy',
            duration: '2024 - 2025',
            role: 'Software Development & Embedded Systems',
            description: [],
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
                                    <h3 className="text-xl font-bold text-black dark:text-white">{item.title}</h3>
                                    <p className="text-sm dark:text-gray-300 text-gray-800">{item.role}</p>
                                    <ul className="dark:text-gray-300 text-gray-800">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="list-disc list-inside">
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
