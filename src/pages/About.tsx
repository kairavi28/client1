import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Award, Users, Heart, Sparkles, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import aboutImage from "@/assets/about-studio.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: Star, value: "5.0", label: "Rating" },
    { icon: Heart, value: "100%", label: "Satisfaction" },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Excellence",
      description: "We strive for perfection in every service we provide, ensuring the highest quality treatments.",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Your comfort and satisfaction are our top priorities. We treat every client like family.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Our team consists of certified professionals with years of experience in beauty treatments.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We've built a loyal community of clients who trust us with their beauty needs.",
    },
  ];

  const whyChooseUs = [
    "FDA-approved equipment and products",
    "Certified and experienced beauticians",
    "Hygienic and comfortable environment",
    "Personalized treatment plans",
    "Competitive and transparent pricing",
    "Flexible appointment scheduling",
  ];

  return (
    <>
      <PageHero
        badge="About Us"
        badgeIcon={Heart}
        title="About Shilpa's Beauty Studio"
        highlightedWord="Shilpa's Beauty Studio"
        description="Your trusted destination for premium beauty treatments and personalized care"
        breadcrumb="About Us"
      />

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-beauty">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="beauty-card text-center p-8 group hover:shadow-2xl transition-all duration-500"
                  style={{
                    animation: `fadeUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="container-beauty">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="beauty-card overflow-hidden p-0 aspect-[4/3]">
                <img 
                  src={aboutImage} 
                  alt="Shilpa's Beauty Studio" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Welcome to Shilpa's Beauty Studio, where beauty meets excellence. Founded with a passion for helping people look and feel their best, we've been serving the Saskatoon community for over a decade.
                  </p>
                  <p>
                    Our journey began with a simple vision: to create a welcoming space where everyone can experience premium beauty treatments in a comfortable, professional environment. Today, we're proud to be one of the most trusted beauty studios in the area.
                  </p>
                  <p>
                    At Shilpa's Beauty Studio, we believe that beauty is not just about appearance—it's about confidence, self-care, and feeling great in your own skin. That's why we're committed to providing personalized services that cater to your unique needs.
                  </p>
                </div>
              </div>

              <Button variant="beauty" size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background">
        <div className="container-beauty">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-pink">Values</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="beauty-card p-8 text-center group hover:shadow-2xl transition-all duration-500"
                  style={{
                    animation: `fadeUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container-beauty">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-gradient-pink">Us?</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Here's what makes us stand out from the rest
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 beauty-card p-6 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-body text-foreground">{reason}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="beauty" size="lg" asChild>
                <Link to="/contact">Book Your Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
