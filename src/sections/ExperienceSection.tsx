import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EXPERIENCES } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import type { Experience } from "@/types/portfolio";
import { Briefcase, MapPin, TrendingUp } from "lucide-react";

interface TimelineEntryProps {
  exp: Experience;
  index: number;
}

function TimelineEntry({ exp, index }: TimelineEntryProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-0 items-start">
      {/* Left column (desktop: alternating) */}
      <div
        className={cn(
          "hidden md:flex",
          isEven ? "justify-end pr-8" : "justify-start pl-8 md:order-last",
        )}
      >
        {isEven ? (
          <TimelineCard exp={exp} index={index} side="right" />
        ) : (
          // Spacer on right side when card is on right
          <div />
        )}
      </div>

      {/* Center connector */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className={cn(
            "relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 mt-6",
            "bg-card border-primary shadow-md",
          )}
        >
          <Briefcase size={16} className="text-primary" />
        </div>
        {/* Vertical line — full height except last */}
        <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/40 to-border mt-2" />
      </div>

      {/* Right column (desktop: alternating) */}
      <div
        className={cn(
          "hidden md:flex",
          !isEven ? "justify-start pl-8" : "justify-end pr-8 md:order-last",
        )}
      >
        {!isEven ? (
          <TimelineCard exp={exp} index={index} side="left" />
        ) : (
          <div />
        )}
      </div>

      {/* Mobile: always stacked */}
      <div className="md:hidden">
        <TimelineCard exp={exp} index={index} side="up" />
      </div>
    </div>
  );
}

interface TimelineCardProps {
  exp: Experience;
  index: number;
  side: "left" | "right" | "up";
}

function TimelineCard({ exp, index, side }: TimelineCardProps) {
  const direction =
    side === "left" ? "left" : side === "right" ? "right" : "up";

  return (
    <AnimatedSection
      delay={index * 120}
      direction={direction}
      className="w-full"
    >
      <Card
        className={cn(
          "group bg-card border-border overflow-hidden",
          "hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-500 ease-out",
          "shadow-subtle mb-8",
        )}
        data-ocid={`experience.item.${index + 1}`}
      >
        {/* Accent top bar */}
        <div className="h-0.5 bg-gradient-to-r from-primary/60 via-accent/40 to-transparent group-hover:from-primary group-hover:via-accent/60 transition-all duration-500" />

        <CardContent className="p-6 sm:p-7">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="min-w-0">
              <h3 className="font-display font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors duration-300 truncate">
                {exp.role}
              </h3>
              <p className="text-primary font-semibold text-sm mt-0.5">
                {exp.company}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                <MapPin size={11} className="shrink-0" />
                {exp.location}
              </div>
            </div>
          </div>

          {/* Summary quote */}
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed italic border-l-2 border-primary/30 pl-3">
            "{exp.summary}"
          </p>

          <Separator className="mb-5 bg-border" />

          {/* Impact bullets */}
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={13} className="text-primary shrink-0" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Impact
            </span>
          </div>
          <ul className="space-y-2.5 mb-5">
            {exp.achievements.map((achievement) => (
              <li
                key={achievement}
                className="flex gap-3 text-sm text-muted-foreground group/item"
              >
                <span className="text-primary mt-0.5 shrink-0 group-hover/item:translate-x-0.5 transition-transform duration-200">
                  →
                </span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {exp.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="text-xs bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors duration-200"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimatedSection className="mb-14">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block mb-3">
            The Journey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Where I've made <span className="text-primary">impact</span>
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Worked across startups contributing to production apps at various
            stages of growth, each experience has been a unique learning
            opportunity.
          </p>
        </AnimatedSection>

        {/* Desktop: timeline layout */}
        <div className="relative hidden md:block">
          {/* Global vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5 bg-gradient-to-b from-primary/20 via-border to-transparent pointer-events-none" />

          <div className="space-y-2">
            {EXPERIENCES.map((exp, i) => (
              <TimelineEntry key={exp.company} exp={exp} index={i} />
            ))}
          </div>

          {/* End marker */}
          <AnimatedSection className="flex justify-center mt-4">
            <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-muted border border-border">
              <div className="w-2 h-2 rounded-full bg-primary/40" />
            </div>
          </AnimatedSection>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-1">
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.company} className="relative pl-8">
              {/* Connector line */}
              {i < EXPERIENCES.length - 1 && (
                <div className="absolute left-3.5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 to-border" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-7 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>
              <TimelineCard exp={exp} index={i} side="up" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
