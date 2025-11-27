import { Card } from "@/components/ui/card";
import { Globe, Palette, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Full-stack website creation from beautiful frontend interfaces to robust backend systems. Crafting responsive, performant web applications that users love.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered digital experiences that combine aesthetics with functionality. Creating intuitive interfaces that enhance user engagement and satisfaction.",
      features: ["User Research", "Wireframing", "Interactive Prototypes"],
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient, scalable database architecture tailored to your needs. Designing data models that ensure integrity, performance, and easy maintenance.",
      features: ["Schema Design", "Query Optimization", "Data Migration"],
    },
    {
      icon: Zap,
      title: "RESTful API Development",
      description: "High-performance and secure APIs that power modern applications. Building robust interfaces that seamlessly connect your frontend and backend systems.",
      features: ["REST Architecture", "Authentication", "Documentation"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-hero bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 shadow-soft hover:shadow-glow transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">
                    <div className="inline-block p-4 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 mb-4">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
