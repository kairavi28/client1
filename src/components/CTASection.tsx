import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative section-padding beauty-gradient-dark overflow-hidden">
      {/* Brushstroke overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container-beauty relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mb-4">
          Ready to Transform Your Look?
        </h2>
        <p className="font-body text-background/70 text-lg max-w-xl mx-auto mb-10">
          Book your appointment today and experience the Shilpa's difference
        </p>

        <Button variant="beauty" size="xl" asChild>
          <Link to="/contact">Book Now</Link>
        </Button>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-background/60">
            <Phone size={16} />
            <span className="text-sm">+91 XXXXX XXXXX</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-background/60">
            <Mail size={16} />
            <span className="text-sm">info@shilpasbeautystudio.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-background/60">
            <Clock size={16} />
            <span className="text-sm">Mon-Sat: 10AM - 8PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
