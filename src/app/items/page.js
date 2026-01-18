import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { Plus } from "lucide-react";

export const dynamic = "force-dynamic";

async function getItems() {
    const res = await fetch(`${process.env.EXPRESS_API_URL}/api/items`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
}

export default async function ItemsPage() {
    let items = [];
    try {
        items = await getItems();
    } catch (e) {
        return (
            <div className="pt-32 pb-12 max-w-7xl mx-auto px-4">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
                    <h1 className="text-xl font-bold text-red-800">Connection Error</h1>
                    <p className="mt-2 text-sm text-red-600">
                        Could not load items. Please ensure the server is running on port 5000.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-[#FAF9F7] pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-wider text-[#C4B5A0] mb-2" style={{ letterSpacing: '1px' }}>
                            Our Collection
                        </p>
                        <h1 className="text-3xl md:text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>
                            All Products
                        </h1>
                        <p className="mt-2 text-[#8B7D6B] max-w-2xl text-lg">
                            Explore our curated selection of premium smart home devices designed to elevate your living experience.
                        </p>
                    </div>

                    <Link
                        href="/add-item"
                        className="inline-flex items-center justify-center rounded bg-[#2C2C2C] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4a4a4a] uppercase tracking-wider h-12"
                        style={{ letterSpacing: '1px' }}
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Item
                    </Link>
                </div>

                {/* Grid */}
                {items.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-[#C4B5A0]/30 bg-white p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-[#F5F3F0] rounded-full flex items-center justify-center mb-4">
                            <Plus className="h-6 w-6 text-[#C4B5A0]" />
                        </div>
                        <h3 className="text-lg font-medium text-[#2C2C2C] mb-2">No products found</h3>
                        <p className="text-sm text-[#8B7D6B] mb-6">Start by adding your first smart home device.</p>
                        <Link
                            href="/add-item"
                            className="inline-flex items-center rounded bg-[#C4B5A0] px-4 py-2 text-sm font-medium text-white hover:bg-[#6B4E37] transition-colors"
                        >
                            Create Item
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {items.map((item) => (
                            <ProductCard key={item._id} product={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
