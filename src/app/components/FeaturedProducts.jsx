import Link from 'next/link';
import { Button } from './ui/button';
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/mock';

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-[#FAF9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-4" style={{ letterSpacing: '1px' }}>
            Best Sellers
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6"
            style={{ fontFamily: 'serif' }}
          >
            Featured Products
          </h2>
          <p className="text-lg text-[#8B7D6B] max-w-2xl mx-auto">
            Discover our most popular smart home devices, curated for quality and innovation
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/items">
            <Button
              variant="outline"
              className="border-2 border-[#C4B5A0] text-[#2C2C2C] hover:bg-[#F5F3F0] px-8 py-6 rounded text-sm uppercase tracking-wider"
              style={{ letterSpacing: '1px' }}
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;