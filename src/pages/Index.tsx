import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Musician from "@/components/sections/Musician";
import Contact from "@/components/sections/Contact";
import Certifications from "@/components/sections/Certifications";
import FadeIn from "@/components/animations/FadeIn";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <TechStack />
      </FadeIn>
      <Services />
      <Portfolio />
      <Musician />
      <Certifications />
      <Contact />
    </Layout>
  );
};

export default Index;
