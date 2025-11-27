import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import linksphereImage from "@/assets/linksphere-preview.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Linksphere App",
      description: "A comprehensive web application that enables users to upload and store URL links, share them publicly with the community, and discover links submitted by others. Features a clean, intuitive interface with robust backend architecture.",
      image: linksphereImage,
      technologies: ["React", "Node.js", "PostgreSQL", "RESTful API"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing real-world applications built with modern technologies
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group animate-fade-in"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project image */}
                  <div className="relative overflow-hidden bg-secondary">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project details */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 self-start">
                      Featured Project
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4">
                      <Button className="gradient-hero hover:shadow-glow transition-all duration-300 group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        View Demo
                      </Button>
                      <Button variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Coming soon message */}
          <div className="mt-12 text-center">
            <Card className="p-8 shadow-soft">
              <h3 className="text-xl font-semibold mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">
                I'm constantly working on new and exciting projects. Check back soon for updates!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
