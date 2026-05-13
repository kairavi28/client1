import { Link } from "react-router-dom";
import { Zap, Sparkles, Droplets, Scissors, FlameKindling, ArrowRight, Star, CheckCircle } from "lucide-react";
import eyebrowsImg from "@/assets/services/eyebrows.webp";
import waxingImg from "@/assets/services/waxing.webp";
import microNeedlingImg from "@/assets/services/microneedling.jpg";
import laserHairRemovalImg from "@/assets/services/laser_hair_removal.webp";

const services = [
  {
    id: 1,
    name: "Laser Hair Removal",
    description: "Advanced laser technology for permanent hair reduction with FDA-approved equipment. Experience smooth, hair-free skin with minimal discomfort.",
    icon: Zap,
    image: laserHairRemovalImg,
    link: "/services#laser-hair-removal",
    gradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
    iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
    iconColor: "text-purple-600",
    popular: true,
    features: ["6-8 Sessions", "FDA Approved", "All Skin Types"],
  },
  {
    id: 2,
    name: "Waxing",
    description: "Gentle and effective hair removal for smooth, radiant skin that lasts for weeks. Premium quality wax for sensitive skin.",
    icon: FlameKindling,
    image: waxingImg,
    link: "/services#waxing",
    gradient: "from-orange-500/10 via-red-500/10 to-orange-500/10",
    iconBg: "bg-gradient-to-br from-orange-100 to-red-100",
    iconColor: "text-orange-600",
    popular: false,
    features: ["3-6 Weeks", "Premium Wax", "All Body Areas"],
  },
  {
    id: 3,
    name: "Micro Needling",
    description: "Revolutionary skin rejuvenation and collagen induction therapy for youthful glow. Reduces scars, wrinkles, and improves texture.",
    icon: Sparkles,
    image: microNeedlingImg,
    link: "/services#micro-needling",
    gradient: "from-yellow-500/10 via-amber-500/10 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-yellow-100 to-amber-100",
    iconColor: "text-yellow-600",
    popular: true,
    features: ["3-6 Sessions", "Collagen Boost", "Minimal Downtime"],
  },
  {
    id: 4,
    name: "Hydrafacial",
    description: "Deep cleansing and intense hydration facial treatment with immediate results. No downtime, instant glow guaranteed.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    link: "/services#hydrafacial",
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
    popular: true,
    features: ["60 Minutes", "Instant Glow", "No Downtime"],
  },
  {
    id: 5,
    name: "Threading",
    description: "Precise eyebrow shaping and facial hair threading by expert beauticians. Ancient technique for perfect results.",
    icon: Scissors,
    image: eyebrowsImg,
    link: "/services#threading",
    gradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    iconBg: "bg-gradient-to-br from-green-100 to-emerald-100",
    iconColor: "text-green-600",
    popular: false,
    features: ["10-20 Minutes", "Precise Shaping", "No Chemicals"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-beauty relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-up">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="font-heading text-sm font-semibold text-primary uppercase tracking-wider">
              What We Offer
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground animate-fade-up-delay">
            Our Premium <span className="text-gradient-pink">Services</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-2">
            Experience luxury beauty treatments designed to enhance your natural radiance
          </p>
        </div>

        {/* Alternating Vertical Cards */}
        <div className="space-y-12 lg:space-y-16 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 !== 0;
            
            return (
              <div
                key={service.id}
                className="group"
                style={{
                  animation: `fadeUp 0.8s ease-out ${index * 0.15}s forwards`,
                  opacity: 0,
                }}
              >
                <Link
                  to={service.link}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt={service.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-overlay`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Icon Badge */}
                      <div className="absolute bottom-6 left-6 z-10">
                        <div className={`w-20 h-20 rounded-2xl ${service.iconBg} backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-white/20`}>
                          <Icon className={`w-10 h-10 ${service.iconColor}`} strokeWidth={2} />
                        </div>
                      </div>

                      {/* Popular Badge */}
                      {service.popular && (
                        <div className="absolute top-6 right-6 z-20">
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-heading font-bold shadow-xl flex items-center gap-2 backdrop-blur-sm border border-white/20">
                            <Star className="w-4 h-4 fill-current" />
                            Popular
                          </div>
                        </div>
                      )}

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="font-body text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300"
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="font-heading text-sm font-medium text-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:bg-primary group-hover:border-primary text-primary group-hover:text-primary-foreground font-heading font-semibold transition-all duration-300 shadow-lg group-hover:shadow-xl">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
