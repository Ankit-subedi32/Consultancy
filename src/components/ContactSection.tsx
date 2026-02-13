import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_isyr68s",   // replace with EmailJS service ID
        "template_r4i889x",  // replace with EmailJS template ID
        e.target as HTMLFormElement,
        "N4AhtNFbPvZ6eqtuK"    // replace with EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
          });
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          setLoading(false);
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
          });
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Start Your Journey Today
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Ready to take the first step toward studying abroad? Book a free
              consultation with our expert counselors.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href="tel:056494136" className="font-semibold text-foreground">
                    056494136
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a
                    href="mailto:ankit.subedi12322@gmail.com"
                    className="font-semibold text-foreground"
                  >
                    chitwan@educationtreeglobal.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit Us</p>
                  <p className="font-semibold text-foreground">
                    Lions Chowk, Chitwan, KL Mall 5th floor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-card space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input name="user_name" placeholder="Full Name" required className="bg-background" />
              <Input name="user_email" placeholder="Email Address" type="email" required className="bg-background" />
            </div>
            <Input name="user_phone" placeholder="Phone Number" type="tel" className="bg-background" />
            <Input name="destination" placeholder="Preferred Destination" className="bg-background" />
            <Textarea name="message" placeholder="Tell us about your goals..." rows={4} className="bg-background" />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


//mailjs bata mail ko laghi banako yesma mero xa 
