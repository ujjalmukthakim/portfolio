import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin,Mail,Instagram } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent pt-20 pb-10 px-6 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    
                    {/* Brand/Philosophy Section */}
                    <div className="max-w-sm">
                        <h3 className="text-xl font-serif font-bold text-[#821d30] mb-4 uppercase tracking-tighter">
                            UZZAL AHAMMED<span className="text-gray-900">.</span>
                        </h3>
                        <p className="text-black text-sm leading-relaxed font-light">
                            Developing purposeful software with a focus on clean architecture 
                            and user-centric experiences. Based in Dhaka,Bangladesh.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#821d30] bg-white px-4 py-2 rounded font-bold mb-2">Menu</p>
                            <NavLink to="/" className="text-sm text-black hover:text-[#821d30] transition-colors hover:bg-white px-4 py-2 rounded">Home</NavLink>
                            <NavLink to="/about" className="text-sm text-black hover:text-[#821d30] transition-colors hover:bg-white px-4 py-2 rounded">About</NavLink>
                            <NavLink to="/projects" className="text-sm text-black hover:text-[#821d30] transition-colors hover:bg-white px-4 py-2 rounded">Projects</NavLink>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#821d30] bg-white px-4 py-2 rounded font-bold mb-2">Social</p>
                            <a href="https://github.com/ujjalmukthakim" className="text-sm text-black hover:text-[#821d30] transition-colors flex items-center gap-2 hover:bg-white px-4 py-2 rounded"><Github size={14}/> GitHub</a>
                            <a href="https://www.linkedin.com/in/shagor-mukthakim-880847316/" className="text-sm text-black hover:text-[#821d30] transition-colors flex items-center gap-2 hover:bg-white px-4 py-2 rounded"><Linkedin size={14}/> LinkedIn</a>
                            <a href="https://www.instagram.com/shagormukthakim/" className="text-sm text-black hover:text-[#821d30] transition-colors flex items-center gap-2 hover:bg-white px-4 py-2 rounded"><Instagram size={14}/> Instagram</a>
                            <a href="mailto:shagormukthakim2143@gmail.com" className="text-sm text-black hover:text-[#821d30] transition-colors flex items-center gap-2 hover:bg-white px-4 py-2 rounded"><Mail size={14}/> Email</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-widest text-gray-100">
                        &copy; {currentYear} All Rights Reserved
                    </p>
                    <div className="flex gap-8">
                        <p className="text-[10px] uppercase tracking-widest text-white">
                            Designed with Precision
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-white">
                            Built with React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;