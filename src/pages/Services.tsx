import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Droplets, User, Palette, ArrowRight, Star, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import eyebrowsImg from "@/assets/services/eyebrows.webp";
import waxingImg from "@/assets/services/waxing.webp";
import microNeedlingImg from "@/assets/services/microneedling.jpg";
import laserHairRemovalImg from "@/assets/services/laser_hair_removal.webp";

const serviceCategories = [
  {
    id: "eyebrows",
    name: "Eyebrows",
    icon: Scissors,
    image: eyebrowsImg,
    gradient: "from-purple-500/10 to-pink-500/10",
    description: "Professional eyebrow shaping and enhancement services for perfectly defined brows.",
    services: [
      { name: "Eyebrow Threading", price: "$7", popular: true },
      { name: "Full Face with Eyebrow Threading", price: "$20", popular: true },
      { name: "Eyebrow Tinting", price: "$15" },
      { name: "Lash Tinting", price: "$15" },
      { name: "Brow Henna", price: "$20" },
      { name: "Lash Lift", price: "$40" },
    ],
  },
  {
    id: "waxing",
    name: "Waxing Services",
    icon: Sparkles,
    image: waxingImg,
    gradient: "from-orange-500/10 to-red-500/10",
    description: "Gentle and effective waxing services for smooth, radiant skin that lasts for weeks.",
    services: [
      { name: "Eyebrow with Full Face", price: "$20" },
      { name: "Full Arm with Armpit", price: "$25", popular: true },
      { name: "Full Legs", price: "$25", popular: true },
      { name: "Brazilian Wax", price: "$25" },
      { name: "Full Body Wax", price: "$110" },
    ],
  },
  {
    id: "facials",
    name: "Facials",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    gradient: "from-blue-500/10 to-cyan-500/10",
    description: "Luxurious facial treatments for deep cleansing, hydration, and skin rejuvenation.",
    services: [
      { name: "VLCC Gold Facial", price: "$40", popular: true },
      { name: "Forever Young Facial", price: "$50" },
      { name: "Hydrafacial", price: "$70", popular: true },
      { name: "Skin Rejuvenator", price: "$110" },
    ],
  },
  {
    id: "micro-needling",
    name: "Micro Needling",
    icon: Sparkles,
    image: microNeedlingImg,
    gradient: "from-yellow-500/10 to-amber-500/10",
    description: "Collagen-inducing treatment to improve skin texture and reduce the appearance of scars and fine lines.",
    services: [
      { name: "Microneedling", price: "$180", popular: true },
    ],
  },
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    icon: Zap,
    image: laserHairRemovalImg,
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    description: "Advanced laser hair removal treatments for smooth, long-lasting results (available for women and men).",
    services: [
      { name: "Full Face", price: "$80", popular: true },
      { name: "Side Burns", price: "$40" },
      { name: "Chin", price: "$35" },
      { name: "Upper Lips", price: "$30" },
      { name: "Underarms", price: "$60" },
      { name: "Full Arms", price: "$120" },
      { name: "Half Arms", price: "$70" },
      { name: "Full Legs", price: "$160" },
      { name: "Half Legs", price: "$100" },
      { name: "Buttocks", price: "$50" },
      { name: "Full Stomach", price: "$100" },
      { name: "Full Back", price: "$100" },
      { name: "Brazilian", price: "$110" },
      { name: "Bikini", price: "$80" },
      { name: "Full Body", price: "$400" },
      { name: "Package: Full Face (5 Treatments)", price: "$350 (save $50)" },
      { name: "Package: Face + Underarms (5 Treatments)", price: "$600 (save $100)" },
      { name: "Package: Face + Brazilian + Underarms (3 Treatments)", price: "$650 (save $100)" },
      { name: "Package: Face + Brazilian + Underarms (5 Treatments)", price: "$1000 (save $250)" },
      { name: "Package: Brazilian (5 Treatments)", price: "$450 (save $100)" },
    ],
  },
  {
    id: "mens-services",
    name: "Men's Services",
    icon: User,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
    gradient: "from-slate-500/10 to-gray-500/10",
    description: "Dedicated grooming and self-care services designed for men.",
    services: [
      { name: "Men's Facial", price: "$60", popular: true },
      { name: "Men's Massage", price: "$60", popular: true },
      { name: "Men's Laser Hair Removal", price: "Available (see Laser Hair Removal)" },
    ],
  },
  {
    id: "makeup",
    name: "Makeup and Hairstyle",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    gradient: "from-pink-500/10 to-rose-500/10",
    description: "Complete makeup and hairstyling services for special occasions and events.",
    services: [
      { name: "Makeup and Hairstyle", price: "$120", popular: true },
    ],
  },
];

const Services = () => {
  return (
    <>
      <PageHero
        badge="Our Services"
        badgeIcon={Star}
        title="Services & Pricing"
        highlightedWord="Pricing"
        description="Discover our comprehensive range of beauty services with transparent pricing"
        breadcrumb="Services & Pricing"
      />

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container-beauty">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <div
                  key={category.id}
                  id={category.id}
                  className="group"
                  style={{
                    animation: `fadeUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="beauty-card overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                    {/* Image Header */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} mix-blend-overlay`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Category Title on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                          </div>
                          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">
                            {category.name}
                          </h2>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Description */}
                      <p className="font-body text-muted-foreground leading-relaxed mb-6">
                        {category.description}
                      </p>

                      {/* Services List */}
                      <div className="space-y-2 mb-6 flex-1">
                        {category.services.map((service, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-secondary/50 transition-all duration-300 group/item"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform"></div>
                              <span className="font-body text-foreground group-hover/item:text-primary transition-colors">
                                {service.name}
                              </span>
                              {service.popular && (
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-heading font-semibold">
                                  Popular
                                </span>
                              )}
                            </div>
                            <span className="font-heading text-lg font-bold text-primary ml-4">
                              {service.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Book Button */}
                      <Button 
                        variant="beauty" 
                        size="lg" 
                        className="w-full group/btn" 
                        asChild
                      >
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Book Appointment
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-beauty text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Book Your <span className="text-gradient-pink">Appointment?</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us today to schedule your beauty treatment. Our expert team is ready to help you look and feel your best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="beauty" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-secondary/50" 
                asChild
              >
                <a href="tel:3062508928" className="flex items-center gap-2">
                  📞 (306) 250-8928
                </a>
              </Button>
            </div>
            
            <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-2xl">📍</span>
              <span className="text-lg">128 Barrett St, Saskatoon</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
