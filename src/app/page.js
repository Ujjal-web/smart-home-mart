import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Smart Home Marketplace</h1>
      <p>Browse smart home products from verified vendors.</p>
      <Link href="/items">Go to Items</Link>
    </div>
  );
}