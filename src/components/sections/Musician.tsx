import { Music } from "lucide-react";

const Musician = () => {
    return (
        <section id="musician" className="py-20 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <Music className="w-8 h-8 text-accent" />
                        The Musician
                    </h2>
                    <div className="w-20 h-1.5 bg-accent rounded-full"></div>
                    <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-relaxed">
                        Beyond the world of code and architecture, I am deeply passionate about music.
                        I have dedicated time to learning and practicing music, which serves as both a creative outlet
                        and a source of inspiration for my technical work.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Musician;
