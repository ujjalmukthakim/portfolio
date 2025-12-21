
import { NavLink } from 'react-router-dom';
import profilePic from '../images/shagor.jpeg'

const Home = () => {
    return (
        <div className="min-h-screen bg-transparent px-6 lg:px-12 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                
                {/* Text Content Area */}
                <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-[#821d30] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Uzzal Ahammed || Software Engineer
                    </h2>
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
                        Building digital <br /> 
                        <span className="italic">experiences</span> with <br />
                        precision.
                    </h1>
                    <p className="text-black text-lg max-w-xl mb-10 leading-relaxed">
                        I build reliable back-end systems and modern front-end interfaces
                         that prioritize performance, scalability, and real user needs.
                    </p>
                    
                    {/* Buttons */} <NavLink to='/projects'>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="border border-white bg-[#821d30] text-[#f7d6d0] px-8 py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors">
                            View Projects
                        </button>
                        <button className="border border-gray-300 text-black px-8 py-3 rounded font-bold uppercase tracking-widest text-xs hover:border-[#821d30] hover:text-white transition-all">
                            Read Resume
                        </button>
                    </div>
                    </NavLink>
                </div>

                {/* Image Section */}
                <div className="flex-1 order-1 md:order-2">
                    <div className="relative group">
                        {/* Decorative Background Frame */}
                        <div className="absolute -inset-4 border border-gray-100 rounded-lg -z-10 group-hover:border-[#821d30]/20 transition-colors duration-500"></div>
                        
                        {/* Main Image Container */}
                        <div className="overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                            <img 
                                src={profilePic}
                                alt="Software Engineer Portrait" 
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Classic Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl hidden lg:block">
                            <p className="text-3xl font-serif font-bold text-[#821d30]">01+</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years of Experience</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;