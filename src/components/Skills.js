import React from "react";

const skills = ["Python", "JAVA", "TypeScript", "MQL5", "Tailwind CSS", "Next.js", "React", "Redux", "SASS", "HTML", "CSS", "JavaScript", "Material UI", "Git", "CI/CD", "Jest", "Enzyme"];

const Skills = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-800" id="skills">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-5 dark:text-white">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 px-5 md:px-[400px]">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="dark:bg-gray-700 border-[1.5px] dark:border-indigo-500 bg-gray-200 shadow-lg dark:text-white text-gray-900 px-4 py-2 rounded-md">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
