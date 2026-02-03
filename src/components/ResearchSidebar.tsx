import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

const sections: NavSection[] = [
  { id: "about", label: "About Me" },
  { id: "philosophy", label: "Research Philosophy" },
  { id: "research", label: "Research Directions" },
  { id: "ideas", label: "Ideas in Progress" },
  { id: "projects", label: "Past Projects" },
];

interface ResearchSidebarProps {
  className?: string;
}

export function ResearchSidebar({ className }: ResearchSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-sidebar-foreground shadow-lg lg:hidden"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 gradient-scholarly z-40",
          "flex flex-col",
          "transform transition-transform duration-300 ease-out",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-sidebar-border">
          <h1 className="font-heading text-xl text-sidebar-foreground font-semibold">
            Wenqing Zhang
          </h1>
          <p className="text-sm text-sidebar-foreground/60 mt-1">
            Research Trajectory
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "nav-item w-full text-left",
                    isActive(section.id) && "active"
                  )}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-sidebar-border">
          <div className="flex gap-4 text-sidebar-foreground/60">
            <a
              href="mailto:wenqingzhang1122@gmail.com"
              className="hover:text-sidebar-foreground transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="https://github.com/Cecilia-zwq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sidebar-foreground transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
