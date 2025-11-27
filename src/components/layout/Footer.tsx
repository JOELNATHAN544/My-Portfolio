import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/30 py-12 mt-20 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary mb-2">Joel Nathan</h3>
                    <p className="text-muted-foreground text-sm">
                        Full-Stack Engineer • System Designer • Musician
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/joelnathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/joelnathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:wankojoelnathan@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-center md:text-right text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Joel Nathan Wanko Tchagang.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
