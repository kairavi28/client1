import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo_shilpa.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/#about" },
    { label: "Contact", path: "/contact" },
  ];

  const services = [
    { label: "Eyebrows", path: "/services#eyebrows" },
    { label: "Waxing Services", path: "/services#waxing" },
    { label: "Facials", path: "/services#facials" },
    { label: "Micro Needling", path: "/services#micro-needling" },
    { label: "Laser Hair Removal", path: "/services#laser-hair-removal" },
    { label: "Men's Services", path: "/services#mens-services" },
    { label: "Makeup & Hairstyle", path: "/services#makeup" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61555053069891" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/shilpas_beautystudio" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-secondary/30 via-background to-secondary/20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container-beauty relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section - Logo & CTA */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center justify-center">
              <img 
                src={logo} 
                alt="Shilpa's Beauty Studio" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your destination for premium beauty treatments and personalized care. Experience luxury and excellence in every service.
            </p>
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Middle Section - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Quick Links */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  Quick Links
                </h4>
              </div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="font-body text-sm">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  Our Services
                </h4>
              </div>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.path}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      <span className="font-body text-sm">{service.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground">
                  Get in Touch
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="tel:3062508928" 
                  className="beauty-card p-4 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Phone
                      </p>
                      <p className="font-body text-sm text-foreground">(306) 250-8928</p>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:shilpasbeautystudio@hotmail.com"
                  className="beauty-card p-4 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Email
                      </p>
                      <p className="font-body text-sm text-foreground break-all">shilpasbeautystudio@hotmail.com</p>
                    </div>
                  </div>
                </a>

                <div className="beauty-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Location
                      </p>
                      <p className="font-body text-sm text-foreground">128 Barrett St, Saskatoon</p>
                    </div>
                  </div>
                </div>

                <div className="beauty-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Hours
                      </p>
                      <p className="font-body text-sm text-foreground">Mon-Sat: 10 AM - 8 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground font-body text-sm text-center md:text-left">
              © {currentYear} Shilpa's Beauty Studio. All rights reserved.
            </p>
            <p className="text-muted-foreground font-body text-sm flex items-center gap-2">
              Crafted with <span className="text-primary">✨</span> for your beauty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
