import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold text-foreground">Page not found</h2>
          <p className="text-xl text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        <Link to="/">
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth btn-glow">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
