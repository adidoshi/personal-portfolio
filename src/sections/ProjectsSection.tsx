import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/portfolio";
import { ExternalLink, Layers, Sparkles } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import { SiGithub } from "react-icons/si";

type SocialIconProps = { size?: number; className?: string };

const GithubIcon = SiGithub as unknown as ComponentType<SocialIconProps>;

type ProjectFilter = "All" | "Frontend" | "FullStack";

const FILTERS: ProjectFilter[] = ["All", "Frontend", "FullStack"];

const TAG_FILTER_MAP: Record<ProjectFilter, string[]> = {
  All: [],
  Frontend: ["Tailwind"],
  FullStack: ["React", "Next.js", "MongoDB", "Node.js"],
};

function matchesFilter(project: Project, filter: ProjectFilter): boolean {
  if (filter === "All") return true;
  const keywords = TAG_FILTER_MAP[filter];
  return project.tags.some((tag) =>
    keywords.some((kw) => tag.toLowerCase().includes(kw.toLowerCase())),
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured: boolean;
}

function ProjectCard({ project, index, isFeatured }: ProjectCardProps) {
  return (
    <AnimatedSection
      delay={index * 120}
      direction={index % 2 === 0 ? "up" : "left"}
      className={cn(isFeatured ? "lg:col-span-2" : "")}
    >
      <Card
        className={cn(
          "group bg-card border-border overflow-hidden shadow-subtle",
          "hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 ease-out h-full",
        )}
        data-ocid={`projects.item.${index + 1}`}
      >
        <div className={cn("flex flex-col", isFeatured ? "md:flex-row" : "")}>
          {/* Image */}
          <div
            className={cn(
              "overflow-hidden relative bg-muted/40 shrink-0",
              isFeatured ? "md:w-[46%] h-56 md:h-auto" : "h-48",
            )}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {project.highlight && (
              <div className="absolute top-3 left-3">
                <Badge className="bg-primary text-primary-foreground text-xs shadow-md">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <CardContent
            className={cn(
              "flex flex-col p-6 flex-1",
              isFeatured ? "md:p-8" : "",
            )}
          >
            <p className="text-xs font-mono text-muted-foreground mb-2 tracking-wide">
              {project.tagline}
            </p>
            <h3
              className={cn(
                "font-display font-bold text-foreground mb-3 leading-snug",
                "group-hover:text-primary transition-colors duration-300",
                isFeatured ? "text-2xl" : "text-xl",
              )}
            >
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* AI Insight callout */}
            {project.aiInsight && (
              <div className="flex gap-2.5 p-3 rounded-lg bg-primary/5 border border-primary/15 mb-4 group-hover:border-primary/30 transition-colors duration-300">
                <Sparkles size={14} className="text-primary mt-0.5 shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-primary">AI insight: </strong>
                  {project.aiInsight}
                </p>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`projects.live_link.${index + 1}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors duration-200"
                >
                  Live demo <ExternalLink size={13} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`projects.github_link.${index + 1}`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <GithubIcon size={15} /> Source
                </a>
              )}
            </div>
          </CardContent>
        </div>
      </Card>
    </AnimatedSection>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visible = PROJECTS.filter((p) => matchesFilter(p, activeFilter));

  return (
    <section id="projects" className="bg-muted/30 border-y border-border py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <Layers size={18} className="text-primary" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Selected Work
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Web Applications I've built
          </h2>
          <p className="text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Each project is designed as a proof of concept for real world
            workflows.
          </p>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection delay={80}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Project categories"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                data-ocid={`projects.filter_${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:bg-muted/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Project grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isFeatured={i === 0 && activeFilter === "All"}
              />
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div
              className="flex flex-col items-center justify-center py-20 text-center"
              data-ocid="projects.empty_state"
            >
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4">
                <Layers size={24} className="text-muted-foreground" />
              </div>
              <p className="text-foreground font-medium mb-1">
                No projects in this category yet
              </p>
              <p className="text-sm text-muted-foreground">
                Check back soon or view all projects.
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
