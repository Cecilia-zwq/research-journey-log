import { User } from "lucide-react";

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function ProfilePhoto({ src, alt = "Profile photo", className }: ProfilePhotoProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-elevated bg-secondary flex items-center justify-center">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <User className="w-16 h-16 text-muted-foreground/50" />
          </div>
        )}
      </div>
      {/* Decorative ring */}
      <div className="absolute inset-0 -m-2 rounded-full border-2 border-accent/20" />
    </div>
  );
}
