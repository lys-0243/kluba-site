import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import ProductDetails from "@/components/home/ProductDetails";
import KlubaTime from "@/components/home/KlubaTime";
import Blog from "@/components/minimals/Blog";
import Footer from "@/components/minimals/Footer";
import Partnairs from "@/components/minimals/Partnairs";
import Testimonies from "@/components/minimals/Testimonies";
import Image from "next/image";
import OnTopScroll from "@/components/minimals/OnTop";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <KlubaTime />
      <About />
      <ProductDetails />
      <Testimonies />
      <Blog />
      {/* <OnTopScroll /> */}

      <Partnairs />
      <Footer />
    </main>
  );
}
