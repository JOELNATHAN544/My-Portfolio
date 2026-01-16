import { Code, Database, Wind, Terminal, GitMerge, Braces, BrainCircuit, Bot } from 'lucide-react';

const techStack = [
  {
    category: 'Frontend',
    icon: <Code className="w-8 h-8 text-primary" />,
    technologies: [
      { name: 'React', description: 'Building dynamic and responsive user interfaces.' },
      { name: 'TypeScript', description: 'Ensuring type safety and scalability in the frontend.' },
      { name: 'Tailwind CSS', description: 'Rapidly styling modern and visually appealing UIs.' },
    ],
  },
  {
    category: 'Backend',
    icon: <Database className="w-8 h-8 text-primary" />,
    technologies: [
      { name: 'Node.js', description: 'Developing fast and scalable server-side applications.' },
      { name: 'PostgreSQL', description: 'Designing and managing robust relational databases.' },
      { name: 'Java', description: 'Building enterprise-level and performance-critical systems.' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: <Terminal className="w-8 h-8 text-primary" />,
    technologies: [
      { name: 'Terraform', description: 'Automating infrastructure with code for consistency.' },
      { name: 'Linux', description: 'Administering and managing server environments.' },
      { name: 'Git', description: 'Collaborating and versioning code effectively.' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My Tech Stack</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A collection of the primary tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((category) => (
            <div key={category.category} className="p-6 bg-background rounded-lg border border-border shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.technologies.map((tech) => (
                  <div key={tech.name}>
                    <h4 className="font-semibold text-foreground">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
