import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-[#FAF9F7] overflow-hidden">
            {/* Background Image with Overlay */}
            {/* <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full object-cover"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njg0NjY2Mzd8MA&ixlib=rb-4.1.0&q=85')"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F7]/95 via-[#FAF9F7]/85 to-transparent" />
            </div> */}

            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwwfHx8fDE3Njg0NjY2Mzd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Modern Smart Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#FAF9F7]/95 via-[#FAF9F7]/85 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#C4B5A0]/30 shadow-sm">
                        <span className="w-2 h-2 bg-[#C4B5A0] rounded-full animate-pulse" />
                        <span className="text-xs uppercase tracking-wider text-[#6B4E37] font-medium" style={{ letterSpacing: '1.5px' }}>
                            New Technology Available
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#2C2C2C] leading-tight" style={{ fontFamily: 'serif' }}>
                        Your Home,{' '}
                        <span className="block mt-2 font-extrabold text-[#C4B5A0]">Reimagined</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-[#8B7D6B] max-w-2xl mx-auto leading-relaxed">
                        Experience the perfect harmony of innovation and elegance. Transform your living space with intelligent solutions designed for modern life.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/items">
                            <Button
                                className="group px-8 py-6 bg-[#C4B5A0] hover:bg-[#6B4E37] text-white rounded-lg transition-all duration-300 text-base uppercase tracking-wider shadow-lg hover:shadow-xl"
                                style={{ letterSpacing: '1px' }}
                            >
                                Explore Products
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="group px-8 py-6 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-[#C4B5A0] text-[#2C2C2C] rounded-lg transition-all duration-300 text-base uppercase tracking-wider"
                            style={{ letterSpacing: '1px' }}
                        >
                            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            Watch Demo
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
                        <div className="space-y-2">
                            <div className="text-4xl sm:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                                100K+
                            </div>
                            <div className="text-sm uppercase tracking-wider text-[#8B7D6B]" style={{ letterSpacing: '1px' }}>
                                Happy Homes
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl sm:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                                50+
                            </div>
                            <div className="text-sm uppercase tracking-wider text-[#8B7D6B]" style={{ letterSpacing: '1px' }}>
                                Devices
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl sm:text-5xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                                4.8/5
                            </div>
                            <div className="text-sm uppercase tracking-wider text-[#8B7D6B]" style={{ letterSpacing: '1px' }}>
                                Rating
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#FAF9F7] to-transparent z-20" />
        </section>
    );
};

export default HeroSection;