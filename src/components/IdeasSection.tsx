import { Lightbulb, Mail, MessageSquare } from "lucide-react";

interface IdeaCardProps {
  title: string;
  description: string;
  lookingFor: string[];
}

export function IdeaCard({ title, description, lookingFor }: IdeaCardProps) {
  return (
    <div className="card-research p-6 border-2 border-dashed border-accent/30 bg-accent/5">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-accent/10">
          <Lightbulb className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h4 className="font-heading text-lg font-medium text-foreground">
            {title}
          </h4>
          <p className="text-body-sm text-muted-foreground mt-2">
            {description}
          </p>
          <div className="mt-4">
            <p className="text-xs font-medium text-foreground mb-2">
              Looking for:
            </p>
            <div className="flex flex-wrap gap-2">
              {lookingFor.map((item) => (
                <span key={item} className="tag tag-accent">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
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
  );
}

export function IdeasSection() {
  const ideas = [
    {
      title: "Evaluating LLM Robustness to Misinformation",
      description:
        "Investigating how LLMs respond to and propagate misinformation across multiple interaction turns. Are they resilient to false claims, or do they amplify them?",
      lookingFor: ["Experimental Design", "NLP Expertise", "Data Collection"],
    },
    {
      title: "Comparing LLM vs Human Response Distributions",
      description:
        "A methodological study comparing the statistical distributions of LLM-generated responses with human-generated data in classic psychological research paradigms.",
      lookingFor: ["Psychology Background", "Statistical Methods", "Human Subjects Research"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="text-accent" />
        <p className="text-body text-muted-foreground">
          These are nascent ideas I'm actively exploring. If any resonate with your research interests, I'd love to connect!
        </p>
      </div>
      {ideas.map((idea, index) => (
        <IdeaCard key={index} {...idea} />
      ))}
    </div>
  );
}
