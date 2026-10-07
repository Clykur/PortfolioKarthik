import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Skills from "@/components/Skills";
import GithubSection from "@/components/GithubSection";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://karthiknaramala.clykur.com/#person",
      name: "Karthik Naramala",
      alternateName: "Venkata Karthik Naramala",
      url: "https://karthiknaramala.clykur.com/",
      jobTitle: "Software Developer & Product Builder",
      email: "karthik.naramala@clykur.com",
      worksFor: {
        "@type": "Organization",
        name: "Clykur",
        url: "https://www.clykur.com/",
      },
      sameAs: [
        "https://github.com/karthiknaramala9949",
        "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/",
        "https://x.com/karthik_naramala",
        "https://www.clykur.com/",
      ],
      knowsAbout: [
        "React Native",
        "TypeScript",
        "Next.js",
        "Supabase",
        "PostgreSQL",
        "Node.js",
        "Docker",
        "SaaS Architecture",
        "Mobile Systems",
        "Realtime Systems",
        "Fullstack Web Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://karthiknaramala.clykur.com/#website",
      url: "https://karthiknaramala.clykur.com/",
      name: "Karthik Naramala Portfolio",
      description:
        "Editorial portfolio of Karthik Naramala — Software Developer & Product Builder.",
      publisher: {
        "@id": "https://karthiknaramala.clykur.com/#person",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/15 selection:text-primary">
      <Helmet>
        <title>Karthik Naramala — Software Developer &amp; Product Builder</title>
        <meta
          name="description"
          content="Karthik Naramala — Software developer and product builder. Building thoughtful digital products from interfaces to production-ready web and mobile systems."
        />
        <link rel="canonical" href="https://karthiknaramala.clykur.com/" />
        <meta property="og:title" content="Karthik Naramala — Software Developer &amp; Product Builder" />
        <meta
          property="og:description"
          content="Software developer & product builder. Building thoughtful digital products, from interfaces to production-ready web applications."
        />
        <meta property="og:url" content="https://karthiknaramala.clykur.com/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@karthik_naramala" />
        <meta name="twitter:title" content="Karthik Naramala — Software Developer &amp; Product Builder" />
        <meta
          name="twitter:description"
          content="Software developer & product builder. Building thoughtful digital products, from interfaces to production-ready web applications."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>

      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <CurrentlyBuilding />
        <Skills />
        <GithubSection />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
