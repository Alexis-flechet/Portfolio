import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Me<span className="text-primary"> Contacter</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Vous avez des questions ? Profitez-en pour m'en parler !
        </p>

        <div className="grid grid-cols-2 gap-6 mx-auto max-w-lg">
          {/* Email */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:alexis.fle.ser@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                alexis.fle.ser@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Localisation</h4>
              <p className="text-muted-foreground">Le Puy-en-Velay, 43, France</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
