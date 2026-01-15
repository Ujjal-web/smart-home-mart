'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const MobileMenu = ({ navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-[#F5F3F0] transition-colors duration-300"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6 text-[#2C2C2C]" />
                ) : (
                    <Menu className="w-6 h-6 text-[#2C2C2C]" />
                )}
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-[#FAF9F7] border-t border-[#F5F3F0] shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={toggleMenu}
                                className="block text-sm text-[#2C2C2C] uppercase tracking-wider hover:text-[#C4B5A0] transition-colors duration-300 py-2"
                                style={{ letterSpacing: '1px' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-3 border-t border-[#F5F3F0]">
                            <Link href="/items" onClick={toggleMenu}>
                                <Button
                                    variant="outline"
                                    className="w-full text-sm uppercase tracking-wider border-[#C4B5A0] text-[#2C2C2C] hover:bg-[#F5F3F0]"
                                    style={{ letterSpacing: '1px' }}
                                >
                                    Items
                                </Button>
                            </Link>
                            <Link href="/login" onClick={toggleMenu}>
                                <Button
                                    className="w-full text-sm uppercase tracking-wider bg-[#C4B5A0] text-[#FAF9F7] hover:bg-[#6B4E37]"
                                    style={{ letterSpacing: '1px' }}
                                >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;