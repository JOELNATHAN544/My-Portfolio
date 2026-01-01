import { Mail, Phone, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:wankojoelnathan@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "https://wa.me/237659735264",
      label: "WhatsApp",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/joelnathan-wanko",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
                Joel Nathan
              </h3>
              <p className="text-muted-foreground">
                Full-Stack Engineer specializing in system architecture,
                database design, and API development.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Services", "Portfolio", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Joel Nathan Wanko Tchagang. Made with
              <Heart className="w-4 h-4 text-accent fill-accent" />
              and passion for great code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
