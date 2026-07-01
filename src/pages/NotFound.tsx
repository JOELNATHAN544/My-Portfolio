import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, Home } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <FadeIn className="text-center" direction="up">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full text-primary animate-pulse">
            <AlertCircle className="w-16 h-16" />
          </div>
        </div>
        <h1 className="mb-4 text-7xl font-black text-foreground">404</h1>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Page not found
        </h2>
        <p className="mb-8 text-lg text-muted-foreground mx-auto max-w-[500px]">
          Oops! The page you are looking for at <span className="font-mono text-primary bg-primary/10 px-1 py-0.5 rounded">{location.pathname}</span> doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium shadow-md shadow-primary/20 hover:scale-105 duration-200"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </Link>
      </FadeIn>
    </div>
  );
};

export default NotFound;
