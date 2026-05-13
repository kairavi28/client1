import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Sparkles, Send, Calendar, User, AtSign } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";

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
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service || !form.date || !form.time) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create WhatsApp message with form details
    const whatsappMessage = `Hi! I would like to book an appointment at Shilpa's Beauty Studio.

My details:
• Name: ${form.name}
• Email: ${form.email}
• Phone: ${form.phone}
• Service: ${form.service}
• Preferred Date: ${form.date}
• Preferred Time: ${form.time}
${form.message ? `• Additional Message: ${form.message}` : ''}

Thank you!`;

    const phoneNumber = "13062508928"; // +1 (306) 250-8928
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast.success("Opening WhatsApp with your details!");
    setForm({ name: "", email: "", phone: "", service: "", date: "", time: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        badgeIcon={MessageCircle}
        title="Get in Touch"
        highlightedWord="Touch"
        description="Have questions? We'd love to hear from you. Reach out and let's make you beautiful!"
        breadcrumb="Contact"
      />

      <section className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-beauty relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="beauty-card p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-[100px]" />
                
                {/* Header */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Send className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        Book Your Appointment
                      </h2>
                      <p className="font-body text-sm text-muted-foreground">Fill in your details and we'll get back to you</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
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
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <AtSign className="w-4 h-4 text-primary" />
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
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
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
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                        placeholder="+1 (306) 250-8928"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="service" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Interested Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="date" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Preferred Date *
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="time" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Preferred Time *
                      </label>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all hover:border-primary/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="font-heading text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      maxLength={1000}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-border bg-background/50 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:bg-background transition-all resize-none hover:border-primary/50"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button variant="beauty" size="lg" type="submit" className="w-full group relative overflow-hidden">
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message via WhatsApp
                    </span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Address Card */}
                <a
                  href="https://maps.google.com/?q=128+Barrett+St+Saskatoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="beauty-card p-6 group hover:shadow-2xl transition-all duration-300 block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Visit Us
                      </p>
                      <p className="font-body text-base text-foreground font-medium leading-relaxed">
                        128 Barrett St<br />
                        Saskatoon, SK<br />
                        Canada
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+13062508928"
                  className="beauty-card p-6 group hover:shadow-2xl transition-all duration-300 block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Call Us
                      </p>
                      <p className="font-body text-base text-foreground font-medium">
                        +1 (306) 250-8928
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:shilpasbeautystudio@hotmail.com"
                  className="beauty-card p-6 group hover:shadow-2xl transition-all duration-300 block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Email Us
                      </p>
                      <p className="font-body text-sm text-foreground font-medium break-all">
                        shilpasbeautystudio@hotmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* Hours Card */}
                <div className="beauty-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        Working Hours
                      </p>
                      <p className="font-body text-base text-foreground font-medium leading-relaxed">
                        Monday - Saturday<br />
                        10:00 AM - 8:00 PM<br />
                        <span className="text-muted-foreground text-sm">Sunday: Closed</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="beauty-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg font-bold text-foreground">Connect With Us</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61555053069891"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl"
                    aria-label="Facebook"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://www.instagram.com/shilpas_beautystudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 shadow-md hover:shadow-xl"
                    aria-label="Instagram"
                  >
                    <Instagram size={22} />
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
