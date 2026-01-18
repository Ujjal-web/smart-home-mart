import { Volume2, Shield, Lightbulb, Thermometer, Monitor, Lock } from 'lucide-react';
import CategoryCard from './CategoryCard';
import { categories } from '../data/mock';

const iconMap = {
    'volume-2': Volume2,
    'shield': Shield,
    'lightbulb': Lightbulb,
    'thermometer': Thermometer,
    'monitor': Monitor,
    'lock': Lock
};

const Categories = () => {
    return (
        <section className="py-16 bg-[#F5F3F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
                        Explore Collections
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6"
                        style={{ fontFamily: 'serif' }}
                    >
                        Shop by Category
                    </h2>
                    <p className="text-lg text-[#8B7D6B] max-w-2xl mx-auto">
                        Browse our carefully curated categories to find the perfect smart home solutions
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;