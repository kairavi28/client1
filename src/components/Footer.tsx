import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="beauty-gradient-dark text-background/90">
      <div className="container-beauty py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-script text-3xl text-background mb-4">Shilpa's</h3>
            <p className="text-background/70 font-body text-sm leading-relaxed">
              Your destination for premium beauty treatments and personalized care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {["Laser Hair Removal", "Waxing", "Micro Needling", "Hydrafacial", "Threading"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-background/60 hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm">
                <Phone size={16} />
                +91 XXXXX XXXXX
              </a>
              <a href="mailto:info@shilpasbeautystudio.com" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm">
                <Mail size={16} />
                info@shilpasbeautystudio.com
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Shilpa's Beauty Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
