import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavSection {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

const sections: NavSection[] = [
  { id: "about", label: "About Me" },
  { id: "philosophy", label: "Research Philosophy" },
  {
    id: "research",
    label: "Research",
    children: [
      { id: "llm-filter-bubble", label: "LLM & Filter Bubbles" },
      { id: "llm-psychology", label: "LLM in Human Research" },
      { id: "ideas", label: "Ideas in Progress" },
    ],
  },
  { id: "projects", label: "Past Projects" },
];

interface ResearchSidebarProps {
  className?: string;
}

export function ResearchSidebar({ className }: ResearchSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [expandedGroups, setExpandedGroups] = useState<string[]>(["research"]);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.flatMap((section) =>
        section.children
          ? [section, ...section.children]
          : [section]
      );

      for (const section of sectionElements.reverse()) {
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

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const isActive = (id: string) => activeSection === id;
  const isChildActive = (section: NavSection) =>
    section.children?.some((child) => isActive(child.id));

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
                {section.children ? (
                  <>
                    <button
                      onClick={() => toggleGroup(section.id)}
                      className={cn(
                        "nav-item w-full flex items-center justify-between",
                        (isActive(section.id) || isChildActive(section)) && "active"
                      )}
                    >
                      <span>{section.label}</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200",
                          expandedGroups.includes(section.id) && "rotate-180"
                        )}
                      />
                    </button>
                    {expandedGroups.includes(section.id) && (
                      <ul className="mt-1 space-y-0.5">
                        {section.children.map((child) => (
                          <li key={child.id}>
                            <button
                              onClick={() => scrollToSection(child.id)}
                              className={cn(
                                "nav-item nav-item-sub w-full text-left",
                                isActive(child.id) && "active"
                              )}
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={cn(
                      "nav-item w-full text-left",
                      isActive(section.id) && "active"
                    )}
                  >
                    {section.label}
                  </button>
                )}
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
