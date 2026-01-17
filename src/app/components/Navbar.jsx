import Link from 'next/link';
import { Home } from 'lucide-react';
import { Button } from './ui/button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/items' },
        { name: 'Categories', path: '/items' },
        { name: 'About', path: '/' },
        { name: 'Contact', path: '/' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#F5F3F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-[#C4B5A0] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                            <Home className="w-5 h-5 text-[#FAF9F7]" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-light text-[#2C2C2C] tracking-tight" style={{ fontFamily: 'serif' }}>
                                Smart Nest
                            </h1>
                            <p className="text-xs text-[#8B7D6B] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                Smart Home
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-sm text-[#2C2C2C] uppercase tracking-wider hover:text-[#C4B5A0] transition-colors duration-300 relative group"
                                style={{ letterSpacing: '1px' }}
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#C4B5A0] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/items">
                            <Button
                                variant="ghost"
                                className="text-sm uppercase tracking-wider text-[#2C2C2C] hover:text-[#C4B5A0] hover:bg-transparent transition-colors duration-300"
                                style={{ letterSpacing: '1px' }}
                            >
                                Items
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button
                                className="text-sm uppercase tracking-wider bg-[#C4B5A0] text-[#FAF9F7] hover:bg-[#6B4E37] transition-all duration-300 px-6 py-5 rounded"
                                style={{ letterSpacing: '1px' }}
                            >
                                Login
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <MobileMenu navLinks={navLinks} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;