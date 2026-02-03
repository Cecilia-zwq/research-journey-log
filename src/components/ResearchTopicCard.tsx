import { useState } from "react";
import { ChevronRight, ExternalLink, Mail, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchProject {
  title: string;
  status: "ongoing" | "completed" | "starting" | "ideas";
  description: string;
  details?: string;
  publication?: string;
  link?: string;
  lookingFor?: string[];
}

interface ResearchTopicCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  projects: ResearchProject[];
  titleColor?: string;
  subtitleColor?: string;
}

export function ResearchTopicCard({
  id,
  title,
  subtitle,
  image,
  projects,
  titleColor = "text-white",
  subtitleColor = "text-white/75",
}: ResearchTopicCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isIdeasCard = projects.some((p) => p.status === "ideas");

  return (
    <div id={id} className="card-research scroll-mt-24">
      {/* Header with image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-xs" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3
            className={cn(
              "heading-subsection", titleColor, "drop-shadow-lg"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-sm mt-1", subtitleColor, "drop-shadow-md"
            )}
          >
            {subtitle}
          </p>
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
          {isExpanded ? (isIdeasCard ? "Hide ideas" : "Hide details") : isIdeasCard ? "View ideas" : "View projects"}
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "py-1",
                  isIdeasCard
                    ? "border-l-2 border-accent/30 pl-4 bg-accent/5 rounded-r-lg p-4"
                    : "border-l-2 border-border pl-4"
                )}
              >
                <div className="flex items-start gap-3">
                  {isIdeasCard && (
                    <div className="p-2 rounded-full bg-accent/10 mt-1 flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-accent" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="font-medium text-foreground">
                        {project.title}
                      </h4>
                      {!isIdeasCard && (
                        <span
                          className={cn(
                            "text-xs font-medium",
                            project.status === "ongoing" &&
                              "status-ongoing text-accent",
                            project.status === "starting" &&
                              "status-ongoing text-muted-foreground",
                            project.status === "completed" &&
                              "status-completed text-primary"
                          )}
                        >
                          {project.status === "ongoing" && "Ongoing"}
                          {project.status === "starting" && "Just Started"}
                          {project.status === "completed" && "Completed"}
                        </span>
                      )}
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
                    {project.lookingFor && project.lookingFor.length > 0 && (
                      <div className="mt-3">
                        <p className="text-xs font-medium text-foreground mb-2">
                          Looking for:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.lookingFor.map((item) => (
                            <span key={item} className="tag tag-accent">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {isIdeasCard && (
                      <div className="mt-4 pt-3 border-t border-border">
                        <a
                          href="mailto:wenqingzhang1122@gmail.com?subject=Collaboration Inquiry"
                          className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
                        >
                          <Mail size={14} />
                          Reach out to collaborate
                        </a>
                      </div>
                    )}
                  </div>
                  {!isIdeasCard && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors flex-shrink-0"
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
