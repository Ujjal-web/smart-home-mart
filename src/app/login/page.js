import { loginAction } from "./actions";

export default function LoginPage({ searchParams }) {
    const next = searchParams?.next || "/items";

    return (
        <div style={{ maxWidth: 420, margin: "40px auto" }}>
            <h1>Login</h1>

            <form action={loginAction} style={{ display: "grid", gap: 12 }}>
                <input type="hidden" name="next" value={next} />
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}