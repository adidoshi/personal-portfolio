import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/portfolio";
import { Cloud, Zap } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import {
  SiDocker,
  SiFigma,
  SiGithub,
  SiGraphql,
  SiKubernetes,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVagrant,
  SiJest,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaGit } from "react-icons/lia";

// ─── Icon registry ──────────────────────────────────────────────────────────
type IconComponent = ComponentType<{
  size?: string | number;
  className?: string;
}>;

const ICON_MAP: Record<string, IconComponent> = {
  SiReact: SiReact as unknown as IconComponent,
  SiTypescript: SiTypescript as unknown as IconComponent,
  SiNextdotjs: SiNextdotjs as unknown as IconComponent,
  SiTailwindcss: SiTailwindcss as unknown as IconComponent,
  SiNodedotjs: SiNodedotjs as unknown as IconComponent,
  SiVagrant: SiVagrant as unknown as IconComponent,
  SiGraphql: SiGraphql as unknown as IconComponent,
  SiPostgresql: SiPostgresql as unknown as IconComponent,
  SiDocker: SiDocker as unknown as IconComponent,
  SiKubernetes: SiKubernetes as unknown as IconComponent,
  SiAmazonwebservices: Cloud,
  IoLogoJavascript: IoLogoJavascript as unknown as IconComponent,
  SiTerraform: SiTerraform as unknown as IconComponent,
  SiGithub: SiGithub as unknown as IconComponent,
  SiFigma: SiFigma as unknown as IconComponent,
  SiOpenai: SiOpenai as unknown as IconComponent,
  SiJest: SiJest as unknown as IconComponent,
  LiaGit: LiaGit as unknown as IconComponent,
  SiMongodb: SiMongodb as unknown as IconComponent,
  SiExpress: SiExpress as unknown as IconComponent,
};

const CUSTOM_ICON_MAP: Record<string, string> = {
  SiZustand: "/assets/images/ZustandOriginal.svg",
  SiTanstackquery: "/assets/images/TanstackQueryLogo.svg",
  CICDIcon: "/assets/images/CICDIcon.png",
  ViteLogo: "/assets/images/ViteLogo.svg",
  ClaudeIcon: "/assets/images/claude.svg",
};

// ─── Category configuration ─────────────────────────────────────────────────
interface CategoryConfig {
  label: string;
  tagline: string;
  chipClass: string;
  iconClass: string;
  borderClass: string;
  bgClass: string;
}

const CATEGORIES: Record<string, CategoryConfig> = {
  frontend: {
    label: "Frontend",
    tagline: "Where users interact",
    chipClass: "bg-accent/10 text-accent-foreground border-accent/25",
    iconClass: "text-accent-foreground",
    borderClass: "border-accent/20",
    bgClass: "bg-accent/4",
  },
  backendAI: {
    label: "Backend, AI & LLMs",
    tagline: "Data, logic, & Frontier layer",
    // chipClass: "bg-muted text-muted-foreground border-border",
    chipClass: "bg-primary/10 text-primary border-primary/25",
    iconClass: "text-muted-foreground",
    borderClass: "border-border",
    bgClass: "bg-card",
  },
  tools: {
    label: "Tools",
    tagline: "Craft & collaboration",
    chipClass: "bg-muted text-muted-foreground border-border",
    iconClass: "text-muted-foreground",
    borderClass: "border-border",
    bgClass: "bg-card",
  },
};

const LEVEL_DOTS: Record<string, number> = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

// ─── Sub-components ─────────────────────────────────────────────────────────
function LevelDots({ level }: { level: string }) {
  const filled = LEVEL_DOTS[level] ?? 1;
  return (
    <div className="flex gap-0.5 mt-1" aria-label={`Level: ${level}`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            n <= filled ? "bg-current opacity-80" : "bg-current opacity-15",
          )}
        />
      ))}
    </div>
  );
}

function SkillBadge({
  skill,
  config,
  index,
}: {
  skill: Skill;
  config: CategoryConfig;
  index: number;
}) {
  const IconComp = ICON_MAP[skill.icon];
  const customIconSrc = CUSTOM_ICON_MAP[skill.icon];
  return (
    <AnimatedSection key={skill.name} delay={index * 50} direction="up">
      <div
        className={cn(
          "group flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-smooth hover:scale-105 hover:shadow-elevated cursor-default",
          config.chipClass,
          "hover:border-primary/40",
        )}
        data-ocid={`skills.badge.${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
      >
        {customIconSrc ? (
          <img
            src={customIconSrc}
            alt=""
            width={22}
            height={22}
            aria-hidden="true"
            className="h-[22px] w-[22px] shrink-0 object-contain"
          />
        ) : IconComp ? (
          <IconComp
            size={22}
            className={cn("shrink-0 transition-smooth", config.iconClass)}
          />
        ) : (
          <span className="text-xl">⚡</span>
        )}
        <span className="text-[11px] font-medium leading-tight">
          {skill.name}
        </span>
        <LevelDots level={skill.level} />
      </div>
    </AnimatedSection>
  );
}

function CategoryGroup({
  categoryKey,
  skills,
  index,
}: {
  categoryKey: string;
  skills: Skill[];
  index: number;
}) {
  const config = CATEGORIES[categoryKey];
  if (!config || skills.length === 0) return null;

  return (
    <AnimatedSection delay={index * 100} direction="up">
      <div
        className={cn(
          "rounded-2xl border p-5 sm:p-6",
          config.borderClass,
          config.bgClass,
        )}
        data-ocid={`skills.category.${categoryKey}`}
      >
        {/* Category header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display font-semibold text-sm text-foreground">
              {config.label}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {config.tagline}
            </p>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] font-mono tabular-nums",
              config.chipClass,
            )}
          >
            {skills.length} tools
          </Badge>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {skills.map((skill, i) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              config={config}
              index={i}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

// ─── Main section ────────────────────────────────────────────────────────────
export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  // Group by category (respects filter)
  const grouped = Object.keys(CATEGORIES).reduce<Record<string, Skill[]>>(
    (acc, cat) => {
      const items = filteredSkills.filter((s) => s.category === cat);
      if (items.length > 0) acc[cat] = items;
      return acc;
    },
    {},
  );

  return (
    <section
      id="skills"
      className="bg-background py-24"
      data-ocid="skills.section"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section header ────────────────────────── */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <Zap size={18} className="text-accent-foreground" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Tech Stack
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
            Go-to tools
          </h2>
          <p className="text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Deliberately chosen for what they{" "}
            <em className="not-italic font-semibold text-foreground">enable</em>
          </p>
        </AnimatedSection>

        {/* ── Filter pills ──────────────────────────── */}
        <AnimatedSection delay={80}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Filter skills by category"
          >
            {["all", ...Object.keys(CATEGORIES)].map((cat) => (
              <button
                type="button"
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                data-ocid={`skills.filter.${cat}`}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-sm font-body border transition-smooth",
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/40 hover:text-foreground",
                )}
              >
                {cat === "all" ? "All" : CATEGORIES[cat].label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Category groups or flat grid ──────────── */}
        {activeCategory === "all" ? (
          <div className="space-y-5">
            {Object.entries(grouped).map(([cat, skills], i) => (
              <CategoryGroup
                key={cat}
                categoryKey={cat}
                skills={skills}
                index={i}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredSkills.map((skill, i) => {
              const config = CATEGORIES[skill.category] ?? CATEGORIES.tools;
              return (
                <SkillBadge
                  key={skill.name}
                  skill={skill}
                  config={config}
                  index={i}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
