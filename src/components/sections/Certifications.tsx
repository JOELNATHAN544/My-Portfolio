import { Award } from "lucide-react";

const certifications = [
  {
    name: "LPIC-1",
    file: "/certifications/LPIC-1 (1).pdf",
  },
  {
    name: "Terraform Associate",
    file: "/certifications/TerraformAssociate00320251120-31-a6rww2-1 (1).pdf",
  },
  {
    name: "eCertificate",
    file: "/certifications/eCertificate (1).pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Here are some of my professional certifications.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:bg-secondary/50 transition-colors duration-300"
                >
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-medium text-foreground">{cert.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
