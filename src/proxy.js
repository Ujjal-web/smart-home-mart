import { NextResponse } from "next/server";

export function proxy(req) {
    const { pathname, search } = req.nextUrl;

    // 1) Protect the /add-item page
    if (pathname.startsWith("/add-item")) {
        const session = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;
        if (!session) {
            const url = req.nextUrl.clone();
            url.pathname = "/login";
            url.searchParams.set("next", pathname);
            return NextResponse.redirect(url);
        }
    }

    // 2) Protect creating item (POST) through Next origin
    if (pathname === "/api/items" && req.method === "POST") {
        const session = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;
        if (!session) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
    }

    // 3) Proxy /api/items* to Express
    if (pathname.startsWith("/api/items")) {
        const targetUrl = new URL(pathname + search, process.env.EXPRESS_API_URL);
        return NextResponse.rewrite(targetUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/add-item/:path*", "/api/items", "/api/items/:path*"],
};
