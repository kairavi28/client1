import { Link } from "react-router-dom";
import { Zap, Sparkles, Droplets, Scissors, FlameKindling } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Laser Hair Removal",
    description: "Advanced laser technology for permanent hair reduction",
    icon: Zap,
    link: "/services",
  },
  {
    id: 2,
    name: "Waxing",
    description: "Gentle and effective hair removal for smooth skin",
    icon: FlameKindling,
    link: "/services",
  },
  {
    id: 3,
    name: "Micro Needling",
    description: "Skin rejuvenation and collagen induction therapy",
    icon: Sparkles,
    link: "/services",
  },
  {
    id: 4,
    name: "Hydrafacial",
    description: "Deep cleansing and hydration facial treatment",
    icon: Droplets,
    link: "/services",
  },
  {
    id: 5,
    name: "Threading",
    description: "Precise eyebrow and facial hair threading",
    icon: Scissors,
    link: "/services",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-beauty">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-accent mb-2">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Premium Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                to={service.link}
                className="beauty-card group text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
