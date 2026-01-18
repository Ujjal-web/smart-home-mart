"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";

export default function AddItemPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        // Optional: convert comma-separated -> array (if you later add in server)
        const featuresText = String(formData.get("features") || "").trim();
        const compatibilityText = String(formData.get("compatibility") || "").trim();

        const payload = {
            name: formData.get("name"),
            price: formData.get("price"),
            oldPrice: formData.get("oldPrice"),
            vendorName: formData.get("vendorName"),
            category: formData.get("category"),
            brand: formData.get("brand"),
            image: formData.get("image"),
            description: formData.get("description"),
            stock: formData.get("stock"),
            features: featuresText
                ? featuresText.split(",").map((s) => s.trim()).filter(Boolean)
                : [],
            compatibility: compatibilityText
                ? compatibilityText.split(",").map((s) => s.trim()).filter(Boolean)
                : [],
        };

        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setLoading(false);

        if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            setError(data?.message || "Failed to create item.");
            return;
        }

        // success
        toast.success("Product created successfully!");
        router.push("/items");
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Add New Product</h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Create a new smart home item for your marketplace.
                    </p>
                </div>

                <Link
                    href="/items"
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    ← Back to Items
                </Link>
            </div>

            {/* Card */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
                {error ? (
                    <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Basic Info */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900">Basic Info</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Product identity and vendor information.
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Field label="Product Name" required>
                                <input
                                    name="name"
                                    required
                                    placeholder="e.g. Smart WiFi Bulb"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Price (৳)" required>
                                <input
                                    name="price"
                                    required
                                    type="number"
                                    min="0"
                                    placeholder="e.g. 799"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Old Price (৳)">
                                <input
                                    name="oldPrice"
                                    type="number"
                                    min="0"
                                    placeholder="e.g. 999 (Optional)"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Vendor Name" required>
                                <input
                                    name="vendorName"
                                    required
                                    placeholder="e.g. BrightHome Vendor"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Stock">
                                <input
                                    name="stock"
                                    type="number"
                                    min="0"
                                    placeholder="e.g. 20"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>
                        </div>
                    </div>

                    <hr />

                    {/* Product Details */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900">Product Details</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Category, brand, and product description.
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Field label="Category">
                                <input
                                    name="category"
                                    placeholder="Lighting / Security / Locks / Power ..."
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Brand">
                                <input
                                    name="brand"
                                    placeholder="e.g. HomeLite"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <div className="sm:col-span-2">
                                <Field label="Image URL">
                                    <input
                                        name="image"
                                        placeholder="https://..."
                                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                    />
                                </Field>
                            </div>

                            <div className="sm:col-span-2">
                                <Field label="Description">
                                    <textarea
                                        name="description"
                                        rows={4}
                                        placeholder="Write a short description about the product..."
                                        className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                    />
                                </Field>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Smart Home Extra Info */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-900">Smart Home Info</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Add features and compatibility (comma separated).
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Field label="Features (comma separated)">
                                <input
                                    name="features"
                                    placeholder="Voice control, Timer, Energy saving"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>

                            <Field label="Compatibility (comma separated)">
                                <input
                                    name="compatibility"
                                    placeholder="Alexa, Google Home, HomeKit"
                                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                                />
                            </Field>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                        <Link
                            href="/items"
                            className="rounded-xl border px-4 py-3 text-center text-sm font-semibold hover:bg-gray-50"
                        >
                            Cancel
                        </Link>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Creating..." : "Create Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/** Small helper component for consistent form fields */
function Field({ label, required, children }) {
    return (
        <label className="block">
            <div className="mb-1 flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">{label}</span>
                {required ? (
                    <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-600">
                        Required
                    </span>
                ) : null}
            </div>
            {children}
        </label>
    );
}