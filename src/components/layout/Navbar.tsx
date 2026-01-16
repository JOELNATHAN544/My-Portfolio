import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to allow the page to change
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <Code2 className="w-8 h-8" />
          <span className="hidden sm:inline">Wanko Joel Nathan</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.href.startsWith('/')) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Resume
          </a>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-accordion-down">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              if (link.href.startsWith('/')) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-lg"
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-center font-medium"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;