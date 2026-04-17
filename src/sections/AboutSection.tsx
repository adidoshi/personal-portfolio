import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/card";
import { ABOUT_FACTS } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Brain, Cpu, Layers } from "lucide-react";

const PHILOSOPHY = [
  {
    icon: Brain,
    title: "AI as force multiplier",
    color: "text-primary",
    bg: "bg-primary/8",
  },
  {
    icon: Layers,
    title: "Systems as invisible UX",
    color: "text-accent-foreground",
    bg: "bg-accent/10",
  },
  {
    icon: Cpu,
    title: "Product thinking as bridge",
    color: "text-muted-foreground",
    bg: "bg-secondary",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-muted/30 border-y border-border py-24 relative overflow-hidden"
    >
      {/* Decorative background orb */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <AnimatedSection direction="left" data-ocid="about.section">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">
              About
            </span>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-6 leading-tight">
              I build for people,{" "}
              <span className="text-primary">not for specs.</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              I treat AI as a{" "}
              <strong className="text-foreground">force multiplier</strong> —
              not a replacement for thinking. Every LLM integration I design
              keeps a human in the loop and a clear escalation path. Systems
              architecture, to me, is{" "}
              <em className="not-italic text-foreground font-medium">
                invisible UX
              </em>
              : the best infrastructure is the kind users never notice. And
              product thinking is the bridge that keeps every technical decision
              anchored to real-world impact.
            </p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Six years across startups and scale-ups — always at the
              intersection of engineering, data, and product — shaped a
              philosophy:{" "}
              <em className="not-italic font-semibold text-foreground">
                understand the system before you write the code.
              </em>
            </p>

            {/* Philosophy pills */}
            <div
              className="flex flex-wrap gap-3"
              data-ocid="about.philosophy_list"
            >
              {PHILOSOPHY.map(({ icon: Icon, title, color, bg }, i) => (
                <AnimatedSection
                  key={title}
                  delay={i * 80}
                  direction="up"
                  className="inline-block"
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-full border border-border text-sm font-medium transition-smooth hover:scale-105",
                      bg,
                    )}
                  >
                    <Icon size={14} className={color} />
                    <span className="text-foreground">{title}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: stats grid */}
          <AnimatedSection direction="right" delay={100}>
            <div
              className="grid grid-cols-2 gap-4"
              data-ocid="about.stats_grid"
            >
              {ABOUT_FACTS.map((fact, i) => (
                <Card
                  key={fact.label}
                  className={cn(
                    "bg-card border-border shadow-subtle text-center p-6 transition-smooth hover:shadow-elevated hover:-translate-y-1",
                    i === 0 ? "border-primary/30 ring-1 ring-primary/10" : "",
                  )}
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <p className="font-display font-bold text-4xl text-primary mb-2">
                    {fact.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {fact.label}
                  </p>
                </Card>
              ))}
            </div>

            {/* Decorative illustration badge */}
            <div className="mt-6 p-4 rounded-xl bg-card border border-border shadow-subtle">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Brain size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-1">
                    How I approach AI
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Every model I integrate has a fallback, a feedback loop, and
                    a reason to exist beyond the hype cycle.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
