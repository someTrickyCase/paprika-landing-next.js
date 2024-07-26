import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className='relative flex overflow-x-hidden flex-col justify-center items-center mx-auto'>
      <FloatingNav
        className='bg-gray/[0.5] backdrop-blur-[4px] border-red/[0.5] font-bold text-red'
        navItems={navItems}
      />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
