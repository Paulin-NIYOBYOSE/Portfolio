import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
    // Most Recent Projects (2024-2025) - BIM & Construction Focus
    {
        title: "Digital Cost estimation",
        description: "A digital platform for estimating construction costs, planning construction projects, managing employees and companies",
        stack: ["Next.js", "Tailwind CSS", "NestJs", "PostgresQL", "Prisma"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE",
        liveLink: "https://www.dsestimation.rw/",
        image: "/dsestimation.png"
    },
    {
        title: "Construction Marketplace",
        description: "Get live pricing, secure future contracts, and simulate market trading for all your construction material needs",
        stack: ["Next.js", "Tailwind CSS", "NestJs", "PostgresQL", "Prisma"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/construction-marketplace",
        liveLink: "https://constructioncost.vercel.app/",
        image: "/constructticker.png"
    },
    {
        title: "Akarongo Fashion",
        description: "A mobile application built with React Native for selling clothes online. It provides users with a clean interface to browse products, view details, add items to cart, and place orders",
        stack: ["React Native", "NativeWind"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/akarongo-fashion",
        liveLink: "https://github.com/Paulin-NIYOBYOSE/akarongo-fashion",
        image: "/akarongo.png"
    },
    {
        title: "Joblift",
        description: "This application connects job seekers and recruiters, helping people find jobs easily with advanced matching algorithms",
        stack: ["Python", "Java", "Next.js"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/joblift",
        liveLink: "https://github.com/Paulin-NIYOBYOSE/joblift",
        image: "/fxma.png"
    },
    {
        title: "FXMA",
        description: "An online learning platform for educating people about online trading: cryptocurrencies, forex, futures, etc with interactive courses",
        stack: ["Next.js", "Python", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY",
        liveLink: "https://mobsters-academy.vercel.app/",
        image: "/fxma.png"
    },
    
    // Earlier Projects (2023-2024)
    {
        title: "REstate",
        description: "Platform connecting people who want to buy/sell properties with advanced search and filtering capabilities",
        stack: ["React.js", "Tailwind CSS"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Real_estate",
        liveLink: "https://rwandaestate.vercel.app/",
        image: "/Real.png"
    },
    {
        title: "IS Technology",
        description: "An online tech hub for selling all electronic devices with inventory management and payment integration",
        stack: ["React", "Tailwind", "Java"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Is-Tech",
        liveLink: "https://is-tech-eta.vercel.app/",
        image: "/istech.png"
    },
    {
        title: "Cineflix",
        description: "A Next-Gen Netflix Clone with Enhanced Features including user authentication and movie recommendations",
        stack: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Paulin-NIYOBYOSE/Cineflix",
        liveLink: "https://cineflix0-movies.vercel.app/",
        image: "/cineflix.png"
    },

];

const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const initialProjectsCount = 6; // Show first 6 projects initially
    const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectsCount);

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800" id="project">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Discover my latest work and creative solutions
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-105">
                            {/* Gradient overlay for card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative">
                                <div className="overflow-hidden rounded-t-2xl h-48 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    {/* Floating action buttons */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                        >
                                            <FaGithub className="text-gray-700 dark:text-gray-300 text-lg" />
                                        </a>
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                        >
                                            <FaExternalLinkAlt className="text-gray-700 dark:text-gray-300 text-lg" />
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech, i) => (
                                            <span 
                                                key={i} 
                                                className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700 rounded-full text-xs font-medium hover:from-indigo-200 hover:to-purple-200 dark:hover:from-indigo-800/50 dark:hover:to-purple-800/50 transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Bottom gradient line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* View More Projects Button */}
                {projects.length > initialProjectsCount && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <span>
                                {showAllProjects ? 'Show Less Projects' : `View All Projects (${projects.length})`}
                            </span>
                            {showAllProjects ? (
                                <FaChevronUp className="text-sm group-hover:-translate-y-1 transition-transform duration-300" />
                            ) : (
                                <FaChevronDown className="text-sm group-hover:translate-y-1 transition-transform duration-300" />
                            )}
                        </button>
                        
                        {showAllProjects && (
                            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                                Showing all {projects.length} projects
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
