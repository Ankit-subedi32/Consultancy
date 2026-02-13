const steps = [
  { num: "01", title: "Free Consultation", desc: "Share your goals. We assess your profile and recommend the best options." },
  { num: "02", title: "University Shortlisting", desc: "We curate a list of universities matching your academic and financial needs." },
  { num: "03", title: "Application & Documents", desc: "We prepare and submit strong applications on your behalf." },
  { num: "04", title: "Visa & Pre-Departure", desc: "From visa filing to travel prep — we handle it all until you board your flight." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            How It Works
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Your Journey in 4 Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ num, title, desc }, i) => (
            <div key={num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-foreground/20 -translate-x-1/2 z-0" />
              )}
              <div className="relative z-10">
                <span className="text-6xl font-heading font-bold text-secondary/30">
                  {num}
                </span>
                <h3 className="font-heading text-xl font-semibold mt-2 mb-3">
                  {title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
