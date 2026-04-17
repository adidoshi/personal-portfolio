import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ABOUT_FACTS, THINKING_PRINCIPLES } from "@/data/portfolio-data";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onScrollTo: (id: string) => void;
}

/** Inline SVG: abstract neural / system design topology */
function HeroBgSvg() {
  return (
    <svg
      viewBox="0 0 900 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Orbital rings */}
      <ellipse
        cx="450"
        cy="300"
        rx="380"
        ry="220"
        stroke="currentColor"
        strokeOpacity="0.06"
        strokeWidth="1.2"
      />
      <ellipse
        cx="450"
        cy="300"
        rx="260"
        ry="150"
        stroke="currentColor"
        strokeOpacity="0.09"
        strokeWidth="1"
      />
      <ellipse
        cx="450"
        cy="300"
        rx="140"
        ry="80"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="0.8"
      />

      {/* Node connections */}
      <line
        x1="120"
        y1="100"
        x2="310"
        y2="220"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <line
        x1="310"
        y1="220"
        x2="450"
        y2="300"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.2"
      />
      <line
        x1="450"
        y1="300"
        x2="620"
        y2="200"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <line
        x1="620"
        y1="200"
        x2="800"
        y2="130"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="0.8"
      />
      <line
        x1="450"
        y1="300"
        x2="580"
        y2="430"
        stroke="currentColor"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <line
        x1="310"
        y1="220"
        x2="200"
        y2="380"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="0.8"
      />
      <line
        x1="580"
        y1="430"
        x2="720"
        y2="500"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="0.8"
      />
      <line
        x1="200"
        y1="380"
        x2="310"
        y2="430"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="0.8"
      />
      <line
        x1="620"
        y1="200"
        x2="580"
        y2="430"
        stroke="currentColor"
        strokeOpacity="0.08"
        strokeWidth="0.8"
      />

      {/* Primary node — center brain */}
      <circle cx="450" cy="300" r="22" fill="currentColor" fillOpacity="0.08" />
      <circle cx="450" cy="300" r="14" fill="currentColor" fillOpacity="0.12" />
      <circle cx="450" cy="300" r="6" fill="currentColor" fillOpacity="0.35" />

      {/* Secondary nodes */}
      <circle cx="310" cy="220" r="10" fill="currentColor" fillOpacity="0.12" />
      <circle cx="310" cy="220" r="5" fill="currentColor" fillOpacity="0.28" />

      <circle cx="620" cy="200" r="10" fill="currentColor" fillOpacity="0.1" />
      <circle cx="620" cy="200" r="5" fill="currentColor" fillOpacity="0.25" />

      <circle cx="580" cy="430" r="9" fill="currentColor" fillOpacity="0.1" />
      <circle cx="580" cy="430" r="4" fill="currentColor" fillOpacity="0.22" />

      <circle cx="200" cy="380" r="8" fill="currentColor" fillOpacity="0.09" />
      <circle cx="200" cy="380" r="4" fill="currentColor" fillOpacity="0.2" />

      {/* Tertiary nodes */}
      <circle cx="120" cy="100" r="5" fill="currentColor" fillOpacity="0.14" />
      <circle cx="800" cy="130" r="5" fill="currentColor" fillOpacity="0.12" />
      <circle cx="720" cy="500" r="5" fill="currentColor" fillOpacity="0.1" />
      <circle cx="310" cy="430" r="5" fill="currentColor" fillOpacity="0.1" />

      {/* Data flow pulses (animated dashes) */}
      <line
        x1="310"
        y1="220"
        x2="450"
        y2="300"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        className="animate-pulse"
      />
      <line
        x1="450"
        y1="300"
        x2="620"
        y2="200"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        className="animate-pulse"
        style={{ animationDelay: "0.6s" }}
      />
    </svg>
  );
}

/** Floating chip labels that decorate the hero illustration */
function FloatingChip({
  label,
  className,
  delay = 0,
}: {
  label: string;
  className: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute px-3 py-1.5 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm text-xs font-mono text-primary shadow-sm float ${className}`}
      style={{ animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

export function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative flex items-start bg-background overflow-hidden lg:min-h-screen lg:items-center"
      data-ocid="hero.section"
    >
      {/* ── Ambient blobs ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/6 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 px-4 pt-20 pb-14 sm:px-6 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-16 items-center">
          {/* ── Left: Text column ─────────────────────── */}
          <div className="min-w-0">
            {/* Availability pill */}
            <AnimatedSection delay={0}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-xs font-mono mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Available for impactful roles
              </span>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection delay={80}>
              <h1 className="font-display font-bold text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-foreground mb-2 tracking-tight">
                Engineering
              </h1>
              <h1 className="font-display font-bold text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] mb-2 tracking-tight gradient-animate bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_200%]">
                Modern
              </h1>
              <h1 className="font-display font-bold text-[2.6rem] sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-foreground mb-6 tracking-tight">
                Interfaces.
              </h1>
            </AnimatedSection>

            {/* Sub-headline */}
            <AnimatedSection delay={180}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[480px] mb-3">
                I'm{" "}
                <strong className="text-foreground font-semibold">
                  Aditya Doshi
                </strong>{" "}
                - an experienced software developer who builds practical
                systems, ships with product intuition, and treats AI as a{" "}
                <em className="not-italic font-semibold text-accent-foreground">
                  leverage.
                </em>
              </p>
            </AnimatedSection>

            {/* Principle tags */}
            <AnimatedSection delay={240}>
              <div className="flex flex-wrap gap-2 mb-9">
                {THINKING_PRINCIPLES.map((p) => (
                  <span
                    key={p.title}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted border border-border text-xs text-muted-foreground"
                  >
                    <span>{p.icon}</span>
                    <span className="font-mono">{p.title.split(",")[0]}</span>
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={310}>
              <div className="flex flex-wrap gap-3 mb-12">
                <Button
                  onClick={() => onScrollTo("projects")}
                  data-ocid="hero.explore_button"
                  className="group bg-primary text-primary-foreground hover:opacity-90 transition-smooth px-6"
                >
                  Explore My Work
                  <ArrowRight
                    size={15}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onScrollTo("contact")}
                  data-ocid="hero.contact_button"
                  className="border-border text-foreground hover:bg-muted/50 px-6"
                >
                  Let's Talk
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right: SVG illustration column ─────────── */}
          <AnimatedSection
            direction="left"
            delay={200}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[520px] aspect-[3/2]">
              {/* Glow halo behind illustration */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/15 via-primary/5 to-accent/10 blur-2xl scale-110" />

              {/* SVG container */}
              <div className="relative rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm overflow-hidden shadow-2xl text-primary w-full h-full">
                <HeroBgSvg />

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <Sparkles
                      size={18}
                      className="text-primary opacity-70 mb-1"
                    />
                    <span className="font-mono text-[10px] text-primary/70 uppercase tracking-[0.2em]">
                      real time
                    </span>
                    <span className="font-display font-bold text-2xl text-foreground/80">
                      ×
                    </span>
                    <span className="font-mono text-[10px] text-accent-foreground/70 uppercase tracking-[0.2em]">
                      applications
                    </span>
                  </div>
                </div>

                {/* Floating chip labels */}
                <FloatingChip
                  label="Performance & reliability"
                  className="top-6 left-6"
                  delay={0}
                />
                <FloatingChip
                  label="LLM Workflows"
                  className="top-6 right-6"
                  delay={0.8}
                />
                <FloatingChip
                  label="Testing practices"
                  className="bottom-6 left-6"
                  delay={1.6}
                />
                <FloatingChip
                  label="Product Thinking"
                  className="bottom-6 right-6"
                  delay={2.4}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
