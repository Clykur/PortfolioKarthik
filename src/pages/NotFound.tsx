import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <Helmet>
        <title>404 — Page Not Found | Karthik Naramala</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to Karthik Naramala's portfolio homepage."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-md mx-auto space-y-5">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">
          Error 404
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Page not found
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed">
          The link you followed may be broken or the page has moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors subtle-ring"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium text-foreground border border-border hover:border-foreground/30 hover:bg-secondary/40 transition-colors subtle-ring"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-muted-foreground" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
