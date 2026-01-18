import { Zap, Shield, Truck, Clock } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "Lighting Fast Setup",
        description: "Our smart devices are designed for instant connectivity. Box to working in under 5 minutes."
    },
    {
        icon: Shield,
        title: "Secure & Private",
        description: "Enterprise-grade encryption ensures your home data stays your home data. No compromise."
    },
    {
        icon: Truck,
        title: "Free Express Shipping",
        description: "Get your smart home upgrades delivered to your door in 2 days or less. Free for members."
    },
    {
        icon: Clock,
        title: "24/7 Expert Support",
        description: "Real humans, real experts. Available round the clock to help with setup or troubleshooting."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: 'serif' }}>
                        Why Choose Smart Nest?
                    </h2>
                    <p className="text-[#8B7D6B] max-w-2xl mx-auto">
                        We don't just sell devices; we curate an ecosystem of premium smart home technology designed to elevate your living experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 bg-[#FAF9F7] rounded-2xl hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 bg-[#FFFFFF] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-[#C4B5A0]" />
                            </div>
                            <h3 className="text-xl font-medium text-[#2C2C2C] mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-[#8B7D6B] text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
