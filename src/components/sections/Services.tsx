import { Palette, LayoutTemplate, Database, Server } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Full-stack website creation from concept to deployment. I build responsive, fast, and accessible web applications.",
      icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating user-centered digital experiences that are intuitive, engaging, and visually appealing.",
      icon: <Palette className="w-8 h-8 text-primary" />,
    },
    {
      title: "Database Design",
      description:
        "Designing efficient, scalable, and secure database architectures optimized for performance and data integrity.",
      icon: <Database className="w-8 h-8 text-primary" />,
    },
    {
      title: "RESTful API Development",
      description:
        "Building high-performance, secure, and well-documented APIs to power your applications and services.",
      icon: <Server className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Delivering high-quality solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-primary/10 w-fit rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
