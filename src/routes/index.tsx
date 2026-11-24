import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Credentials,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Dinesh S — AI, Machine Learning & Software Developer";
const description =
  "Portfolio of Dinesh S, B.Tech Information Technology student at St. Joseph's College of Engineering, Chennai, building computer vision, deep learning and full-stack projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dinesh S",
          jobTitle: "B.Tech Information Technology Student",
          email: "mailto:dineshs.sham@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
          alumniOf: "St. Joseph's College of Engineering, Chennai",
          sameAs: ["https://github.com/dineshs57", "https://linkedin.com/in/dinesh-s-71670a299"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
