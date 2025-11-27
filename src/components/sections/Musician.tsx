import { Music, Play, Pause, Disc } from "lucide-react";
import { useState } from "react";

const Musician = () => {
    const [isPlaying, setIsPlaying] = useState<number | null>(null);

    const tracks = [
        { id: 1, title: "Midnight Coding", duration: "3:45", genre: "Lo-Fi / Jazz" },
        { id: 2, title: "System Flow", duration: "4:20", genre: "Electronic" },
        { id: 3, title: "Database Grooves", duration: "3:10", genre: "Funk" },
    ];

    const togglePlay = (id: number) => {
        if (isPlaying === id) {
            setIsPlaying(null);
        } else {
            setIsPlaying(id);
        }
    };

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
                    <p className="text-muted-foreground mt-4 max-w-2xl">
                        When I'm not architecting systems, I'm composing rhythms. Music is my creative outlet and fuels my engineering mindset.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visualizer / Album Art */}
                    <div className="relative aspect-square max-w-md mx-auto w-full bg-card rounded-2xl border border-border shadow-2xl flex items-center justify-center overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-50'}`}></div>

                        {/* Vinyl Record Animation */}
                        <div className={`relative w-64 h-64 rounded-full bg-black border-8 border-gray-800 shadow-xl flex items-center justify-center transition-transform duration-[3s] ${isPlaying ? 'animate-spin-slow' : ''}`}>
                            <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50" style={{ margin: '10px' }}></div>
                            <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50" style={{ margin: '20px' }}></div>
                            <div className="absolute inset-0 rounded-full border border-gray-700 opacity-50" style={{ margin: '30px' }}></div>

                            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center relative overflow-hidden">
                                <Disc className="w-12 h-12 text-accent-foreground opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/30"></div>
                            </div>
                        </div>

                        {/* Audio Bars Animation (Only visible when playing) */}
                        {isPlaying && (
                            <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 p-4 opacity-50">
                                {[...Array(20)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-2 bg-primary rounded-t-sm animate-music-bar"
                                        style={{
                                            height: `${Math.random() * 100}%`,
                                            animationDelay: `${i * 0.05}s`,
                                            animationDuration: '0.8s'
                                        }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tracks List */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">Latest Compositions</h3>
                        <div className="space-y-4">
                            {tracks.map((track) => (
                                <div
                                    key={track.id}
                                    className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${isPlaying === track.id
                                            ? "bg-primary/10 border-primary shadow-md"
                                            : "bg-card border-border hover:border-primary/50 hover:shadow-sm"
                                        }`}
                                    onClick={() => togglePlay(track.id)}
                                >
                                    <div className="flex items-center gap-4">
                                        <button
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isPlaying === track.id
                                                    ? "bg-primary text-primary-foreground"
                                                    : "bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                                                }`}
                                        >
                                            {isPlaying === track.id ? (
                                                <Pause className="w-4 h-4" />
                                            ) : (
                                                <Play className="w-4 h-4 ml-1" />
                                            )}
                                        </button>
                                        <div>
                                            <h4 className={`font-semibold ${isPlaying === track.id ? "text-primary" : "text-foreground"}`}>
                                                {track.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground">{track.genre}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-muted-foreground font-mono">{track.duration}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground italic">
                                * Audio preview mode. Full tracks available on streaming platforms soon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Musician;
