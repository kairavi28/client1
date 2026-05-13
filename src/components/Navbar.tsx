import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_shilpa.png";

const navItems = [
  { label: "Home", link: "/" },
  { label: "Services", link: "/services" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (link: string) => {
    // For hash links like /#about, only highlight on homepage
    if (link.includes("#")) {
      return location.pathname === "/" && location.hash === link.split("#")[1] ? `#${location.hash.split("#")[1]}` : false;
    }
    // For exact home match
    if (link === "/" && location.pathname === "/") return true;
    // For other routes
    if (link !== "/" && location.pathname === link) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className={`container-beauty flex items-center justify-between transition-all duration-300 ${
        scrolled ? "h-20 lg:h-20" : "h-28 lg:h-32"
      }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Shilpa's Beauty Studio"
            className={`w-auto object-contain group-hover:scale-105 transition-all duration-300 ${
              scrolled ? "h-12 lg:h-14" : "h-24 lg:h-28"
            }`}
          />
        </Link>

        {/* Desktop Nav - Reference Style with Beauty Theme */}
        <div className="hidden lg:flex items-center">
          {/* Single Container for All Navigation */}
          <div className="flex items-center gap-2 bg-card/60 backdrop-blur-xl rounded-full px-3 py-3 border border-border/30 shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={`relative px-6 py-2.5 rounded-full font-heading text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive(item.link)
                    ? "bg-primary/90 text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button Inside Container */}
            <Link
              to="/contact"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 group ml-2"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-md border-t border-border shadow-xl">
          <div className="container-beauty py-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className={`px-4 py-3 rounded-xl font-heading text-base font-medium tracking-wide transition-all ${
                  isActive(item.link)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="default"
              size="lg"
              asChild
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold mt-2"
            >
              <Link to="/contact" className="flex items-center justify-center gap-2">
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
