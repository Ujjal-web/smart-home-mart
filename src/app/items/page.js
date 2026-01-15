import Link from "next/link";

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
            <div className="rounded-2xl border bg-white p-6">
                <h1 className="text-xl font-bold">Items</h1>
                <p className="mt-2 text-sm text-red-600">
                    Could not load items. Make sure Express is running on port 5000.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">All Products</h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Browse smart home items from multiple vendors.
                    </p>
                </div>

                <Link
                    href="/add-item"
                    className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                >
                    Add Item
                </Link>
            </div>

            {/* Grid */}
            {items.length === 0 ? (
                <div className="rounded-2xl border bg-white p-10 text-center">
                    <p className="text-sm text-gray-600">No items found.</p>
                    <Link
                        href="/add-item"
                        className="mt-4 inline-flex rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                        Create your first item
                    </Link>
                </div>
            ) : (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
                        >
                            {/* Image */}
                            <div className="relative h-44 bg-gray-100">
                                <img
                                    src={
                                        item.image?.trim()
                                            ? item.image
                                            : "https://via.placeholder.com/900x600?text=Smart+Home"
                                    }
                                    alt={item.name}
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                />
                                {/* Category badge */}
                                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur">
                                    {item.category || "Others"}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-3 p-5">
                                <div>
                                    <h3 className="text-base font-semibold leading-snug">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-600">
                                        Vendor:{" "}
                                        <span className="font-medium text-gray-800">
                                            {item.vendorName || "Unknown"}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-lg font-bold">৳ {item.price}</p>
                                    <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                                        {item.brand || "Unknown"}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <Link
                                        href={`/items/${item._id}`}
                                        className="text-sm font-semibold text-gray-900 underline-offset-4 hover:underline"
                                    >
                                        View details
                                    </Link>

                                    <span className="text-xs text-gray-500">
                                        {item.stock !== undefined ? `Stock: ${item.stock}` : ""}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}