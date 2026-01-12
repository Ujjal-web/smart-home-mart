"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const form = new FormData(e.currentTarget);
        const payload = Object.fromEntries(form.entries());

        const res = await fetch("/api/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        setLoading(false);

        if (!res.ok) {
            alert("Unauthorized or failed to create item");
            return;
        }

        alert("Item created!");
        router.push("/items");
    }

    return (
        <div style={{ maxWidth: 720, margin: "40px auto" }}>
            <h1>Add Item (Protected)</h1>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
                <input name="name" placeholder="Product name" required />
                <input name="price" type="number" placeholder="Price" required />
                <input name="vendorName" placeholder="Vendor name" required />
                <input name="category" placeholder="Category (Lighting/Security...)" />
                <input name="brand" placeholder="Brand" />
                <input name="image" placeholder="Image URL" />
                <textarea name="description" placeholder="Description" />
                <button disabled={loading} type="submit">
                    {loading ? "Creating..." : "Create"}
                </button>
            </form>
        </div>
    );
}