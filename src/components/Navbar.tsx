import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ETGlogo from "../assets/ETGlogo.jpg"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const imageLink = [
  {image : ETGlogo}
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border  ">
      <div className="container mx-auto px-4 flex items-center justify-between h-25">
        <a href="#home" className="flex items-center gap-2">
          <img src={ETGlogo} alt=""   className=" h-40 w-60"/>
          
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 ">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>Get Started</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
