import Link from "next/link";

export const dynamic = "force-dynamic";

async function getItems() {
    // On server components, use absolute URL from request headers is more complex.
    // Easiest: fetch Express directly OR make this a client component.
    // Since you want proxy, we’ll do client-side in the next step if you prefer.
    const res = await fetch(`${process.env.EXPRESS_API_URL}/api/items`, { cache: "no-store" });
    return res.json();
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div style={{ maxWidth: 1100, margin: "40px auto" }}>
            <h1>All Smart Home Items</h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {items.map((item) => (
                    <div key={item._id} style={{ border: "1px solid #ddd", padding: 12 }}>
                        <img
                            src={item.image || "https://via.placeholder.com/600x400?text=Smart+Home"}
                            alt={item.name}
                            style={{ width: "100%", height: 160, objectFit: "cover" }}
                        />
                        <h3>{item.name}</h3>
                        <p>{item.vendorName}</p>
                        <p>৳ {item.price}</p>
                        <Link href={`/items/${item._id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}