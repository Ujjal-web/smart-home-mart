import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
    return (
        <section className="py-24 bg-[#2C2C2C] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#C4B5A0]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C4B5A0]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
                        Customer Stories
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-light text-[#FAF9F7] mb-6"
                        style={{ fontFamily: 'serif' }}
                    >
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-[#D4C4B0] max-w-2xl mx-auto">
                        Real experiences from homeowners who transformed their living spaces with Smart Nest
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="bg-[#3D3D3D] border-[#4A4A4A] hover:border-[#C4B5A0] transition-all duration-500 group"
                        >
                            <CardContent className="p-8">
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="w-10 h-10 text-[#C4B5A0] opacity-50" />
                                </div>

                                {/* Rating */}
                                <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-[#C4B5A0] text-[#C4B5A0]"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-[#D4C4B0] text-base leading-relaxed mb-8 italic">
                                    "{testimonial.text}"
                                </p>

                                {/* Customer Info */}
                                <div className="flex items-center space-x-4 pt-6 border-t border-[#4A4A4A]">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-[#C4B5A0]"
                                        />
                                        <div className="absolute inset-0 rounded-full bg-[#C4B5A0]/20 group-hover:bg-[#C4B5A0]/30 transition-colors duration-300"></div>
                                    </div>
                                    <div>
                                        <p className="text-[#FAF9F7] font-medium">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-[#8B7D6B]">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 pt-16 border-t border-[#4A4A4A]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-light text-[#C4B5A0] mb-2" style={{ fontFamily: 'serif' }}>
                                98%
                            </p>
                            <p className="text-sm text-[#D4C4B0] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                Satisfaction Rate
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl font-light text-[#C4B5A0] mb-2" style={{ fontFamily: 'serif' }}>
                                10K+
                            </p>
                            <p className="text-sm text-[#D4C4B0] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                5-Star Reviews
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl font-light text-[#C4B5A0] mb-2" style={{ fontFamily: 'serif' }}>
                                24/7
                            </p>
                            <p className="text-sm text-[#D4C4B0] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                Support
                            </p>
                        </div>
                        <div>
                            <p className="text-4xl font-light text-[#C4B5A0] mb-2" style={{ fontFamily: 'serif' }}>
                                2 Years
                            </p>
                            <p className="text-sm text-[#D4C4B0] uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                Warranty
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;