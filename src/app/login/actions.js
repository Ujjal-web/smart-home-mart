"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState, formData) {
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");
    const next = String(formData.get("next") || "/items");

    if (!email || !password) {
        return { error: "Email and password are required." };
    }

    if (
        email !== process.env.MOCK_EMAIL ||
        password !== process.env.MOCK_PASSWORD
    ) {
        return { error: "Invalid email or password." };
    }

    const cookieStore = await cookies();
    cookieStore.set("auth_session", JSON.stringify({ email, role: "vendor" }), {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    redirect(next);
}