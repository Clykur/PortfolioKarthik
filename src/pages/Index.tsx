import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Venkata Karthik Naramala",
  alternateName: "Karthik Naramala",
  jobTitle: "Software Engineer & Co-founder",
  worksFor: {
    "@type": "Organization",
    name: "Clykur",
    url: "https://clykur.com",
  },
  url: "https://venkataportfolio.lovable.app/",
  sameAs: [
    "https://github.com/karthiknaramala9949",
    "https://www.linkedin.com/in/venkata-karthik-naramala-a35a7a224/",
  ],
  knowsAbout: [
    "React Native",
    "TypeScript",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "Python",
    "SaaS Architecture",
    "Mobile App Development",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Karthik Naramala — Software Engineer & SaaS Builder</title>
        <meta
          name="description"
          content="Karthik Naramala, Co-founder @ Clykur. Software engineer building production-grade mobile and web systems with React Native, TypeScript & Supabase."
        />
        <link rel="canonical" href="https://venkataportfolio.lovable.app/" />
        <meta property="og:title" content="Karthik Naramala — Software Engineer & SaaS Builder" />
        <meta
          property="og:description"
          content="Software engineer building production-grade mobile and web systems with React Native, TypeScript & Supabase."
        />
        <meta property="og:url" content="https://venkataportfolio.lovable.app/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:title" content="Karthik Naramala — Software Engineer & SaaS Builder" />
        <meta
          name="twitter:description"
          content="Software engineer building production-grade mobile and web systems with React Native, TypeScript & Supabase."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLdData)}</script>
      </Helmet>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
