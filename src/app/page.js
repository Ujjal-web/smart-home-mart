import AboutSection from "./components/AboutSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <main className="space-y-28">

      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <AboutSection />
      <Testimonials />
      <Newsletter />

    </main>
  );
}