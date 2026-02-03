import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-spacing scroll-mt-8", className)}
    >
      {children}
    </section>
  );
}

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="heading-section text-foreground">{children}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 text-body">{subtitle}</p>
      )}
    </div>
  );
}
