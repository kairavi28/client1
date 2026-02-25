import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-beauty">
        <h2 className="font-script text-5xl md:text-7xl text-foreground mb-2 animate-fade-up">
          Shilpa's
        </h2>
        <p className="font-heading text-lg md:text-xl tracking-[0.3em] uppercase text-foreground/70 mb-6 animate-fade-up-delay">
          Beauty Studio
        </p>
        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up-delay">
          Where Beauty Meets Excellence
        </h1>
        <p className="font-body text-foreground/70 text-lg max-w-xl mx-auto mb-10 animate-fade-up-delay-2">
          Premium beauty services in a warm and welcoming environment
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button variant="beauty" size="xl" asChild>
            <Link to="/contact">Book Appointment</Link>
          </Button>
          <Button variant="beauty-outline" size="xl" asChild>
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
