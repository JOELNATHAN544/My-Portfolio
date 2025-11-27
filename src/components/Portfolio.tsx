import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Cpu, Server } from "lucide-react";
import linksphereImage from "@/assets/linksphere-preview.jpg";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  icon: JSX.Element;
  category: string;
}

const Portfolio = () => {
  const projects = [
    {
      title: "Linksphere",
      description: "A comprehensive web application that enables users to upload and store URL links, share them publicly with the community, and discover links submitted by others. Features a clean, intuitive interface with robust backend architecture.",
      image: linksphereImage,
      technologies: ["React", "Node.js", "PostgreSQL", "RESTful API", "TypeScript"],
      demoLink: "#",
      githubLink: "#",
      icon: <Code className="w-5 h-5 text-primary" />,
      category: "Full Stack"
    },
    {
      title: "System Architecture Design",
      description: "Designed and implemented a scalable microservices architecture for a high-traffic e-commerce platform, reducing response times by 40% and improving system reliability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
      demoLink: "#",
      githubLink: "#",
      icon: <Server className="w-5 h-5 text-blue-500" />,
      category: "DevOps"
    },
    {
      title: "Database Optimization",
      description: "Optimized database queries and schema design for a financial application, resulting in 60% faster query performance and reduced server costs by 35%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["PostgreSQL", "Redis", "Query Optimization", "Indexing"],
      demoLink: "#",
      githubLink: "#",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      category: "Database"
    },
    {
      title: "API Development",
      description: "Developed a high-performance RESTful API with rate limiting, authentication, and comprehensive documentation using OpenAPI/Swagger.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Node.js", "Express", "JWT", "OpenAPI", "Postman"],
      demoLink: "#",
      githubLink: "#",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      category: "Backend"
    },
    {
      title: "Machine Learning Model",
      description: "Trained and deployed a machine learning model using TensorFlow and scikit-learn to predict customer churn, resulting in a 25% reduction in churn rate.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", " NumPy"],
      demoLink: "#",
      githubLink: "#",
      icon: <Code className="w-5 h-5 text-primary" />,
      category: "Machine Learning"
    },
    {
      title: "Web Scraping",
      description: "Developed a web scraping tool using Python and BeautifulSoup to extract data from e-commerce websites, resulting in a 30% increase in sales.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "BeautifulSoup", "Requests", "Pandas"],
      demoLink: "#",
      githubLink: "#",
      icon: <Code className="w-5 h-5 text-primary" />,
      category: "Web Development"
    }
  ];

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Showcasing real-world applications and solutions I've built with modern technologies
            </p>
            
            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Button 
                variant={activeCategory === 'All' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory('All')}
                className="rounded-full"
              >
                All Projects
              </Button>
              {Object.keys(projectsByCategory).map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full flex items-center gap-2"
                >
                  {projects.find(p => p.category === category)?.icon}
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="grid gap-12">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300 group animate-fade-in"
              >
                <div className="grid lg:grid-cols-2 gap-0 lg:gap-8">
                  {/* Project image */}
                  <div className="relative h-64 lg:h-full overflow-hidden bg-secondary">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm">
                        {project.icon}
                        <span className="ml-1.5">{project.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-foreground/80 border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        asChild 
                        variant="outline" 
                        className="gap-2 transition-all hover:bg-primary/10 hover:text-primary"
                        disabled={!project.demoLink || project.demoLink === '#'}
                      >
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={!project.demoLink || project.demoLink === '#' ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                          <ExternalLink className="w-4 h-4" />
                          {project.demoLink && project.demoLink !== '#' ? 'Live Demo' : 'Demo Coming Soon'}
                        </a>
                      </Button>
                      <Button 
                        asChild 
                        className="gap-2 transition-all"
                        variant={project.githubLink && project.githubLink !== '#' ? 'default' : 'outline'}
                        disabled={!project.githubLink || project.githubLink === '#'}
                      >
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={!project.githubLink || project.githubLink === '#' ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                          <Github className="w-4 h-4" />
                          {project.githubLink && project.githubLink !== '#' ? 'View Code' : 'Private Repository'}
                        </a>
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
