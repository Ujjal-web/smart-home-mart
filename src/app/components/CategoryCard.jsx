'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, Volume2, Shield, Lightbulb, Thermometer, Monitor, Lock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
    'volume-2': Volume2,
    'shield': Shield,
    'lightbulb': Lightbulb,
    'thermometer': Thermometer,
    'monitor': Monitor,
    'lock': Lock
};

const CategoryCard = ({ category }) => {
    const router = useRouter();
    const IconComponent = iconMap[category.icon];

    const handleCategoryClick = () => {
        // Navigate to category page - customize this route as needed
        router.push(`/items?category=${category.id}`);
    };

    return (
        <Card
            onClick={handleCategoryClick}
            className="group bg-[#FFFFFF] border-[#F5F3F0] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-lg cursor-pointer"
        >
            <CardContent className="p-0">
                {/* Category Image */}
                <div className="relative overflow-hidden bg-[#F5F3F0] h-64">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C2C2C]/60 to-transparent"></div>

                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-12 h-12 bg-[#C4B5A0]/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-6 h-6 text-[#FAF9F7]" />}
                    </div>

                    {/* Product Count Badge */}
                    <div className="absolute top-6 right-6 bg-[#FAF9F7]/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-medium text-[#2C2C2C]">
                            {category.productCount} Products
                        </span>
                    </div>
                </div>

                {/* Category Info */}
                <div className="p-6">
                    <h3 className="text-2xl font-light text-[#2C2C2C] mb-2" style={{ fontFamily: 'serif' }}>
                        {category.name}
                    </h3>
                    <p className="text-sm text-[#8B7D6B] mb-4">
                        {category.description}
                    </p>

                    {/* Explore Link */}
                    <Button
                        variant="link"
                        className="text-[#C4B5A0] hover:text-[#6B4E37] p-0 h-auto uppercase tracking-wider text-xs group/btn"
                        style={{ letterSpacing: '1px' }}
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent double navigation
                            handleCategoryClick();
                        }}
                    >
                        Explore Category
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;