export const dynamic = "force-dynamic";

async function getItem(id) {
    const res = await fetch(`${process.env.EXPRESS_API_URL}/api/items/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    return res.json();
}

export default async function ItemDetailsPage({ params }) {
    const item = await getItem(params.id);

    if (!item) {
        return <div style={{ maxWidth: 800, margin: "40px auto" }}>Item not found</div>;
    }

    return (
        <div style={{ maxWidth: 800, margin: "40px auto" }}>
            <h1>{item.name}</h1>
            <img
                src={item.image || "https://via.placeholder.com/900x500?text=Smart+Home"}
                alt={item.name}
                style={{ width: "100%", height: 320, objectFit: "cover" }}
            />
            <p><b>Vendor:</b> {item.vendorName}</p>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Brand:</b> {item.brand}</p>
            <p><b>Price:</b> ৳ {item.price}</p>
            <p>{item.description}</p>
        </div>
    );
}