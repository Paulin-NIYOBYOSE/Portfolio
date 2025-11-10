import React from "react";

const skills = ["Python", "JAVA", "TypeScript", "MQL5", "Tailwind CSS", "Next.js", "React", "Redux", "SASS", "HTML", "CSS", "JavaScript", "Material UI", "Git", "CI/CD", "Jest", "Enzyme","BIM Technologies",];

const Skills = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900" id="skills">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Technical Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl dark:text-white text-gray-900 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20 cursor-pointer"
                        >
                            <span className="relative z-10 font-medium text-sm">{skill}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute inset-0 border border-indigo-300/50 dark:border-indigo-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-10 w-32 h-32 bg-indigo-300/5 rounded-full blur-2xl"></div>
                    <div className="absolute top-1/4 right-10 w-40 h-40 bg-purple-300/5 rounded-full blur-2xl"></div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
