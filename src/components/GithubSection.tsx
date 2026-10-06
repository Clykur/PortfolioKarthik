import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  isFallback?: boolean;
}

const fallbackRepos: GitHubRepo[] = [
  {
    name: "CusOwn",
    description: "Production multi-tenant booking & scheduling infrastructure with realtime slot orchestration.",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    url: "https://github.com/karthiknaramala9949",
    homepage: "https://cusown.clykur.com",
    isFallback: true,
  },
  {
    name: "React-Applications",
    description: "Modular React frontend components, custom hooks, and dynamic client state architecture.",
    language: "JavaScript",
    stars: 1,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/React-Applications",
    isFallback: true,
  },
  {
    name: "Workout_Tracker",
    description: "Fitness logging application to record exercise sets, track progression, and persist workout history.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/Workout_Tracker",
    isFallback: true,
  },
  {
    name: "Bouncing_Ball_Game",
    description: "Interactive physics game engine built on HTML5 Canvas with 2D collision kinematics.",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/Bouncing_Ball_Game",
    isFallback: true,
  },
  {
    name: "BMI_Calculator",
    description: "Data analysis workflows and Python computational scripts for BMI calculation and health categorization.",
    language: "Python",
    stars: 1,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/BMI_Calculator",
    isFallback: true,
  },
  {
    name: "Project_Code",
    description: "DCT-FP image fusion algorithms in MATLAB for high-frequency edge detection and boundary extraction.",
    language: "MATLAB",
    stars: 1,
    forks: 0,
    url: "https://github.com/karthiknaramala9949/Project_Code",
    isFallback: true,
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  MATLAB: "#e16737",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

const GithubSection = () => {
  const { ref, visible } = useSectionReveal();
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchGithubRepos = async () => {
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
          "https://api.github.com/users/karthiknaramala9949/repos?sort=updated&per_page=12",
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );

        if (!response.ok) throw new Error("API rate limit");

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
              description: r.description || "Public software engineering repository.",
              language: r.language || "TypeScript",
              stars: r.stargazers_count,
              forks: r.forks_count,
              url: r.html_url,
              homepage: r.homepage || undefined,
            }))
            .slice(0, 6);

          if (isMounted && formatted.length > 0) {
            setRepos(formatted);
            localStorage.setItem("github_repos_cache", JSON.stringify(formatted));
            localStorage.setItem("github_repos_timestamp", Date.now().toString());
          }
        }
      } catch {
        if (isMounted) {
          setRepos(fallbackRepos);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGithubRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-12 sm:py-16">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 section-animate ${visible ? "visible" : ""}`}
      >
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider block mb-1">
                Open Source
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                GitHub <span className="text-gradient">Repositories</span>
              </h2>
            </div>

            <Button
              className="glow-primary text-xs font-mono self-start sm:self-auto h-8 px-3.5"
              asChild
            >
              <a
                href="https://github.com/karthiknaramala9949"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Karthik Naramala GitHub Profile"
              >
                <Github className="mr-1.5 h-3.5 w-3.5" />
                View GitHub Profile
              </a>
            </Button>
          </div>

          {/* Repos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border bg-card/60 animate-pulse space-y-2.5 h-32 flex flex-col justify-between"
                  >
                    <div className="space-y-1.5">
                      <div className="h-3.5 bg-muted rounded w-1/2" />
                      <div className="h-2.5 bg-muted rounded w-full" />
                    </div>
                    <div className="h-3 bg-muted rounded w-1/3" />
                  </div>
                ))
              : repos.map((repo) => (
                  <Card
                    key={repo.name}
                    className="card-elevated hover-lift border border-border/80 flex flex-col justify-between group h-full"
                  >
                    <CardContent className="p-4 flex flex-col justify-between h-full space-y-2.5">
                      <div className="space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate"
                          >
                            {repo.name}
                          </a>
                          <a
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-0.5"
                            aria-label={`Open repository ${repo.name}`}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>

                        <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                          {repo.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/50 text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: languageColors[repo.language] || "#8b949e",
                            }}
                          />
                          <span className="text-muted-foreground">{repo.language}</span>
                        </div>

                        <span className="text-muted-foreground text-[10px]">Public Repo</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
