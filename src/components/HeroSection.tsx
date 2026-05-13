import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Heart, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-primary/20 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Sparkles */}
        <Sparkles className="absolute top-20 left-[10%] w-6 h-6 text-primary/40 animate-pulse" style={{ animationDelay: '0s' }} />
        <Sparkles className="absolute top-40 right-[15%] w-8 h-8 text-accent/30 animate-pulse" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-32 left-[20%] w-5 h-5 text-primary/50 animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Stars */}
        <Star className="absolute top-[30%] right-[10%] w-4 h-4 text-primary/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Star className="absolute bottom-[40%] left-[8%] w-6 h-6 text-accent/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Floating Hearts */}
        <Heart className="absolute top-[60%] right-[25%] w-5 h-5 text-primary/25 animate-pulse" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-[20%] right-[12%] w-4 h-4 text-accent/35 animate-pulse" style={{ animationDelay: '2.5s' }} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center container-beauty px-4">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="font-heading text-sm font-medium text-foreground">Premium Beauty Experience</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>

        {/* Main Heading with Decorative Elements */}
        <div className="relative inline-block mb-4">
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />
          
          <h2 className="font-script text-6xl md:text-8xl lg:text-9xl text-gradient-pink mb-2 animate-fade-up leading-tight">
            Shilpa's
          </h2>
        </div>

        {/* Subtitle with Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-up-delay">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
          <p className="font-heading text-xl md:text-2xl tracking-[0.3em] uppercase text-foreground/80">
            Beauty Studio
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        {/* Main Tagline */}
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up-delay max-w-4xl mx-auto leading-tight">
          Where Beauty Meets{" "}
          <span className="text-gradient-pink relative inline-block">
            Excellence
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
              <path d="M0 4C50 2 150 2 200 4" stroke="url(#gradient)" strokeWidth="2" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--beauty-pink))" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="hsl(var(--beauty-pink))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--beauty-pink))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="font-body text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-fade-up-delay-2 leading-relaxed">
          Experience premium beauty services in a luxurious and welcoming environment.
          <span className="block mt-2 text-primary font-medium">Your journey to radiance begins here ✨</span>
        </p>

        {/* CTA Buttons with Enhanced Design */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-delay-2 mb-12">
          <Button
            variant="beauty"
            size="xl"
            asChild
            className="group relative overflow-hidden"
          >
            <Link to="/contact" className="flex items-center gap-2">
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            variant="beauty-outline"
            size="xl"
            asChild
            className="group"
          >
            <Link to="/services" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Explore Services</span>
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/60 animate-fade-up-delay-2">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="font-heading">Premium Quality</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-heading">Expert Care</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-heading">Luxury Experience</span>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
