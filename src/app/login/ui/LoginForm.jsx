"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { loginAction } from "../actions";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
            {pending ? "Logging in..." : "Login"}
        </button>
    );
}

export default function LoginForm({ nextPath }) {
    const [state, formAction] = useActionState(loginAction, { error: "" });

    return (
        <div className="mx-auto mt-12 max-w-md">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="mt-1 text-sm text-gray-600">
                        Login to add products as a vendor.
                    </p>
                </div>

                {state?.error ? (
                    <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {state.error}
                    </div>
                ) : null}

                <form action={formAction} className="space-y-4">
                    <input type="hidden" name="next" value={nextPath} />

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="vendor@smarthub.com"
                            required
                            className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••"
                            required
                            className="w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <SubmitButton />

                    <p className="text-center text-xs text-gray-500">
                        Go back to{" "}
                        <Link href="/" className="font-medium text-gray-700 hover:text-black">
                            Home
                        </Link>
                        .
                    </p>
                </form>

                <div className="mt-6 rounded-xl bg-gray-50 p-4 text-xs text-gray-600">
                    <p className="font-semibold text-gray-700">Mock Credentials</p>
                    <p>Email: <span className="font-mono">vendor@smarthub.com</span></p>
                    <p>Password: <span className="font-mono">123456</span></p>
                </div>
            </div>
        </div>
    );
}