import { useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import NotFound from './NotFound';
import Layout from '@/components/layout/Layout';
import { Github, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.category} - {project.year}</p>
            </div>

            <div className="mb-12">
              <img src={project.image} alt={project.title} className="w-full rounded-lg border border-border shadow-lg" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">{project.description}</p>
              <p>{project.longDescription}</p>

              <h3 className="font-semibold text-foreground">Key Features:</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="font-semibold text-foreground">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-12">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                View Demo
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all border border-border">
                GitHub Repo
                <Github className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
