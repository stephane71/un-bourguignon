import { Section } from "@/components/ui/Section";
import { Phone } from "@/components/icons/Phone";
import { Mail } from "@/components/icons/Mail";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Facebook } from "@/components/icons/Facebook";

export function ContactSection() {
  return (
    <Section id="contact">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-serif text-xl lg:text-4xl font-bold">
          Prêt à travailler ensemble ?
        </h2>
        <p className="mt-4 text-base leading-relaxed">
          Pour un premier échange sans engagement, contactez-moi
          directement :
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="tel:+33662461643"
            className="flex items-center justify-center gap-3 min-h-12 w-full bg-brun text-white rounded-lg px-6 py-3 font-sans font-bold text-base hover:bg-brun/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
          >
            <Phone size={20} />
            06 62 46 16 43
          </a>

          <a
            href="mailto:stephane-ei@un-bourguignon.com"
            className="flex items-center justify-center gap-3 min-h-12 w-full border border-brun text-brun rounded-lg px-6 py-3 font-sans font-bold text-base hover:bg-ecru transition-colors focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2"
          >
            <Mail size={20} />
            stephane-ei@un-bourguignon.com
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/stephanemaire71"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="min-h-12 min-w-12 flex items-center justify-center text-brun hover:text-brun/70 transition-colors focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2 rounded-lg"
          >
            <LinkedIn size={24} />
          </a>
          <a
            href="https://www.facebook.com/stephane.maire1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="min-h-12 min-w-12 flex items-center justify-center text-brun hover:text-brun/70 transition-colors focus:outline-none focus:ring-2 focus:ring-brun focus:ring-offset-2 rounded-lg"
          >
            <Facebook size={24} />
          </a>
        </div>
      </div>
    </Section>
  );
}
