import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchProject {
  title: string;
  status: "ongoing" | "completed" | "starting";
  description: string;
  details?: string;
  publication?: string;
  link?: string;
}

interface ResearchTopicCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  projects: ResearchProject[];
}

export function ResearchTopicCard({
  id,
  title,
  subtitle,
  image,
  projects,
}: ResearchTopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id={id} className="card-research scroll-mt-24">
      {/* Header with image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="heading-subsection text-primary-foreground">{title}</h3>
          <p className="text-primary-foreground/80 text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      {/* Expandable content */}
      <div className="p-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-accent font-medium text-sm hover:underline"
        >
          <ChevronRight
            size={16}
            className={cn(
              "transition-transform duration-200",
              isExpanded && "rotate-90"
            )}
          />
          {isExpanded ? "Hide details" : "View projects"}
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border-l-2 border-border pl-4 py-1"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="font-medium text-foreground">{project.title}</h4>
                      <span
                        className={cn(
                          "text-xs font-medium",
                          project.status === "ongoing" && "status-ongoing text-accent",
                          project.status === "starting" && "status-ongoing text-muted-foreground",
                          project.status === "completed" && "status-completed text-primary"
                        )}
                      >
                        {project.status === "ongoing" && "Ongoing"}
                        {project.status === "starting" && "Just Started"}
                        {project.status === "completed" && "Completed"}
                      </span>
                    </div>
                    <p className="text-body-sm text-muted-foreground mt-2">
                      {project.description}
                    </p>
                    {project.details && (
                      <p className="text-body-sm text-muted-foreground mt-2 italic">
                        {project.details}
                      </p>
                    )}
                    {project.publication && (
                      <p className="text-xs text-accent mt-2 font-medium">
                        📄 {project.publication}
                      </p>
                    )}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
