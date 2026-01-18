import AboutSection from "./components/AboutSection";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";

import WhyChooseUs from "./components/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </main>
  );
}