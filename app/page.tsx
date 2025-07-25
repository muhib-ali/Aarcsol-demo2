import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroVid from "./components/HeroVid";
import ClientLogoSlider from "./components/ClientLogoSlider";
import Simplified from "./components/Simplified";
import Services from "./components/Services";
import Services2 from "./components/Services2";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <HeroVid/>
       <ClientLogoSlider/>
       <Simplified/>
       <Services/>
       <Services2/>
       <Projects/>
       <Pricing/>
       <Testimonials/>
       <Team/>
       <Faqs/>
       <Contact/>
       <Blog/>
       <Newsletter/>
       <Footer/>
    </div>
  );
}
