import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function getItem(id) {
    const res = await fetch(`${process.env.EXPRESS_API_URL}/api/items/${id}`, {
        cache: "no-store",
    });

    // handle invalid ObjectId (400) + not found (404)
    if (res.status === 404 || res.status === 400) return null;

    if (!res.ok) {
        // helps debugging
        const text = await res.text().catch(() => "");
        throw new Error(`Failed to fetch item: ${res.status} ${text}`);
    }

    return res.json();
}

function Badge({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
            {children}
        </span>
    );
}

export default async function ItemDetailsPage({ params }) {
    // ✅ Next 16: params may be a Promise
    const { id } = await params;

    const item = await getItem(id);
    if (!item) notFound();

    const image =
        item.image?.trim() ||
        "https://placehold.co/1200x800?text=Smart+Home+Product";

    return (
        <div className="space-y-6">
            {/* Top bar */}
            <div className="flex items-center justify-between">
                <Link
                    href="/items"
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    ← Back to items
                </Link>

                <Link
                    href="/add-item"
                    className="rounded-xl border px-4 py-2.5 text-sm font-semibold hover:bg-gray-50"
                >
                    Add Item
                </Link>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
                <div className="grid gap-0 lg:grid-cols-2">
                    {/* Image */}
                    <div className="bg-gray-100">
                        <img
                            src={image}
                            alt={item.name}
                            className="h-full max-h-130 w-full object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="p-6 lg:p-8">
                        <div className="flex flex-wrap gap-2">
                            <Badge>{item.category || "Others"}</Badge>
                            <Badge>{item.brand || "Unknown brand"}</Badge>
                            {item.vendorName ? <Badge>{item.vendorName}</Badge> : null}
                        </div>

                        <h1 className="mt-4 text-2xl font-bold tracking-tight">
                            {item.name}
                        </h1>

                        <p className="mt-3 text-sm text-gray-600">
                            {item.description || "No description provided."}
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <p className="text-3xl font-bold">৳ {item.price}</p>
                            </div>

                            {item.stock !== undefined ? (
                                <div className="rounded-xl bg-gray-50 px-4 py-3 text-sm">
                                    <p className="text-gray-500">Availability</p>
                                    <p className="font-semibold text-gray-900">
                                        {Number(item.stock) > 0
                                            ? `In stock (${item.stock})`
                                            : "Out of stock"}
                                    </p>
                                </div>
                            ) : null}
                        </div>

                        {/* Compatibility */}
                        {Array.isArray(item.compatibility) && item.compatibility.length > 0 ? (
                            <div className="mt-7">
                                <h2 className="text-sm font-semibold text-gray-900">
                                    Compatibility
                                </h2>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {item.compatibility.map((c) => (
                                        <span
                                            key={c}
                                            className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white"
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        {/* Features */}
                        {Array.isArray(item.features) && item.features.length > 0 ? (
                            <div className="mt-7">
                                <h2 className="text-sm font-semibold text-gray-900">Features</h2>
                                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
                                    {item.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}

                        {/* Meta */}
                        <div className="mt-8 grid gap-3 rounded-xl bg-gray-50 p-4 text-sm text-gray-700 sm:grid-cols-2">
                            <div>
                                <p className="text-xs font-semibold text-gray-500">Vendor</p>
                                <p className="font-medium">{item.vendorName || "Unknown"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500">Category</p>
                                <p className="font-medium">{item.category || "Others"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500">Brand</p>
                                <p className="font-medium">{item.brand || "Unknown"}</p>
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-gray-500">Item ID</p>
                                <p className="font-mono text-xs">{String(item._id)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}