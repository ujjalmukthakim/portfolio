import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    // Array of engineering projects
    const projects = [
        {
            title: "Architectural CRM",
            category: "Full Stack Development",
            description: "A high-performance client management system built for boutique architectural firms. Focused on heavy data visualization and seamless UI.",
            tech: ["React", "PostgreSQL", "Tailwind"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Neural Engine Dashboard",
            category: "AI / Interface Design",
            description: "An analytics dashboard monitoring real-time neural network training sessions. Built with a focus on low-latency data streaming.",
            tech: ["Next.js", "Python", "WebSockets"],
            link: "#",
            github: "#",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-transparent px-6 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-[#821d30] font-bold tracking-[0.3em] uppercase text-xs mb-2">
                        Selected Works
                    </h2>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900">
                        Crafting solutions through <br /> 
                        <span className="italic text-[#821d30]">focused</span> engineering.
                    </h1>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {projects.map((project, index) => (
                        <div key={index} className="group">
                            {/* Project Image Container */}
                            <div className="relative overflow-hidden rounded-sm bg-gray-100 mb-8 aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#821d30]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Project Details */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#821d30] font-bold mb-1">
                                            {project.category}
                                        </p>
                                        <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#821d30] transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex gap-4 text-gray-400">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-[#821d30] transition-colors">
                                            <Github size={20}/>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-[#821d30] transition-colors">
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-light text-sm max-w-md">
                                    {project.description}
                                </p>

                                {/* Tech Tags - FIXED SECTION */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tech.map((t, i) => (
                                        <span 
                                            key={i} 
                                            className="text-[9px] uppercase tracking-widest border border-gray-200 px-3 py-1 text-gray-500 font-bold"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Call-to-action */}
                <div className="mt-24 text-center border-t border-gray-100 pt-16">
                    <p className="text-gray-400 italic mb-6">Want to see more technical explorations?</p>
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block bg-[#821d30] text-[#f7d6d0] px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all"
                    >
                        Visit Archive
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;