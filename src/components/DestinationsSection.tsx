import australiaImg from "@/assets/australia.jpg";
import canadaImg from "@/assets/canada.jpg";
import newzealandImg from "@/assets/newzealand.jpg";
import ukImg from "@/assets/uk.jpg";
import usaImg from "@/assets/usa.jpg";

const destinations = [
  { name: "Australia", image: australiaImg, unis: "40+ Universities", desc: "World-class education with post-study work opportunities" },
  { name: "Canada", image: canadaImg, unis: "90+ Universities", desc: "Affordable tuition with immigration pathways" },
  { name: "New Zealand", image: newzealandImg, unis: "20+ Universities", desc: "Safe, welcoming environment with quality education" },
  { name: "United Kingdom", image: ukImg, unis: "130+ Universities", desc: "Prestigious institutions with rich cultural heritage" },
  { name: "USA", image: usaImg, unis: "200+ Universities", desc: "Leading research universities and diverse programs" },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Popular Destinations
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Where Will You Study?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer ${
                i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
              }`}
            >
              <img
                src={dest.image}
                alt={`Study in ${dest.name}`}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {dest.unis}
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground">
                  {dest.name}
                </h3>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  {dest.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
