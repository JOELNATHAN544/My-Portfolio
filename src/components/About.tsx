import { GraduationCap, Award, Briefcase, Code, Database, Cpu, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "GCE A Level",
      year: "2024",
      institution: "Bilingual Grammar School Molyko, Buea",
      details: [
        "Mathematics",
        "Further Mathematics",
        "Chemistry", 
        "Computer Science",
        "Physics"
      ],
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Full-Stack Development Training",
      year: "2023",
      institution: "GIS Training Center, Bangangté, Cameroon",
      details: [
        "Modern web development technologies",
        "System architecture design",
        "Database management",
        "API development"
      ],
    }
  ];

  const certifications = [
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "LPIC-1",
      issuer: "Linux Professional Institute",
      year: "2023"
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      year: "2023"
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Oracle Certified Associate: Java SE 8 Programmer",
      issuer: "Oracle",
      year: "2022"
    }
  ];

  const skillsOverview = [
    {
      category: "Backend",
      description: "Designing robust, scalable server-side applications with clean architecture"
    },
    {
      category: "Databases",
      description: "Efficient data modeling and optimization for performance and reliability"
    },
    {
      category: "DevOps",
      description: "CI/CD pipelines, containerization, and cloud infrastructure"
    },
    {
      category: "Music",
      description: "Piano composition and music production"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/10">
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
            <div className="space-y-8">
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  My Professional Journey
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a full-stack engineer with a strong foundation in system architecture, database design, and API development. 
                  </p>
                  <p>
                    My artistic background as a musician helps me bring creativity and balance into problem-solving and user experience.
                  </p>
                </div>
              </Card>

              {/* Skills */}
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  What I Bring to the Table
                </h3>

                <div className="grid gap-4">
                  {skillsOverview.map((skill, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mt-0.5">
                        {skill.category === "Music" ? (
                          <Music className="w-5 h-5" />
                        ) : skill.category === "Backend" ? (
                          <Code className="w-5 h-5" />
                        ) : skill.category === "Databases" ? (
                          <Database className="w-5 h-5" />
                        ) : (
                          <Cpu className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.category}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-8">
              
              {/* Education */}
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Training
                </h3>
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-10 pb-6 border-l-2 border-primary/20 last:border-0 last:pb-0">
                      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center -ml-3.5">
                        {item.icon}
                      </div>

                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>

                      <ul className="list-disc list-inside text-sm space-y-1 mt-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-muted-foreground">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Certifications
                </h3>

                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-accent/10 text-accent mt-0.5">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Personal Note */}
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="flex flex-col items-center">
                <Music className="w-8 h-8 text-accent mb-4" />
                <p className="text-lg text-muted-foreground italic">
                  "My journey in technology is deeply intertwined with my love for music. Both require creativity, precision, and structure."
                </p>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

