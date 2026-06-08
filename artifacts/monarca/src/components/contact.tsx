import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";
import { SectionHeading, Reveal } from "./animate";

export function Contact() {
  const details = [
    {
      icon: <MapPin size={18} className="text-primary shrink-0 mt-0.5" />,
      label: "Location",
      content: (
        <p className="text-foreground/75 font-serif leading-relaxed text-sm">
          Building Plot No 1-C, 4th Floor,<br />
          Khy-e-Shaheen, Phase VIII, DHA,<br />
          Karachi, Pakistan
        </p>
      ),
    },
    {
      icon: <Phone size={18} className="text-primary shrink-0 mt-0.5" />,
      label: "Phone",
      content: (
        <a href="tel:+923007058898" className="text-foreground/75 font-serif text-sm hover:text-primary transition-colors">
          +92 300 7058898
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle="We'd love to hear from you">Find Us</SectionHeading>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Info side */}
          <Reveal direction="left" className="w-full lg:w-1/3 space-y-10">
            <div className="space-y-6">
              {details.map((d, i) => (
                <motion.div
                  key={i}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="mt-0.5">{d.icon}</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-primary mb-1">{d.label}</p>
                    {d.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Follow Us</p>
              <div className="flex gap-4">
                {[
                  {
                    href: "https://www.facebook.com/monarca.pk/",
                    icon: <FaFacebook size={22} />,
                    label: "Facebook",
                  },
                  {
                    href: "https://www.instagram.com/monarcapk/",
                    icon: <FaInstagram size={22} />,
                    label: "Instagram",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border border-primary/25 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Map */}
          <Reveal direction="right" className="w-full lg:w-2/3">
            <div className="relative h-[420px] border border-primary/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-10" />
              <iframe
                src="https://maps.google.com/maps?ftid=0x3eb33d162cf0f25b:0xd0244a295f198d61&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(60%) contrast(120%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
