import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ETGhero from "@/assets/ETGhero.png";

const stats = [
  { icon: Globe, value: "50+", label: "Universities" },
  { icon: Users, value: "10,000+", label: "Students Placed" },
  { icon: Award, value: "98%", label: "Visa Success" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 w-auto h-auto bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ETGhero})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-4">
            Your Gateway to Global Education
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Transform Your Future,{" "}
            <span className="text-gradient-gold">Study Abroad</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg font-body">
            Expert guidance to help you study in Australia, Canada, New Zealand,
            UK & USA. From university selection to visa approval — we're with you
            every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-secondary text-xl text-secondary-foreground hover:bg-secondary/90 font-semibold" asChild>
              <a href="#contact">
                Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black text-xl hover:bg-primary-foreground/10" asChild>
              <a href="#destinations">Explore Destinations</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 text-primary-foreground">
              <Icon className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm text-primary-foreground/70">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
