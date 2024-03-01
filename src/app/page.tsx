import About from "@/components/home/About";
import HeroSection from "@/components/home/HeroSection";
import ProductDetails from "@/components/home/ProductDetails";
import KlubaTime from "@/components/home/KlubaTime";
import Blog from "@/components/minimals/Blog";
import Footer from "@/components/minimals/Footer";
import Partnairs from "@/components/minimals/Partnairs";
import Testimonies from "@/components/minimals/Testimonies";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <KlubaTime />
      <About />
      <ProductDetails /> 
      <Testimonies />
      <Blog />
      <Partnairs />
      <Footer />

    </main>
  );
}
