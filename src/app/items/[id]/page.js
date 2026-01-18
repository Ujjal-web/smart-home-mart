import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingCart, Check, Shield, Truck, Package } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const dynamic = "force-dynamic";

async function getItem(id) {
    const res = await fetch(`${process.env.EXPRESS_API_URL}/api/items/${id}`, {
        cache: "no-store",
    });

    if (res.status === 404 || res.status === 400) return null;

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Failed to fetch item: ${res.status} ${text}`);
    }

    return res.json();
}

function Badge({ children, variant = "default" }) {
    const styles = {
        default: "bg-[#F5F3F0] text-[#8B7D6B] border-[#E5E0D8]",
        dark: "bg-[#2C2C2C] text-[#FAF9F7] border-[#2C2C2C]",
        accent: "bg-[#C4B5A0]/10 text-[#C4B5A0] border-[#C4B5A0]/20"
    };

    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${styles[variant]}`} style={{ letterSpacing: '0.5px' }}>
            {children}
        </span>
    );
}

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) notFound();

    const image = item.image?.trim() || "https://placehold.co/1200x800?text=Smart+Home+Product";

    return (
        <div className="min-h-screen bg-[#FAF9F7] pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navigation */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/items"
                        className="inline-flex items-center text-sm font-medium text-[#8B7D6B] hover:text-[#C4B5A0] transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Products
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-[#F5F3F0] overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative bg-[#F5F3F0] aspect-square lg:aspect-auto">
                            <img
                                src={image}
                                alt={item.name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6 flex flex-wrap gap-2">
                                <Badge variant="accent">{item.category || "General"}</Badge>
                                {item.stock > 0 ? (
                                    <Badge variant="default">In Stock</Badge>
                                ) : (
                                    <Badge variant="dark">Out of Stock</Badge>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-4xl font-light text-[#2C2C2C] mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
                                {item.name}
                            </h1>

                            <div className="flex items-center gap-2 mb-6 text-[#8B7D6B] text-sm md:text-base">
                                <span className="font-medium text-[#2C2C2C]">{item.vendorName || "Smart Nest"}</span>
                                <span>•</span>
                                <span>{item.brand || "Brand"}</span>
                            </div>

                            <div className="flex items-end gap-4 mb-8">
                                <span className="text-3xl md:text-4xl font-semibold text-[#2C2C2C]">$ {item.price}</span>
                                {item.oldPrice && (
                                    <span className="text-lg text-[#8B7D6B] line-through mb-1.5">$ {item.oldPrice}</span>
                                )}
                            </div>

                            <p className="text-[#8B7D6B] leading-relaxed mb-8 text-lg">
                                {item.description || "Experience the future of smart living with this premium device. Designed for seamless integration and effortless control."}
                            </p>

                            {/* Features */}
                            {Array.isArray(item.features) && item.features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-sm font-semibold text-[#2C2C2C] uppercase tracking-wider mb-4" style={{ letterSpacing: '1px' }}>
                                        Key Features
                                    </h3>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {item.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-[#8B7D6B]">
                                                <Check className="h-4 w-4 text-[#C4B5A0] mr-2 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8 pt-6 border-t border-[#F5F3F0]">
                                <Button className="flex-1 bg-[#2C2C2C] hover:bg-[#4a4a4a] text-white h-12 uppercase tracking-wider" style={{ letterSpacing: '1px' }}>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Add to Cart
                                </Button>
                            </div>

                            {/* Value Props */}
                            <div className="grid grid-cols-3 gap-4 border-t border-[#F5F3F0] pt-6">
                                <div className="text-center">
                                    <div className="w-10 h-10 mx-auto bg-[#F5F3F0] rounded-full flex items-center justify-center mb-2">
                                        <Truck className="h-5 w-5 text-[#C4B5A0]" />
                                    </div>
                                    <p className="text-xs font-medium text-[#2C2C2C]">Free Shipping</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 mx-auto bg-[#F5F3F0] rounded-full flex items-center justify-center mb-2">
                                        <Shield className="h-5 w-5 text-[#C4B5A0]" />
                                    </div>
                                    <p className="text-xs font-medium text-[#2C2C2C]">2 Year Warranty</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 mx-auto bg-[#F5F3F0] rounded-full flex items-center justify-center mb-2">
                                        <Package className="h-5 w-5 text-[#C4B5A0]" />
                                    </div>
                                    <p className="text-xs font-medium text-[#2C2C2C]">Secure Packaging</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details (Compatibility / Specs) */}
                    {(Array.isArray(item.compatibility) && item.compatibility.length > 0) && (
                        <div className="bg-[#FAF9F7] p-8 lg:p-12 border-t border-[#F5F3F0]">
                            <h3 className="text-lg font-light text-[#2C2C2C] mb-6" style={{ fontFamily: 'serif' }}>
                                Compatibility & Specs
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {item.compatibility.map((tech, idx) => (
                                    <span key={idx} className="inline-flex items-center px-4 py-2 rounded bg-white border border-[#E5E0D8] text-sm text-[#8B7D6B]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}