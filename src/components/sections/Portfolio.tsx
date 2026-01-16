import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A selection of my recent work in full-stack development and system
            design.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              {/* Project Preview */}
              <Link to={`/project/${project.id}`} className={`relative group rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-background ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                  <div className="flex gap-4">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain scale-[1.2] group-hover:scale-[1.25] transition-transform duration-500"
                  />
                </div>
              </Link>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{project.year}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-6">
                  <Link to={`/project/${project.id}`} className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
