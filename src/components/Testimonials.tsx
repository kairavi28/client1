import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Shilpa's Beauty Studio is amazing! The laser hair removal treatment was comfortable and effective. Highly recommend!",
    author: "Priya S.",
    rating: 5,
  },
  {
    id: 2,
    text: "The hydrafacial left my skin glowing! Such a relaxing experience with professional service.",
    author: "Anjali M.",
    rating: 5,
  },
  {
    id: 3,
    text: "Best threading in town! Shilpa's attention to detail is unmatched. I'm a regular client now.",
    author: "Neha R.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-padding beauty-gradient">
      <div className="container-beauty">
        <div className="text-center mb-14">
          <p className="font-script text-2xl text-accent mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <div className="beauty-card text-center py-10 px-8">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="font-body text-foreground/80 text-lg italic leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>

            <p className="font-heading text-sm font-semibold text-foreground uppercase tracking-wider">
              — {testimonials[current].author}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
