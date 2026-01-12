import Link from "next/link";
import { cookies } from "next/headers";

export default async function Navbar() {
    const cookieStore = await cookies();
    const session = cookieStore.get("auth_session")?.value;

    return (
        <nav>
            <div className="wrap">
                <Link href="/"><b>SmartHome</b></Link>
                <Link href="/items">Items</Link>
                <Link href="/add-item">Add Item</Link>

                <div style={{ marginLeft: "auto" }}>
                    {session ? <Link href="/logout">Logout</Link> : <Link href="/login">Login</Link>}
                </div>
            </div>
        </nav>
    );
}