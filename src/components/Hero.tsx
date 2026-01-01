import { Button } from "@/components/ui/button";
import { Code2, Music, ArrowRight } from "lucide-react";
import profileImage from "@/assets/joel-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-lg bg-accent/10 rotate-45 animate-float-delayed" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full bg-primary/5 animate-float" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-lg bg-accent/5 rotate-12 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Code2 className="w-4 h-4" />
              <span>Available for new projects</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Joel Nathan
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Wanko Tchagang
              </h2>
              <div className="flex flex-wrap gap-3 text-lg text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Full-Stack Engineer
                </span>
                <span>•</span>
                <span>System & API Designer</span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-accent" />
                  Musician
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Specialized in building scalable systems, architecting robust
              databases, and designing high-performance APIs. I blend technical
              precision with creative thinking to deliver exceptional digital
              solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gradient-hero hover:shadow-glow transition-all duration-300 group"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </Button>
            </div>
          </div>

          {/* Right content - Profile Image */}
          <div className="relative lg:ml-auto animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-72 h-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />

              {/* Profile image container */}
              <div className="relative rounded-full overflow-hidden shadow-glow border-8 border-background aspect-square">
                <img
                  src={profileImage}
                  alt="Joel Nathan Wanko Tchagang"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-soft border border-border animate-fade-in">
                <div className="text-4xl font-bold gradient-hero bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
