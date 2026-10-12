import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Portfolio />
        <Testimonial />
        <Faq />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
