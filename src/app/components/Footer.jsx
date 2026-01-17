import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2C2C2C] text-[#FAF9F7] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-[#C4B5A0] rounded-full flex items-center justify-center">
                                <Home className="w-5 h-5 text-[#FAF9F7]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-light text-[#FAF9F7] tracking-tight" style={{ fontFamily: 'serif' }}>
                                    Smart Nest
                                </h3>
                                <p className="text-xs text-[#8B7D6B] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                    Smart Home
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-[#D4C4B0] leading-relaxed mb-6">
                            Crafting intelligent home solutions that blend innovation with elegance. Transform your living space today.
                        </p>
                        {/* Social Media */}
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#C4B5A0] transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#C4B5A0] transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ujjal-web"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-[#3D3D3D] rounded-full flex items-center justify-center hover:bg-[#C4B5A0] transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-6 text-[#C4B5A0]" style={{ letterSpacing: '1px' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/items" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/items" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-6 text-[#C4B5A0]" style={{ letterSpacing: '1px' }}>
                            Support
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/help" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/installation" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Installation Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/warranty" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Warranty
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Returns & Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm uppercase tracking-wider mb-6 text-[#C4B5A0]" style={{ letterSpacing: '1px' }}>
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-[#C4B5A0] shrink-0 mt-0.5" />
                                <span className="text-sm text-[#D4C4B0]">
                                    Sylhet, Bangladesh - 3100
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-[#C4B5A0] shrink-0" />
                                <a href="tel:+8801749361101" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    +8801749361101
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-[#C4B5A0] shrink-0" />
                                <a href="mailto:ujjaldas827@gmail.com" className="text-sm text-[#D4C4B0] hover:text-[#C4B5A0] transition-colors duration-300">
                                    ujjaldas827@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#3D3D3D]">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-[#8B7D6B]">
                            © {currentYear} Smart Nest. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/terms" className="text-sm text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link href="/privacy" className="text-sm text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/cookies" className="text-sm text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;