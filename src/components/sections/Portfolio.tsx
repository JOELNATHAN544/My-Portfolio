import { Github, ExternalLink, Link } from "lucide-react";

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
                        A selection of my recent work in full-stack development and system design.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Project Preview */}
                    <div className="relative group rounded-xl overflow-hidden border border-border shadow-lg aspect-video bg-muted flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div className="flex gap-4">
                                <a href="https://linksphere-98u3.onrender.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/Vitalisn4/LinkSphere" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <img src="/linksphere-icon.png" alt="Linksphere Logo" className="w-32 h-32 object-contain" />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                Web Application
                            </span>
                            <span className="text-muted-foreground text-sm">2024</span>
                        </div>

                        <h3 className="text-3xl font-bold text-foreground">Linksphere App</h3>

                        <p className="text-muted-foreground leading-relaxed">
                            A robust web application designed to simplify link management. Users can upload,
                            store, and organize URL links, share them publicly, and browse a curated feed
                            of links submitted by the community.
                        </p>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground">Key Features:</h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                                <li>Secure user authentication and profile management</li>
                                <li>Public and private link sharing capabilities</li>
                                <li>Real-time link preview generation</li>
                                <li>Responsive design for mobile and desktop</li>
                            </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {["React", "Node.js", "PostgreSQL", "Tailwind CSS", "TypeScript"].map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 pt-6">
                            <a
                                href="https://linksphere-98u3.onrender.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                            >
                                View Demo
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/Vitalisn4/LinkSphere"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all border border-border"
                            >
                                GitHub Repo
                                <Github className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
