import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { Brain } from "lucide-react";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      {/* ------ HERO ------------------------------ */}
      <HeroSection onScrollTo={scrollTo} />

      {/* ------ THINKING ------------------------------ */}
      <section
        id="thinking"
        className="bg-muted/30 border-y border-border py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between">
              <div className="max-w-xl lg:flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Brain size={18} className="text-primary" />
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    How I Think
                  </span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                  Not just an engineer.
                  <br />
                  <span className="text-primary">A systems thinker.</span>
                </h2>
                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  I approach every problem statement by understanding the system
                  first, how the data flows, where it can break, and how users
                  actually interact with it.
                </p>
              </div>
              <div className="w-full lg:ml-8 lg:flex-1">
                <img
                  src="/assets/images/about-img.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full max-w-sm self-center object-contain lg:h-full lg:max-w-none rounded-2xl"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ------ SKILLS ------------------------------ */}
      <SkillsSection />

      {/* ------ PROJECTS ------------------------------ */}
      <ProjectsSection />

      {/* ------ EXPERIENCE ------------------------------ */}
      <ExperienceSection />

      {/* ------ CONTACT ------------------------------ */}
      <ContactSection />
    </Layout>
  );
}
