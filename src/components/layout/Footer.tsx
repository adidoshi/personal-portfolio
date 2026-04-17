import type { ComponentType } from "react";
import { FaArrowUp, FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiX } from "react-icons/si";

type SocialIconProps = { size?: number; className?: string };

const GithubIcon = SiGithub as unknown as ComponentType<SocialIconProps>;
const LinkedinIcon = FaLinkedinIn as unknown as ComponentType<SocialIconProps>;
const ArrowUpIcon = FaArrowUp as unknown as ComponentType<SocialIconProps>;
const XSocialIcon = SiX as unknown as ComponentType<SocialIconProps>;

export function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-xl text-foreground mb-2">
              <span className="text-primary">Aditya Doshi</span>
            </p>

            <div className="flex gap-4 mt-5">
              <a
                href="https://github.com/adidoshi"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.github_link"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aditya-doshi08"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.linkedin_link"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://twitter.com/adidoshi08"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.twitter_link"
                aria-label="X / Twitter"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <XSocialIcon size={20} />
              </a>
            </div>
          </div>

          {/* Scroll to top */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Scroll to top
            </p>
            <button
              type="button"
              onClick={handleScrollToTop}
              data-ocid="footer.scroll_to_top_button"
              aria-label="Scroll to top"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              <ArrowUpIcon size={18} />
            </button>
          </div>

          {/* Contact hint */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
              Get In Touch
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open to full time Software Engineering roles across India
            </p>
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              data-ocid="footer.contact_button"
              className="mt-4 text-sm font-medium text-primary hover:underline transition-colors duration-200"
            >
              Send a message →
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with {`</>`}{" "}
            <a
              href={`https://react.dev/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              React
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
