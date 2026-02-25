import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Zap, FlameKindling, Sparkles, Droplets, Scissors } from "lucide-react";

const services = [
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    icon: Zap,
    description:
      "Experience the freedom of smooth, hair-free skin with our advanced laser hair removal technology. Our FDA-approved laser system targets hair follicles precisely, ensuring effective and long-lasting results with minimal discomfort.",
    benefits: [
      "Permanent hair reduction",
      "Suitable for all skin types",
      "Quick and virtually painless",
      "No ingrown hairs",
      "Smooth, even skin tone",
    ],
    details: {
      Duration: "30-90 minutes",
      Sessions: "6-8 for optimal results",
    },
  },
  {
    id: "waxing",
    name: "Waxing",
    icon: FlameKindling,
    description:
      "Our gentle waxing services provide smooth, hair-free skin that lasts for weeks. We use premium quality wax formulated for sensitive skin, ensuring a comfortable experience with beautiful results.",
    benefits: [
      "Smooth skin for 3-6 weeks",
      "Reduces hair regrowth over time",
      "Exfoliates dead skin cells",
      "Suitable for all body areas",
      "Quick and efficient",
    ],
    details: {
      Duration: "15-60 minutes",
      Types: "Body, facial, Brazilian",
    },
  },
  {
    id: "micro-needling",
    name: "Micro Needling",
    icon: Sparkles,
    description:
      "Rejuvenate your skin with our professional micro-needling treatment. This minimally invasive procedure stimulates collagen production, improving skin texture, reducing scars, and promoting a youthful glow.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Minimizes acne scars",
      "Improves skin texture and tone",
      "Shrinks pores",
      "Stimulates natural collagen",
    ],
    details: {
      Duration: "45-60 minutes",
      Sessions: "3-6 for best results",
    },
  },
  {
    id: "hydrafacial",
    name: "Hydrafacial",
    icon: Droplets,
    description:
      "Experience the ultimate facial treatment that cleanses, exfoliates, and hydrates your skin in one luxurious session. Our HydraFacial treatment delivers immediate, visible results with no downtime.",
    benefits: [
      "Deep pore cleansing",
      "Intense hydration",
      "Immediate glow",
      "Reduces fine lines",
      "Even skin tone",
      "No downtime",
    ],
    details: {
      Duration: "60 minutes",
      Frequency: "Monthly for maintenance",
    },
  },
  {
    id: "threading",
    name: "Threading",
    icon: Scissors,
    description:
      "Achieve perfectly shaped eyebrows and hair-free facial skin with our expert threading services. This ancient technique provides precise, long-lasting results that enhance your natural beauty.",
    benefits: [
      "Precise hair removal",
      "Lasts longer than tweezing",
      "No chemicals or heat",
      "Suitable for sensitive skin",
      "Perfectly shaped brows",
    ],
    details: {
      Duration: "10-20 minutes",
      Areas: "Eyebrow, lip, face",
    },
  },
];

const Services = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="beauty-gradient pt-32 pb-16">
        <div className="container-beauty text-center">
          <p className="font-body text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            {" > "}
            <span className="text-foreground">Services</span>
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-beauty space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Visual */}
                <div className={`${isReversed ? "lg:order-2" : ""}`}>
                  <div className="beauty-card aspect-[4/3] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-10 h-10 text-foreground" />
                      </div>
                      <p className="font-script text-3xl text-accent">{service.name}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${isReversed ? "lg:order-1" : ""}`}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.name}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-body text-sm text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {Object.entries(service.details).map(([key, value]) => (
                      <div key={key} className="bg-secondary rounded-xl px-4 py-2">
                        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {key}
                        </p>
                        <p className="font-body text-sm text-foreground">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="beauty" size="lg" asChild>
                    <Link to="/contact">Book This Service</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
