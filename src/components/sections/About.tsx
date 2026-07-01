import { BookOpen, Award, Code } from "lucide-react";

const About = () => {
  const careerStartDate = new Date('2024-01-01');
  const today = new Date();    
  const yearsOfExperience = today.getFullYear() - careerStartDate.getFullYear();
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              The Engineer & Artist
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Full-Stack Engineer specializing in system
              architecture, database management, and API design. My journey in
              technology is driven by a desire to build scalable, efficient, and
              secure digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond code, I am a musician. This artistic background influences
              my engineering approach—bringing creativity, rhythm, and harmony
              to the systems I design. I believe that great software, like great
              music, requires structure, flow, and attention to detail.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                <h4 className="font-bold text-2xl text-primary">{yearsOfExperience}</h4>
                <p className="text-sm text-muted-foreground">{yearsOfExperience === 1 ? 'Year' : 'Years'} Experience</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border shadow-sm">
                <h4 className="font-bold text-2xl text-accent">10+</h4>
                <p className="text-sm text-muted-foreground">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                Education
              </h3>
              <div className="relative border-l-2 border-border ml-3 pl-8 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[39px] w-5 h-5 rounded-full border-4 border-background bg-primary"></div>
                  <h4 className="font-bold text-lg">Full-Stack Training</h4>
                  <p className="text-primary text-sm mb-1">
                    GIS Training Center, Bangangté
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Intensive training in modern web development, system design,
                    and database management.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[39px] w-5 h-5 rounded-full border-4 border-background bg-primary"></div>
                  <h4 className="font-bold text-lg">GCE A Level</h4>
                  <p className="text-primary text-sm mb-1">2024</p>
                  <p className="text-muted-foreground text-sm">
                    Mathematics, Further Mathematics, Chemistry, Computer
                    Science, and Physics.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">
                      Certified Terraform Associate 003
                    </h4>
                    <p className="text-xs text-muted-foreground">HashiCorp</p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Nov 2025
                  </span>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">
                      Certified Linux Administrator (LPIC-1)
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Linux Professional Institute
                    </p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Dec 2024
                  </span>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold">
                      Java Foundations Certified Junior Associate
                    </h4>
                    <p className="text-xs text-muted-foreground">Oracle</p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Jun 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
