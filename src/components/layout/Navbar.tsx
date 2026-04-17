import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/data/portfolio-data";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

type SocialIconProps = { size?: number; className?: string };

const GithubIcon = SiGithub as unknown as ComponentType<SocialIconProps>;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/90 backdrop-blur-md border-b border-border shadow-subtle"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          data-ocid="nav.logo"
          onClick={() => handleNavClick("#hero")}
          className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors duration-200"
        >
          <span className="text-primary">Aditya</span>
          <span className="ml-2 opacity-70 text-sm font-mono hidden sm:inline">
            / Frontend Developer
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}_link`}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted/50"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/adidoshi"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.github_link"
            className="hidden sm:flex p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <Button
            variant="ghost"
            size="icon"
            data-ocid="nav.theme_toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-muted-foreground"
                aria-label="Open menu"
                data-ocid="nav.mobile_menu_button"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card border-border">
              <div className="flex flex-col gap-1 mt-8">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <button
                      type="button"
                      data-ocid={`nav.mobile_${link.label.toLowerCase()}_link`}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left px-4 py-3 text-base font-body text-foreground hover:text-primary hover:bg-muted/40 rounded-lg transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                <div className="flex gap-3 mt-6 px-4">
                  <a
                    href="https://github.com/adidoshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
