"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData) {
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const next = String(formData.get("next") || "/items");

    if (email !== process.env.MOCK_EMAIL || password !== process.env.MOCK_PASSWORD) {
        return { ok: false, message: "Invalid email or password" };
    }

    cookies().set("auth_session", JSON.stringify({ email, role: "vendor" }), {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24,
    });

    redirect(next);
}