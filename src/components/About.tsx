import { GraduationCap, Award, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      title: "GCE A Level",
      year: "2024",
      details: "Mathematics, Further Mathematics, Chemistry, Computer Science, Physics",
    },
  ];

  const certifications = [
    "LPIC (Linux Professional Institute Certification)",
    "HashiCorp Terraform Certification",
    "Oracle Java Certification",
  ];

  const training = {
    title: "Full-Stack Development Training",
    institution: "GIS Training Center, Bangangté, Cameroon",
    description: "Comprehensive training in modern web development technologies and practices",
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-hero bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack engineer with a passion for building robust systems and a creative soul
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a full-stack engineer who specializes in the intricate art of 
                    <span className="text-primary font-semibold"> system architecture</span>, 
                    <span className="text-primary font-semibold"> database management</span>, and 
                    <span className="text-primary font-semibold"> API design</span>. 
                    My approach combines technical precision with creative problem-solving.
                  </p>
                  <p>
                    Beyond the world of code, I'm also a musician, bringing the same dedication 
                    to harmony and rhythm that I apply to elegant code and efficient systems. 
                    This unique blend allows me to approach challenges from multiple perspectives, 
                    creating solutions that are both technically sound and creatively inspired.
                  </p>
                  <p>
                    I believe in building systems that scale, databases that perform, and 
                    APIs that developers love to work with. Every project is an opportunity 
                    to craft something exceptional.
                  </p>
                </div>
              </Card>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              {/* Education */}
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-lg">{edu.title}</h4>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.details}</p>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold mb-2">{training.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{training.institution}</p>
                    <p className="text-sm text-muted-foreground">{training.description}</p>
                  </div>
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  Professional Certifications
                </h3>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
