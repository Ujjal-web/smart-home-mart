"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { User, LogOut } from "lucide-react";

export default function UserNav() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div className="h-9 w-20 animate-pulse rounded bg-gray-200"></div>;
    }

    if (session) {
        return (
            <div className="flex items-center gap-4">
                <Link href="/add-item">
                    <Button
                        variant="ghost"
                        className="text-sm uppercase tracking-wider text-[#2C2C2C] hover:text-[#C4B5A0] hover:bg-transparent transition-colors p-0"
                        style={{ letterSpacing: '1px' }}
                    >
                        Add Item
                    </Button>
                </Link>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="hidden text-sm font-medium text-[#2C2C2C] lg:block">
                    {session.user?.name}
                </span>
                <Button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    variant="ghost"
                    className="text-sm uppercase tracking-wider text-[#2C2C2C] hover:text-[#C4B5A0] hover:bg-transparent transition-colors p-0"
                    style={{ letterSpacing: '1px' }}
                >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </Button>
            </div>
        );
    }

    return (
        <Link href="/login">
            <Button
                className="text-sm uppercase tracking-wider bg-[#C4B5A0] text-[#FAF9F7] hover:bg-[#6B4E37] transition-all duration-300 px-6 py-5 rounded"
                style={{ letterSpacing: '1px' }}
            >
                Login
            </Button>
        </Link>
    );
}
