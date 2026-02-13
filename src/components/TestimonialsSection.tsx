import { Star } from "lucide-react";

const testimonials = [
  { name: "Ankit Subedi", country: "Studying in Australia", quote: "ETG made my dream of studying at the University of Melbourne a reality. Their team guided me through every step with such professionalism.", rating: 5 },
  { name: "Rajan Kandel", country: "Studying in Canada", quote: "I got into the University of Toronto with a scholarship! The counselors knew exactly what Canadian universities look for.", rating: 5 },
  { name: "Biswas Ghimire", country: "Studying in New Zealand", quote: "From IELTS prep to visa approval, everything was seamless. I'm now at the University of Auckland and loving every moment.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Student Stories
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Hear From Our Students
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
