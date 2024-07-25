import About from "@/components/About";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className='scroll-smooth relative flex overflow-x-hidden flex-col justify-center items-center mx-auto'>
      <FloatingNav
        className='bg-[#252a2b]/[0.5] backdrop-blur-[4px] border-[#fe0c1a]/[0.5] font-bold text-[#fe0c1a]'
        navItems={[
          {
            name: "О нас",
            link: "#about",
          },
          {
            name: "Галлерея",
            link: "#gallery",
          },
          {
            name: "Отзывы",
            link: "#testimonials",
          },
        ]}
      />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
