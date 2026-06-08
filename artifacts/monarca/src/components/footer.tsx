import { motion } from "framer-motion";
import logoPath from "@assets/image_1780930600932.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-14 border-t border-primary/10 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6">
        <motion.img
          src={logoPath}
          alt="Monarca Logo"
          className="h-16 w-auto opacity-80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
        />

        <div className="flex gap-5">
          {[
            { href: "https://www.facebook.com/monarca.pk/", icon: <FaFacebook size={18} />, label: "Facebook" },
            { href: "https://www.instagram.com/monarcapk/", icon: <FaInstagram size={18} />, label: "Instagram" },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/40 hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -2 }}
              title={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary/30" />
          <motion.p
            className="text-foreground/30 text-xs font-light uppercase tracking-[0.3em]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © 2025 Monarca. All Rights Reserved.
          </motion.p>
          <div className="w-8 h-px bg-primary/30" />
        </div>
      </div>
    </footer>
  );
}
