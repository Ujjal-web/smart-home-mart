import AboutSection from "./components/AboutSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";

export default function HomePage() {
  return (
    <main className="space-y-28">

      {/* 1. Hero Section */}
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <AboutSection />

      {/* 2. Categories */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Smart Lighting", color: "bg-yellow-100" },
            { name: "Smart Security", color: "bg-red-100" },
            { name: "Smart Appliances", color: "bg-green-100" },
            { name: "Voice Assistants", color: "bg-blue-100" },
            { name: "Smart Sensors", color: "bg-purple-100" },
            { name: "Smart Energy", color: "bg-orange-100" },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} p-8 rounded-xl text-center font-semibold shadow hover:scale-105 transition`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="h-48 bg-gray-100 rounded-t-xl" />
              <div className="p-6">
                <h3 className="font-semibold text-lg">Smart Device {item}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Control your home smarter with advanced automation.
                </p>
                <p className="mt-4 text-indigo-600 font-bold">$199</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-gray-50 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center px-4">
          <div>
            <div className="text-4xl mb-4">🏪</div>
            <p>Vendors list products</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🛒</div>
            <p>Customers browse & compare</p>
          </div>
          <div>
            <div className="text-4xl mb-4">💳</div>
            <p>Secure payment</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🚚</div>
            <p>Fast delivery</p>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose Smart Home Mart
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            "Verified Vendors",
            "Secure Payments",
            "Wide Product Range",
            "24/7 Support",
          ].map((item) => (
            <div key={item} className="p-6 bg-indigo-50 rounded-xl">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Vendor CTA */}
      <section className="bg-indigo-600 text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start Selling Today
        </h2>
        <p className="mb-8">
          Join Smart Home Mart and reach thousands of customers.
        </p>
        <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full">
          Become a Vendor
        </button>
      </section>

      {/* 7. Testimonials (NEW SECTION) */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Amazing product quality and fast delivery!",
            "Best marketplace for smart home devices.",
            "Trusted vendors and smooth checkout process.",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-6"
            >
              <p className="text-gray-600 mb-4">“{review}”</p>
              <p className="font-semibold">— Verified Customer</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-linear-to-r from-purple-600 to-indigo-600 text-white py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get Smart Deals & Updates
        </h2>
        <p className="mb-6">
          Subscribe for exclusive offers and latest smart home tech.
        </p>
        <div className="flex justify-center gap-3">
          <input
            className="p-3 rounded text-black w-64"
            placeholder="Enter your email"
          />
          <button className="px-6 py-3 bg-black rounded">
            Subscribe
          </button>
        </div>
      </section>

    </main>
  );
}