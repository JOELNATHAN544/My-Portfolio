import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Musician from "@/components/sections/Musician";
import Contact from "@/components/sections/Contact";
import Certifications from "@/components/sections/Certifications";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Musician />
      <Certifications />
      <Contact />
    </Layout>
  );
};

export default Index;
