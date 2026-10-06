import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubSection from "@/components/GithubSection";
import ClykurSection from "@/components/ClykurSection";
import Principles from "@/components/Principles";
import Experience from "@/components/Experience";
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
      jobTitle: "Software Engineer & Product Builder",
      email: "karthik.naramala@clykur.com",
      worksFor: {
        "@type": "Organization",
        name: "Clykur",
        url: "https://www.clykur.com/",
      },
      sameAs: [
        "https://github.com/karthiknaramala9949",
        "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/",
        "https://www.clykur.com/",
      ],
      knowsAbout: [
        "React Native",
        "TypeScript",
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
        "Personal developer portfolio of Karthik Naramala, Software Engineer and Co-founder @ Clykur.",
      publisher: {
        "@id": "https://karthiknaramala.clykur.com/#person",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Helmet>
        <title>Karthik Naramala — Software Engineer &amp; Product Builder</title>
        <meta
          name="description"
          content="Karthik Naramala — Co-founder @ Clykur. Software engineer building production-grade mobile and web systems with React Native, TypeScript, Supabase & PostgreSQL."
        />
        <link rel="canonical" href="https://karthiknaramala.clykur.com/" />
        <meta property="og:title" content="Karthik Naramala — Software Engineer &amp; Product Builder" />
        <meta
          property="og:description"
          content="Co-founder @ Clykur. Software engineer building production software from idea to deployment with React Native, TypeScript, Supabase & PostgreSQL."
        />
        <meta property="og:url" content="https://karthiknaramala.clykur.com/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Karthik Naramala — Software Engineer &amp; Product Builder" />
        <meta
          name="twitter:description"
          content="Co-founder @ Clykur. Software engineer building production software from idea to deployment with React Native, TypeScript, Supabase & PostgreSQL."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>

      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <CurrentlyBuilding />
        <Skills />
        <Projects />
        <GithubSection />
        <ClykurSection />
        <Principles />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
