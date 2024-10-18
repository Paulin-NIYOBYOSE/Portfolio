import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Cineflix",
        description: "A Next-Gen Netflix Clone with Enhanced Features",
        stack: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Cineflix",
        liveLink: "https://cineflix0-movies.vercel.app/",
        image: "./cineflix.png"
    },
    {
        title: "IS Technology",
        description: "An online tech hub for selling all electronic devices",
        stack: ["React", "Tailwind", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Is-Tech",
        liveLink: "https://is-tech-eta.vercel.app/",
        image: "./istech.png"
    },
    {
        title: "Foodie App",
        description: "This is a restaurant app that contains different sections such as where clients can order food , the services the restaurant provides,..",
        stack: ["HTML", "JAVASCRIPT", "BOOTSTRAP"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Foodie-app",
        liveLink: "https://foodie-app-np.vercel.app/",
        image: "./foodie.png"
    },


    {
        title: "FXMA",
        description: "An online platform for educating people on forex trading, my trading bot, and signals",
        stack: ["Next.js", "Python", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY",
        liveLink: "https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY",
        image: "./fxma.png"
    },
    {
        title: "Joblift",
        description: "This application allows connects job seekers and recruiters, helping people find jobs easily.",
        stack: ["Python", "Java", "Next.js"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Is-Tech",
        liveLink: "https://github.com/Paulin-NIYOBYOSE",
        image: "./fxma.png"
    },
];

const Projects = () => {
    return (
        <section className="py-20" id="project">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-10 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
                {projects.map((project, index) => (
                    <div key={index} className="relative group dark:bg-gray-800 bg-white p-5 rounded-lg shadow-xl font-poppins  border border-indigo-500">
                        <div className="overflow-hidden rounded-lg lg:h-[120px]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-36 rounded-md object-cover mb-5 transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex justify-center items-center rounded-xl bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-2xl">
                                    <FaGithub />
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white mx-2 text-2xl">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 dark:text-white">{project.title}</h3>
                        <p className="text-gray-400 mb-5">{project.description}</p>
                        <div className="flex space-x-3 mb-4">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="dark:bg-gray-700 bg-gray-600 border border-indigo-500 text-white px-2 py-1 rounded text-xs sm:text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
