import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import logo from '@/assets/logos/logo.png';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-1000 transition-all duration-500",
            scrolled ? "py-4 bg-brand-navy/95 backdrop-blur-xl shadow-lg shadow-black/20" : "py-8 bg-transparent"
        )}>
            <div className="max-w-300 mx-auto px-6 flex justify-between items-center">
                <div className="nav-brand">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="FalconBridge Partners" className="h-12 w-auto" />
                    </Link>
                </div>

                <div className="hidden md:flex items-center bg-white/3 border border-white/8 backdrop-blur-xl p-1.5 rounded-full">
                    <ul className="flex items-center gap-2 list-none">
                        <li>
                            <Link to="/how-we-work" className="text-[0.8rem] font-medium text-white/70 px-5 py-2.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                                How We Work
                            </Link>
                        </li>
                        <li>
                            <Link to="/research" className="text-[0.8rem] font-medium text-white/70 px-5 py-2.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                                Research
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-[0.8rem] font-medium text-white/70 px-5 py-2.5 rounded-full hover:text-white hover:bg-white/5 transition-all">
                                About
                            </Link>
                        </li>
                        <li>
                            <Button href="/contact" variant="primary" size="sm" icon={ArrowUpRight}>
                                Request Conversation
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
