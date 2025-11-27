import { Card } from "@/components/ui/card";
import { Code2, Layers, Database, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["Rust", "Java", "JavaScript", "TypeScript", "C"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["React", "Node.js", "Next.js", "Reveal.js"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: ["PostgreSQL", "Database Design", "Query Optimization"],
    },
    {
      title: "Expertise Areas",
      icon: Globe,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: ["System Architecture", "API Design", "Full-Stack Development", "UI/UX Design"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="gradient-hero bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`${category.bgColor} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mt-2">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Continuously learning and expanding my skill set to stay at the forefront of technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
