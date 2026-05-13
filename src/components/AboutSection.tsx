import aboutImg from "@/assets/about-studio.jpg";

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "1000+", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding beauty-gradient">
      <div className="container-beauty">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="font-script text-2xl text-accent mb-2">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Shilpa's Beauty Studio
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              At Shilpa's Beauty Studio, we believe that every person deserves to feel
              confident and beautiful. With years of expertise and state-of-the-art
              technology, we provide professional beauty services in a warm and welcoming
              environment. Our certified professionals are dedicated to delivering
              exceptional results tailored to your unique needs.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                    {stat.number}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src={aboutImg} alt="Shilpa's Beauty Studio interior" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-accent/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
