import AboutSection from "../components/AboutSection";

export const metadata = {
    title: "About Us - Smart Nest",
    description: "Learn more about Smart Nest's mission, values, and story.",
};

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Page Header */}
            <div className="text-center mb-12 px-4">
                <h1 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-4" style={{ fontFamily: 'serif' }}>
                    About Smart Nest
                </h1>
                <p className="text-lg text-[#8B7D6B] max-w-2xl mx-auto">
                    Innovating the way you live, one smart device at a time.
                </p>
            </div>

            <AboutSection />
        </div>
    );
}
