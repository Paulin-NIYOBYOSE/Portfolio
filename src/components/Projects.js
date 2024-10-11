import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "IS Technology",
        description: "An online tech hub for selling all electronic devices",
        stack: ["React", "Tailwind", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Is-Tech",
        liveLink: "https://is-tech-eta.vercel.app/"
    },
    {
        title: "FXMA",
        description: "An online platform for educating people on forex trading, my trading bot, and signals",
        stack: ["Next.js", "Python", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY",
        liveLink: "https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY"
    },
    {
        title: "Joblift",
        description: "This application allows users to track jobs they’ve applied for, monitor their status, set reminders for follow-ups, and manage their job search effectively.",
        stack: ["Python", "Java", "Next.js"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Is-Tech",
        liveLink: "https://github.com/Paulin-NIYOBYOSE"
    },
    {
        title: "Cineflix",
        description: "A Next-Gen Netflix Clone with Enhanced Features",
        stack: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Cineflix",
        liveLink: "https://cineflix0-movies.vercel.app/"
    },
];

const Projects = () => {
    return (
        <section className="py-20" id="project">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
                {projects.map((project, index) => (
                    <div key={index} className="dark:bg-gray-800 bg-white p-5 rounded-lg flex flex-col justify-center items-center shadow-xl font-poppins">
                        <h3 className="text-2xl font-bold mb-3 dark:text-white font-poppins">{project.title}</h3>
                        <p className="text-gray-400 mb-5">{project.description}</p>
                        <div className="flex space-x-3 mb-4">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="dark:bg-gray-700 bg-gray-600 text-white px-2 py-1 rounded text-sm">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-xl dark:text-white">
                                <FaGithub />
                            </a>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-xl dark:text-white">
                                <FaExternalLinkAlt />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
