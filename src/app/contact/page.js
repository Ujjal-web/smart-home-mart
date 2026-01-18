'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
                        Get in Touch
                    </p>
                    <h1 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                        Contact Us
                    </h1>
                    <p className="text-lg text-[#8B7D6B] max-w-2xl mx-auto">
                        Have questions about our smart home solutions? We're here to help you transform your living space.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <Card className="bg-[#FAF9F7] border-[#F5F3F0]">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-light text-[#2C2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                                    Contact Information
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-[#C4B5A0]/10 rounded-full flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-[#C4B5A0]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-[#2C2C2C] mb-1">Visit Us</p>
                                            <p className="text-sm text-[#8B7D6B]">
                                                Sylhet, Bangladesh - 3100
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-[#C4B5A0]/10 rounded-full flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-[#C4B5A0]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-[#2C2C2C] mb-1">Call Us</p>
                                            <a href="tel:+8801749361101" className="text-sm text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors">
                                                +8801749361101
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-[#C4B5A0]/10 rounded-full flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-[#C4B5A0]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-[#2C2C2C] mb-1">Email Us</p>
                                            <a href="mailto:ujjaldas827@gmail.com" className="text-sm text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors">
                                                ujjaldas827@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-[#2C2C2C] border-none text-white">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-light mb-4" style={{ fontFamily: 'serif' }}>
                                    Business Hours
                                </h3>
                                <div className="space-y-3 text-sm text-[#D4C4B0]">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="bg-white border-[#F5F3F0]">
                            <CardContent className="p-8 md:p-12">
                                <h3 className="text-2xl font-light text-[#2C2C2C] mb-8" style={{ fontFamily: 'serif' }}>
                                    Send us a Message
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-[#2C2C2C]">Name</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="bg-[#FAF9F7] border-transparent focus:bg-white transition-colors h-12"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-[#2C2C2C]">Email</label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="bg-[#FAF9F7] border-transparent focus:bg-white transition-colors h-12"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-[#2C2C2C]">Subject</label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="bg-[#FAF9F7] border-transparent focus:bg-white transition-colors h-12"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-[#2C2C2C]">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us more about your inquiry..."
                                            className="flex min-h-[150px] w-full rounded-md bg-[#FAF9F7] border-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus:bg-white transition-colors resize-none"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-6 bg-[#C4B5A0] hover:bg-[#6B4E37] text-white rounded text-sm uppercase tracking-wider"
                                        style={{ letterSpacing: '1px' }}
                                    >
                                        Send Message
                                        <Send className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
