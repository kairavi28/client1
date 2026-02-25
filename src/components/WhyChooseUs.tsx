import { Award, Sparkles, ShieldCheck, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Highly trained and experienced beauty experts",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "Using only the finest quality products and equipment",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene Standards",
    description: "Maintaining the highest cleanliness and safety protocols",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Customized treatments for your unique beauty needs",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-beauty">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-accent mb-2">Our Promise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
