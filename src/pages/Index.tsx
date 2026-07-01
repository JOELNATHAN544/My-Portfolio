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
      <FadeIn direction="up" delay={0.2}>
        <About />
      </FadeIn>
      <FadeIn direction="left" delay={0.1}>
        <Skills />
      </FadeIn>
      <FadeIn direction="right" delay={0.1}>
        <TechStack />
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <Services />
      </FadeIn>
      <FadeIn direction="down" delay={0.1}>
        <Portfolio />
      </FadeIn>
      <FadeIn direction="up" delay={0.3}>
        <Musician />
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <Certifications />
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <Contact />
      </FadeIn>
    </Layout>
  );
};

export default Index;
