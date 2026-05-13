import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  badge: string;
  badgeIcon: LucideIcon;
  title: string;
  highlightedWord?: string;
  description: string;
  breadcrumb: string;
}

const PageHero = ({ badge, badgeIcon: BadgeIcon, title, highlightedWord, description, breadcrumb }: PageHeroProps) => {
  const titleParts = highlightedWord ? title.split(highlightedWord) : [title];

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 beauty-gradient">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-accent/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Content */}
      <div className="container-beauty text-center relative z-10 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/60 backdrop-blur-md border border-border/50 shadow-xl mb-6 animate-fade-up">
          <BadgeIcon className="w-5 h-5 text-primary" />
          <span className="font-heading text-sm font-semibold text-primary uppercase tracking-wider">
            {badge}
          </span>
        </div>

        {/* Breadcrumb */}
        <p className="font-body text-sm text-muted-foreground mb-4 animate-fade-up-delay">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          {" > "}
          <span className="text-foreground">{breadcrumb}</span>
        </p>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 animate-fade-up-delay leading-tight">
          {highlightedWord ? (
            <>
              {titleParts[0]}
              <span className="text-gradient-pink">{highlightedWord}</span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h1>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up-delay-2">
          {description}
        </p>

        {/* Decorative Line */}
        <div className="mt-8 flex items-center justify-center gap-3 animate-fade-up-delay-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;