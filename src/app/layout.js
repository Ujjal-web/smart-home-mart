import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";
import { Toaster } from "sonner";

export const metadata = {
  title: "SmartHome Marketplace",
  description: "Multi-vendor smart home e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto min-h-screen">
        <AuthProvider>
          <Navbar />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}