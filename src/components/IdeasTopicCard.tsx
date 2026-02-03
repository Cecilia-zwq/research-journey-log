import { useState } from "react";
import { ChevronRight, Mail, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface IdeaProject {
  title: string;
  description: string;
  lookingFor: string[];
}

interface IdeasTopicCardProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ideas: IdeaProject[];
}

export function IdeasTopicCard({
  id,
  title,
  subtitle,
  image,
  ideas,
}: IdeasTopicCardProps) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="heading-subsection text-accent-foreground">{title}</h3>
          <p className="text-accent-foreground/80 text-sm mt-1">{subtitle}</p>
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
          {isExpanded ? "Hide ideas" : "View ideas"}
        </button>

        {isExpanded && (
          <div className="mt-6 space-y-6 animate-fade-in">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="border-l-2 border-accent/30 pl-4 py-1 bg-accent/5 rounded-r-lg p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-accent/10 mt-1">
                    <Lightbulb className="w-4 h-4 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{idea.title}</h4>
                    <p className="text-body-sm text-muted-foreground mt-2">
                      {idea.description}
                    </p>
                    <div className="mt-3">
                      <p className="text-xs font-medium text-foreground mb-2">
                        Looking for:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {idea.lookingFor.map((item) => (
                          <span key={item} className="tag tag-accent">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border">
                      <a
                        href="mailto:wenqingzhang1122@gmail.com?subject=Collaboration Inquiry"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
                      >
                        <Mail size={14} />
                        Reach out to collaborate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
