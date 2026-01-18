"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function LoginForm({ nextPath }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleCredentialsLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password.");
                setLoading(false);
            } else {
                router.push(nextPath || "/items");
                router.refresh();
            }
        } catch (error) {
            setError("Something went wrong.");
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        await signIn("google", { callbackUrl: nextPath || "/items" });
    };

    return (
        <div className="mx-auto mt-24 max-w-md px-4">
            <div className="rounded-2xl border border-[#F5F3F0] bg-white p-8 shadow-sm">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-light text-[#2C2C2C]" style={{ fontFamily: 'serif' }}>Welcome Back</h1>
                    <p className="mt-2 text-sm text-[#8B7D6B]">
                        Sign in to manage your smart home.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <form onSubmit={handleCredentialsLogin} className="space-y-5">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[#8B7D6B] font-medium" style={{ letterSpacing: '1px' }}>Email</label>
                        <input
                            name="email"
                            type="email"
                            defaultValue="test@example.com"
                            required
                            className="w-full rounded-lg border border-[#E5E0D8] px-4 py-3 text-sm outline-none focus:border-[#C4B5A0] focus:ring-1 focus:ring-[#C4B5A0] transition-all bg-[#FAF9F7]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-wider text-[#8B7D6B] font-medium" style={{ letterSpacing: '1px' }}>Password</label>
                        <input
                            name="password"
                            type="password"
                            defaultValue="1234"
                            required
                            className="w-full rounded-lg border border-[#E5E0D8] px-4 py-3 text-sm outline-none focus:border-[#C4B5A0] focus:ring-1 focus:ring-[#C4B5A0] transition-all bg-[#FAF9F7]"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-[#2C2C2C] px-4 py-3.5 text-sm font-medium text-white transition hover:bg-[#4a4a4a] disabled:cursor-not-allowed disabled:opacity-70 uppercase tracking-wider"
                        style={{ letterSpacing: '1px' }}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" /> Signing In...
                            </span>
                        ) : (
                            "Sign In with Email"
                        )}
                    </button>
                </form>

                <div className="my-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-[#F5F3F0]"></div>
                    <span className="text-xs text-[#8B7D6B] uppercase tracking-wider">or</span>
                    <div className="h-px flex-1 bg-[#F5F3F0]"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="w-full rounded-lg border border-[#E5E0D8] bg-white px-4 py-3.5 text-sm font-medium text-[#2C2C2C] transition hover:bg-[#FAF9F7] disabled:opacity-70 flex items-center justify-center gap-3"
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Continue with Google
                </button>

                <div className="mt-8 rounded-lg bg-[#FAF9F7] p-5 border border-[#F5F3F0]">
                    <p className="text-xs font-semibold text-[#2C2C2C] uppercase tracking-wider mb-2">Mock Credentials</p>
                    <div className="space-y-1 text-sm text-[#8B7D6B]">
                        <p className="flex justify-between"><span>Email:</span> <span className="font-mono text-[#2C2C2C]">test@example.com</span></p>
                        <p className="flex justify-between"><span>Password:</span> <span className="font-mono text-[#2C2C2C]">1234</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}