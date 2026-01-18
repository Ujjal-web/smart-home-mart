import { Sparkles, ShieldCheck, Leaf, Users } from 'lucide-react';
import { brandStory } from '../data/mock';

const iconMap = {
    'sparkles': Sparkles,
    'shield-check': ShieldCheck,
    'leaf': Leaf,
    'users': Users
};

const AboutSection = () => {
    return (
        <section className="py-16 bg-[#FAF9F7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
                            Our Story
                        </p>
                        <h2
                            className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6 leading-tight"
                            style={{ fontFamily: 'serif' }}
                        >
                            {brandStory.title}
                        </h2>
                        <p className="text-xl text-[#C4B5A0] mb-6" style={{ fontFamily: 'serif' }}>
                            {brandStory.subtitle}
                        </p>
                        <p className="text-base text-[#8B7D6B] leading-relaxed mb-8">
                            {brandStory.description}
                        </p>

                        {/* Mission Statement */}
                        <div className="bg-[#F5F3F0] p-6 rounded-lg mb-8">
                            <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-3" style={{ letterSpacing: '1px' }}>
                                Our Mission
                            </p>
                            <p className="text-base text-[#2C2C2C] leading-relaxed italic">
                                "{brandStory.mission}"
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {brandStory.stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-[#FFFFFF] rounded-lg border border-[#F5F3F0]">
                                    <p className="text-3xl font-light text-[#C4B5A0] mb-1" style={{ fontFamily: 'serif' }}>
                                        {stat.value}
                                    </p>
                                    <p className="text-xs uppercase tracking-wider text-[#8B7D6B]" style={{ letterSpacing: '1px' }}>
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={brandStory.image}
                                alt="Smart Nest Brand Story"
                                className="w-full h-150 object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#2C2C2C]/30 to-transparent"></div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#C4B5A0]/20 rounded-lg -z-10"></div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-16">
                    <div className="text-center mb-10">
                        <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
                            What Drives Us
                        </p>
                        <h3
                            className="text-3xl md:text-4xl font-light text-[#2C2C2C]"
                            style={{ fontFamily: 'serif' }}
                        >
                            Our Core Values
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {brandStory.values.map((value, index) => {
                            const IconComponent = iconMap[value.icon];
                            return (
                                <div
                                    key={index}
                                    className="text-center p-5 bg-[#FFFFFF] rounded-lg border border-[#F5F3F0] hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-14 h-14 bg-[#C4B5A0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        {IconComponent && <IconComponent className="w-7 h-7 text-[#C4B5A0]" />}
                                    </div>
                                    <h4 className="text-lg font-light text-[#2C2C2C] mb-3" style={{ fontFamily: 'serif' }}>
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-[#8B7D6B] leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;