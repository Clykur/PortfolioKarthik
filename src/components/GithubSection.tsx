import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
}

const fallbackRepos: GitHubRepo[] = [
  {
    name: "CusOwn",
    description: "Production multi-tenant booking & scheduling infrastructure with realtime slot orchestration.",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    url: "https://github.com/Clykur/CusOwn",
    homepage: "https://cusown.clykur.com",
  },
  {
    name: "LedgerOS",
    description: "Financial operating system with runway forecasting, scenario simulators, and PDF generation.",
    language: "TypeScript",
    stars: 4,
    forks: 1,
    url: "https://github.com/Clykur/LedgerOS",
    homepage: "https://ledgeros.clykur.com",
  },
  {
    name: "React-Applications",
    description: "Modular React frontend systems, architectural custom hooks, and dynamic client state structures.",
    language: "TypeScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/React-Applications",
  },
  {
    name: "nev-phygital-library",
    description: "Smart library ecosystem fusing physical book RFID telemetry with interactive floor maps and Gemini AI.",
    language: "TypeScript",
    stars: 3,
    forks: 0,
    url: "https://github.com/Clykur/nev-phygital-library",
    homepage: "https://nev-phygital-library.vercel.app",
  },
];

export const GithubSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchRepos = async () => {
      try {
        setLoading(true);

        const cached = localStorage.getItem("github_repos_cache");
        const cacheTimestamp = localStorage.getItem("github_repos_timestamp");

        if (cached && cacheTimestamp) {
          const isFresh = Date.now() - parseInt(cacheTimestamp, 10) < 3600000;
          if (isFresh) {
            const parsed = JSON.parse(cached);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setRepos(parsed);
              setLoading(false);
              return;
            }
          }
        }

        const response = await fetch(
          "https://api.github.com/users/karthiknaramala9949/repos?sort=updated&per_page=8",
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );

        if (!response.ok) throw new Error("Rate limit");

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          interface RawRepo {
            name: string;
            description: string | null;
            language: string | null;
            stargazers_count: number;
            forks_count: number;
            html_url: string;
            homepage: string | null;
            fork: boolean;
          }

          const formatted: GitHubRepo[] = data
            .filter((r: RawRepo) => !r.fork || r.stargazers_count > 0)
            .map((r: RawRepo) => ({
              name: r.name,
              description: r.description || "Open source repository.",
              language: r.language || "TypeScript",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              homepage: r.homepage || undefined,
            }))
            .slice(0, 4);

          if (isMounted && formatted.length > 0) {
            setRepos(formatted);
            localStorage.setItem("github_repos_cache", JSON.stringify(formatted));
            localStorage.setItem("github_repos_timestamp", Date.now().toString());
          }
        }
      } catch {
        if (isMounted) setRepos(fallbackRepos);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-16 lg:py-24 border-t border-border/60">
      <div className="portfolio-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Label (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
              GitHub
            </span>
          </div>

          {/* Activity / Repos (9 cols) */}
          <div className="lg:col-span-9 space-y-6 max-w-[800px]">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
              <p className="text-sm text-foreground/85">
                Building, experimenting, and shipping in public.
              </p>
              <a
                href="https://github.com/karthiknaramala9949"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>karthiknaramala9949</span>
                <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {loading
                ? Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="p-4 rounded border border-border/50 animate-pulse space-y-2 h-24"
                    >
                      <div className="h-3.5 bg-muted rounded w-1/2" />
                      <div className="h-2.5 bg-muted rounded w-4/5" />
                    </div>
                  ))
                : repos.map((repo) => (
                    <div
                      key={repo.name}
                      className="p-4 rounded-md border border-border/70 hover:border-foreground/30 transition-colors space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold font-mono text-foreground hover:text-primary transition-colors truncate"
                          >
                            {repo.name}
                          </a>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {repo.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-2 border-t border-border/40">
                        <span>{repo.language}</span>
                        {repo.stars > 0 && <span>★ {repo.stars}</span>}
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
