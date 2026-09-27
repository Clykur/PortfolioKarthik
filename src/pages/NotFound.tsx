import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-4 text-center">
      <Helmet>
        <title>404 — Page Not Found | Karthik Naramala</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Karthik Naramala's software engineering portfolio homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-md mx-auto p-8 rounded-2xl bg-card border border-border shadow-elevated animate-fade-in">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider rounded-full bg-destructive/10 text-destructive border border-destructive/20">
          Error 404
        </span>

        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
          The link you followed may be broken or the page may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="glow-primary text-xs sm:text-sm h-10 px-5">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="text-xs sm:text-sm h-10 px-5 border-border hover:bg-secondary/50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
