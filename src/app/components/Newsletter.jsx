'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error('Please enter your email address');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Mock submission
        setIsSubmitted(true);
        toast.success('Thank you for subscribing!');

        // Reset after 3 seconds
        setTimeout(() => {
            setEmail('');
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section className="py-16 bg-linear-to-br from-[#D4C4B0] via-[#C4B5A0] to-[#D4C4B0] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FAF9F7]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B4E37]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-[#FAF9F7] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <Send className="w-8 h-8 text-[#6B4E37]" />
                </div>

                {/* Section Header */}
                <p className="text-xs uppercase tracking-wider text-[#6B4E37] mb-4" style={{ letterSpacing: '1px' }}>
                    Stay Connected
                </p>
                <h2
                    className="text-4xl md:text-5xl font-light text-[#FAF9F7] mb-6"
                    style={{ fontFamily: 'serif' }}
                >
                    Join Our Smart Community
                </h2>
                <p className="text-lg text-[#FAF9F7]/90 max-w-2xl mx-auto mb-12">
                    Subscribe to receive exclusive offers, smart home tips, and be the first to know about new product launches
                </p>

                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#FAF9F7] border-transparent text-[#2C2C2C] placeholder:text-[#8B7D6B] h-14 px-6 rounded focus:ring-2 focus:ring-[#6B4E37] transition-all duration-300"
                                disabled={isSubmitted}
                            />
                            {isSubmitted && (
                                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="bg-[#6B4E37] text-[#FAF9F7] hover:bg-[#2C2C2C] px-8 h-14 rounded uppercase tracking-wider text-sm transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                            style={{ letterSpacing: '1px' }}
                            disabled={isSubmitted}
                        >
                            {isSubmitted ? 'Subscribed!' : 'Subscribe Now'}
                            <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </form>

                {/* Privacy Note */}
                <p className="text-sm text-[#FAF9F7]/80 mt-6">
                    We respect your privacy. Unsubscribe at any time.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-[#FAF9F7]/10 backdrop-blur-sm rounded-lg p-6 border border-[#FAF9F7]/20">
                        <p className="text-3xl font-light text-[#FAF9F7] mb-2" style={{ fontFamily: 'serif' }}>
                            20%
                        </p>
                        <p className="text-sm text-[#FAF9F7]/90 uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                            Welcome Discount
                        </p>
                    </div>
                    <div className="bg-[#FAF9F7]/10 backdrop-blur-sm rounded-lg p-6 border border-[#FAF9F7]/20">
                        <p className="text-3xl font-light text-[#FAF9F7] mb-2" style={{ fontFamily: 'serif' }}>
                            First
                        </p>
                        <p className="text-sm text-[#FAF9F7]/90 uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                            Early Access
                        </p>
                    </div>
                    <div className="bg-[#FAF9F7]/10 backdrop-blur-sm rounded-lg p-6 border border-[#FAF9F7]/20">
                        <p className="text-3xl font-light text-[#FAF9F7] mb-2" style={{ fontFamily: 'serif' }}>
                            Weekly
                        </p>
                        <p className="text-sm text-[#FAF9F7]/90 uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                            Smart Tips
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;