import { BookOpen, FileCheck, Plane, Building2, CreditCard, HeartHandshake } from "lucide-react";

const services = [
  { icon: BookOpen, title: "Course & University Selection", desc: "Personalized recommendations based on your academic profile, interests, and career goals." },
  { icon: FileCheck, title: "Visa Assistance", desc: "End-to-end visa application support with 98% success rate across all destinations." },
  { icon: Plane, title: "Travel & Accommodation", desc: "Pre-departure guidance including flights, housing, and settling-in support." },
  { icon: Building2, title: "Application Processing", desc: "Complete application management from documentation to submission and follow-ups." },
  { icon: CreditCard, title: "Scholarship Guidance", desc: "Identify and apply for scholarships to make your education more affordable." },
  { icon: HeartHandshake, title: "Post-Arrival Support", desc: "Ongoing assistance after you land — from orientation to part-time job guidance." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Comprehensive Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
