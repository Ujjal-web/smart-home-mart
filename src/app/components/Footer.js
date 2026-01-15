export default function Footer() {
    return (
        <footer className="mt-12 border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
                © {new Date().getFullYear()} SmartHome Marketplace. All rights reserved.
            </div>
        </footer>
    );
}