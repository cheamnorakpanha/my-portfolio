import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const links = [
    { name: "GitHub", href: personal.socials.github, external: true },
    { name: "LinkedIn", href: personal.socials.linkedin, external: true },
    { name: "Email", href: personal.socials.email, external: false },
    { name: "Résumé", href: personal.resumeUrl, external: true },
  ];

  return (
    <footer className="bg-paper text-ink border-t-[3px] border-signal overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="label text-signal">{personal.fullRole}</p>
            <p className="mt-1 text-sm opacity-70">{personal.location}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="label border-[3px] border-ink px-3 py-2 hover:bg-signal hover:text-signal-fg hover:border-signal transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#home"
              className="label inline-flex items-center gap-1.5 bg-ink text-paper border-[3px] border-ink px-3 py-2 hover:bg-signal hover:text-signal-fg hover:border-signal transition-colors"
            >
              Top <ArrowUp className="h-3.5 w-3.5" strokeWidth={3} />
            </a>
          </nav>
        </div>

        <p
          aria-hidden="true"
          className="display mt-12 text-[17.5vw] lg:text-[13.5rem] xl:text-[15.5rem] leading-[0.8] text-signal distress rgb-split select-none whitespace-nowrap -mb-[0.06em]"
        >
          Norakpanha
        </p>
      </div>
      <div className="border-t-[3px] border-ink/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2 label opacity-70">
          <p>© {year} {personal.name}</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
