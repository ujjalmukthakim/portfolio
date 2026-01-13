import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-transparent px-6 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-[#821d30] font-bold tracking-[0.3em] uppercase text-xs mb-2">
                        Biography
                    </h2>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900">
                        The person behind <br /> the <span className="italic text-[#821d30]">syntax.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Story & Philosophy */}
                    <div className="md:col-span-7 space-y-8">
                        <p className="text-xl text-black leading-relaxed font-light">
                            I am a Software Engineer driven by the intersection of 
                            <span className="font-semibold text-gray-900"> elegant design </span> 
                            and <span className="font-semibold text-gray-900"> high-performance logic.</span> 
                            I don't just write code; I build digital systems that are as 
                            beautiful under the hood as they are on the screen.
                        </p>

                        <div className="space-y-4 text-black leading-relaxed">
                            <p>
                                My journey began with a curiosity for how things work which evolved into a career 
                                dedicated to mastering the modern web ecosystem. I specialize in building 
                                scalable applications using React, Django and RestApi.
                            </p>
                            <p>
                                I believe that software should be "invisible", so intuitive and robust that 
                                the user never has to think about the complexity powering their experience. 
                                This philosophy guides every line of code I write and every architectural 
                                decision I make. I love to solve complex problems.
                            </p>
                        </div>

                        {/* Quick Facts / Philosophy Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                            <div className="border-l-2 border-[#821d30] pl-6 py-2">
                                <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">Architecture</h4>
                                <p className="text-sm text-black">Prioritizing clean, maintainable and modular codebases.</p>
                            </div>
                            <div className="border-l-2 border-[#821d30] pl-6 py-2">
                                <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-1">Performance</h4>
                                <p className="text-sm text-black">Optimizing for speed and efficiency at every layer.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details & Expertise */}
                    <div className="md:col-span-5 space-y-12">
                        {/* Technical Expertise List */}
                        <div className="bg-[#821d30] text-[#f7d6d0] p-8 lg:p-10 rounded-sm shadow-2xl">
                            <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-6 border-b border-[#f7d6d0]/20 pb-4">
                                Core Expertise
                            </h3>
                            <ul className="space-y-4 font-medium tracking-wide">
                                <li className="flex justify-between border-b border-[#f7d6d0]/10 pb-2">
                                    <span>Frontend</span>
                                    <span className="text-white/70 italic">React / Vite</span>
                                </li>
                                <li className="flex justify-between border-b border-[#f7d6d0]/10 pb-2">
                                    <span>Backend</span>
                                    <span className="text-white/70 italic">Python / Django</span>
                                </li>
                                <li className="flex justify-between border-b border-[#f7d6d0]/10 pb-2">
                                    <span>Database</span>
                                    <span className="text-white/70 italic">PostgreSQL / MySql</span>
                                </li>
                                <li className="flex justify-between border-b border-[#f7d6d0]/10 pb-2">
                                    <span>DevOps</span>
                                    <span className="text-white/70 italic">Git & GitHub / Render / Vercel</span>
                                </li>
                            </ul>
                        </div>

                        {/* Secondary Details */}
                        <div className="px-2">
                            <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-4">Inspiration</h4>
                            <p className="text-sm text-black italic leading-relaxed">
                                "Programs must be written for people to read and only incidentally for machines to execute."
                                <br />
                                <span className="text-[#821d30] not-italic font-bold">— Harold Abelson</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;