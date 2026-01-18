'use client';

import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const ProductCard = ({ product }) => {
    const handleQuickAdd = (e) => {
        e.preventDefault(); // Prevent navigation if inside a link
        // Add your cart logic here
        console.log('Added to cart:', product.name);
    };

    // Use _id from MongoDB or id from mock data
    const productId = product._id || product.id;
    const rating = product.rating || 0;
    const reviews = product.reviews || 0;

    return (
        <Card
            className="group bg-[#FFFFFF] border-[#F5F3F0] hover:shadow-xl transition-all duration-500 overflow-hidden rounded-lg block h-full"
        >
            <Link href={`/items/${productId}`} className="block h-full">
                <CardContent className="p-0 h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-[#F5F3F0] aspect-square">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#2C2C2C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Quick Add Button */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            <Button
                                onClick={handleQuickAdd}
                                className="w-full bg-[#C4B5A0] text-[#FAF9F7] hover:bg-[#6B4E37] py-5 rounded uppercase tracking-wider text-xs"
                                style={{ letterSpacing: '1px' }}
                            >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Quick Add
                            </Button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 flex flex-col flex-1">
                        <p className="text-xs uppercase tracking-wider text-[#8B7D6B] mb-2" style={{ letterSpacing: '1px' }}>
                            {product.category}
                        </p>
                        <h3 className="text-xl font-light text-[#2C2C2C] mb-3 line-clamp-2" style={{ fontFamily: 'serif' }}>
                            {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center space-x-2 mb-4 mt-auto">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(rating)
                                            ? 'fill-[#C4B5A0] text-[#C4B5A0]'
                                            : 'text-[#D4C4B0]'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-[#8B7D6B]">
                                {rating > 0 ? `${rating} (${reviews})` : 'New Arrival'}
                            </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">
                            <p className="text-2xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                                ${product.price}
                            </p>
                            <span
                                className="text-sm text-[#C4B5A0] group-hover:text-[#6B4E37] transition-colors"
                            >
                                View Details
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
};

export default ProductCard;