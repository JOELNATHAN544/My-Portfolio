import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6 text-center md:text-left animate-in slide-in-from-left duration-700">
                    <div className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-2">
                        Full-Stack Engineer & System Designer
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                        Joel Nathan <br />
                        <span className="text-primary">Wanko Tchagang</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                        Building scalable systems, designing efficient databases, and crafting
                        high-performance APIs. Blending technical depth with artistic creativity.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all border border-border"
                        >
                            Download CV
                            <Download className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Profile Picture */}
                <div className="flex justify-center md:justify-end animate-in slide-in-from-right duration-700 delay-200">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                        <div className="absolute inset-4 border-2 border-accent/20 rounded-full animate-spin-reverse-slow" style={{ animationDuration: '20s' }}></div>
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-muted flex items-center justify-center">
                            {/* Placeholder for Profile Picture */}
                            <div className="text-center p-6">
                                <span className="text-6xl">👨‍💻</span>
                                <p className="text-sm text-muted-foreground mt-2">Profile Picture</p>
                            </div>
                            {/* Uncomment and use actual image when available */}
                            {/* <img src="/profile.jpg" alt="Joel Nathan" className="w-full h-full object-cover" /> */}
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border border-border animate-bounce-slow">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-sm font-medium">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
