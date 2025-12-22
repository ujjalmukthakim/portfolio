import React from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    // 1. my form url
    const formspreeEndpoint = "https://formspree.io/f/mojallqy";

    return (
        <div className="min-h-screen bg-transparent px-6 lg:px-12 py-16">
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-[#821d30] font-bold tracking-[0.3em] uppercase text-xs mb-2">
                        Get in Touch
                    </h2>
                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900">
                        Let's build something <br /> 
                        <span className="italic text-[#821d30]">meaningful</span> together.
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <p className="text-black leading-relaxed text-lg font-light">
                                I am currently open to new opportunities, collaborations or simply 
                                discussing the future of software engineering.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#821d30] group-hover:bg-[#821d30] group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-black font-bold">Email</p>
                                        <p className="text-gray-900 font-medium">shagormukthakim2143@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#821d30] group-hover:bg-[#821d30] group-hover:text-white transition-all">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-black font-bold">Location</p>
                                        <p className="text-gray-900 font-medium">Uttara,Dhaka,Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-gray-100">
                            <p className="text-[10px] uppercase tracking-widest text-black font-bold mb-6">Social Platforms</p>
                            <div className="flex gap-6">
                                <a href="https://github.com/ujjalmukthakim" className="text-black hover:text-[#821d30] transition-colors"><Github size={24} /></a>
                                <a href="https://www.linkedin.com/in/shagor-mukthakim-880847316/" className="text-black hover:text-[#821d30] transition-colors"><Linkedin size={24} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Formspree Form */}
                    <div className="lg:col-span-7">
                        <form 
                            action={formspreeEndpoint}
                            method="POST"
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">Name</label>
                                    <input 
                                        name="name" 
                                        required
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#821d30] focus:outline-none transition-colors placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-900">Email Address</label>
                                    <input 
                                        name="email" 
                                        required
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#821d30] focus:outline-none transition-colors placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-900">Subject</label>
                                <input 
                                    name="_subject" 
                                    type="text" 
                                    placeholder="Collaboration Inquiry"
                                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#821d30] focus:outline-none transition-colors placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-900">Message</label>
                                <textarea 
                                    name="message" 
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-[#821d30] focus:outline-none transition-colors placeholder:text-gray-300 resize-none"
                                ></textarea>
                            </div>

                            {/* Anti-spam measure for Formspree */}
                            <input type="text" name="_gotcha" className="hidden" />

                            <button 
                                type="submit"
                                className="flex items-center gap-3 bg-[#821d30] text-[#f7d6d0] px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all"
                            >
                                Send Message <Send size={14} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;