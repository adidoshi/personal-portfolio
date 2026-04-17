import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";
import { type ElementType, type ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  as?: ElementType;
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: AnimatedSectionProps) {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  const reducedMotion = useReducedMotion();

  const baseTransform = {
    up: "translateY(28px)",
    left: "translateX(-28px)",
    right: "translateX(28px)",
    fade: "translateY(0px)",
  }[direction];

  const style = reducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0,0)" : baseTransform,
        transition: `opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      };

  return (
    <Tag ref={ref} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
