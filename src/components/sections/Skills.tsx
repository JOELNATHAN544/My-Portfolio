import { Code2, Database, Layout, Server, Globe, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["Rust", "Java", "JavaScript", "TypeScript", "C"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["React", "Node.js", "Next.js", "Reveal.js", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    },
    {
      title: "Expertise Areas",
      icon: <Cpu className="w-6 h-6 text-primary" />,
      skills: [
        "System Architecture",
        "Database Design",
        "API Development",
        "Web Development",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A comprehensive toolkit for building robust, scalable, and efficient
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
