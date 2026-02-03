import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  achievement?: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  achievement,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "card-research p-6 flex flex-col h-full",
        className
      )}
    >
      <div className="flex-1">
        <h3 className="font-heading text-xl font-medium text-foreground mb-2">
          {title}
        </h3>
        {achievement && (
          <p className="text-accent text-sm font-medium mb-3">
            🏆 {achievement}
          </p>
        )}
        <p className="text-body-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex gap-4 mt-6 pt-4 border-t border-border">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink size={16} />
              View
            </a>
          )}
        </div>
      )}
    </div>
  );
}
