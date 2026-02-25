import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const serviceOptions = [
  "Laser Hair Removal",
  "Waxing",
  "Micro Needling",
  "Hydrafacial",
  "Threading",
  "General Inquiry",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Page Hero */}
      <section className="beauty-gradient pt-32 pb-16">
        <div className="container-beauty text-center">
          <p className="font-body text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            {" > "}
            <span className="text-foreground">Contact</span>
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="font-body text-muted-foreground mt-3 max-w-lg mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-beauty">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="beauty-card p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="font-heading text-sm font-medium text-foreground mb-1.5 block">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-heading text-sm font-medium text-foreground mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={255}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-heading text-sm font-medium text-foreground mb-1.5 block">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="font-heading text-sm font-medium text-foreground mb-1.5 block">
                    Interested Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="font-heading text-sm font-medium text-foreground mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                    placeholder="Your message (optional)"
                  />
                </div>

                <Button variant="beauty" size="lg" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Address</p>
                      <p className="font-body text-sm text-muted-foreground">
                        123 Beauty Lane<br />
                        City, State - 400001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Phone</p>
                      <p className="font-body text-sm text-muted-foreground">+91 XXXXX XXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Email</p>
                      <p className="font-body text-sm text-muted-foreground">info@shilpasbeautystudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-foreground">Working Hours</p>
                      <p className="font-body text-sm text-muted-foreground">
                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
