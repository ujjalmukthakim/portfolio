import React from 'react';

const Skill = () => {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            skills: [
                { name: "React / Vite", level: "90%" },
                { name: "Tailwind CSS", level: "90%" },
                { name: "CSS", level: "85%" },
               
            ]
        },
        {
            title: "Backend & Systems",
            skills: [
                { name: "Python / Django", level: "90%" },
                { name: "PostgreSQL / MySql", level: "82%" },
                { name: "REST & GraphQL", level: "90%" },
                { name: "JavaScript", level: "70%" },
            ]
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Vercel", level: "75%" },
                { name: "Git / GitHub", level: "95%" },
                { name: "CI/CD Pipelines", level: "80%" },
                
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-transparent px-6 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-[#821d30] font-bold tracking-[0.3em] uppercase text-xs mb-2">
                        Technical Stack
                    </h2>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900">
                        A foundation built on <br /> 
                        <span className="italic text-[#821d30]">modern</span> standards.
                    </h1>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="space-y-8">
                            {/* Category Title */}
                            <h3 className="text-sm font-bold uppercase tracking-widest text-black border-b border-gray-100 pb-4">
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-black group-hover:text-[#821d30] transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-[10px] text-black font-bold uppercase tracking-tighter">
                                                {skill.level}
                                            </span>
                                        </div>
                                        
                                        {/* Progress Bar Container */}
                                        <div className="h-[2px] w-full bg-gray-100 overflow-hidden">
                                            <div 
                                                className="h-full bg-[#821d30] transition-all duration-1000 ease-out"
                                                style={{ width: skill.level }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Philosophy Quote / Bottom Note */}
                <div className="mt-24 p-10 border border-gray-100 rounded-sm text-center">
                    <p className="text-black font-light italic text-lg max-w-2xl mx-auto">
                        "The best way to predict the future is to invent it. I continuously refine my stack 
                        to ensure I'm building with the most resilient and efficient technologies available."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skill;