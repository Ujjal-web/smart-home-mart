import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SmartHome Marketplace",
  description: "Multi-vendor smart home e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}