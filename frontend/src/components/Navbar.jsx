import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skill', label: 'Skill' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkArea, setIsDarkArea] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const updateNavbar = () => {
            const sections = navItems
                .map((item) => document.getElementById(item.id))
                .filter(Boolean);
            const scrollPosition = window.scrollY + 180;
            const currentSection = sections.findLast((section) => section.offsetTop <= scrollPosition);

            setActiveSection(currentSection?.id || 'home');
            setIsDarkArea(window.scrollY > window.innerHeight * 1.85);
        };

        updateNavbar();
        window.addEventListener('scroll', updateNavbar, { passive: true });
        window.addEventListener('resize', updateNavbar);

        return () => {
            window.removeEventListener('scroll', updateNavbar);
            window.removeEventListener('resize', updateNavbar);
        };
    }, []);

    const handleNavClick = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', id === 'home' ? '/' : `#${id}`);
            setActiveSection(id);
        }

        setIsOpen(false);
    };

    const linkStyles = (id) => {
        const isActive = activeSection === id;
        const activeStyle = isDarkArea
            ? 'text-[#f7d6d0] hover:text-white'
            : 'text-[#821d30] hover:text-[#821d30]';
        const idleStyle = isDarkArea
            ? 'bg-[#f7d6d0] text-[#821d30] hover:text-[#f7d6d0] px-4 py-2 rounded'
            : 'bg-[#821d30] text-[#f7d6d0] hover:text-[#821d30] px-4 py-2 rounded';

        return `relative pb-1 transition-all duration-300 hover:bg-transparent ${
            isActive ? `${activeStyle} border-black` : idleStyle
        }`;
    };

    return (
        <nav className="sticky top-0 w-full z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Desktop Layout: Left Aligned */}
                <div className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.2em] font-medium">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleNavClick(item.id)}
                            className={linkStyles(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Layout: Toggle Button (Aligned Left) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className={`${isDarkArea ? 'text-[#f7d6d0]' : 'text-[#821d30]'} focus:outline-none`}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-6 px-8 pb-10 text-sm uppercase tracking-widest">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => handleNavClick(item.id)}
                            className={`${linkStyles(item.id)} text-left`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <hr />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
