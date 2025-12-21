import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Active link styling
    const linkStyles = ({ isActive }) => 
        `relative pb-1 transition-all duration-300 hover:text-[#821d30] hover:bg-transparent ${
            isActive ? "text-[#821d30]  border-black" : "bg-[#821d30] text-[#f7d6d0] px-4 py-2 rounded"
        }`;

    return (
        <nav className="w-full z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Desktop Layout: Left Aligned */}
                <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-medium">
                    <NavLink to="/" className={linkStyles}>Home</NavLink>
                    <NavLink to="/about" className={linkStyles}>About Me</NavLink>
                    <NavLink to="/projects" className={linkStyles}>Projects</NavLink>
                    <NavLink to="/skill" className={linkStyles}>Skill</NavLink>
                    <NavLink to="/contact" className={linkStyles}>Contact</NavLink>
                </div>

                {/* Mobile Layout: Toggle Button (Aligned Left) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#821d30] focus:outline-none">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-6 px-8 pb-10 text-sm uppercase tracking-widest">
                    <NavLink to="/" onClick={toggleMenu} className={linkStyles}>Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className={linkStyles}>About</NavLink>
                    <NavLink to="/projects" onClick={toggleMenu} className={linkStyles}>Projects</NavLink>
                    <NavLink to="/skill" onClick={toggleMenu} className={linkStyles}>Skill</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className="text-[#821d30] font-bold ">Contact</NavLink>
                    <hr />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;