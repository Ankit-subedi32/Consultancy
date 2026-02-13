import { GraduationCap } from "lucide-react";
import ETGlogo from "../assets/ETGlogo.jpg"

const Footer = () => {
  return (
    <footer className="bg-gradient-navy text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
             <div className=""><img src={ETGlogo} alt="" className="w-80 h-60" /></div>
            
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Helping students achieve their dream of international education since 2010. Trusted by over 10,000 students worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Destinations</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Australia</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">Canada</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">New Zealand</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">United Kingdom</a></li>
              <li><a href="#destinations" className="hover:text-secondary transition-colors">USA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-secondary transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} ETG Education Tree Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
