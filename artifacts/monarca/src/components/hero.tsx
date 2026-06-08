import { motion, useScroll, useTransform } from "framer-motion";
import venuePath from "@assets/image_1780930602568.png";
import logoPath from "@assets/image_1780930600932.png";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ["0%", "25%"]);
  const textY = useTransform(scrollY, [0, 700], ["0%", "15%"]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: bgY }}>
        <img
          src={venuePath}
          alt="Monarca Rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
      </motion.div>

      {/* Floating gold particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40 z-10"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 5) * 15}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        style={{ y: textY, opacity }}
      >
        {/* Logo */}
        <motion.img
          src={logoPath}
          alt="Monarca"
          className="h-24 w-auto mb-8"
          initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Heading — word by word */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-foreground font-serif"
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Welcome to Monarca
          </motion.h1>
        </div>

        {/* Divider line */}
        <motion.div
          className="w-0 h-px bg-primary mb-6"
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-2xl text-primary font-light tracking-[0.25em] uppercase mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Fine Dining Redefined with Hookah
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 font-serif tracking-wide relative overflow-hidden group"
          >
            <a href="#menu">
              <span className="relative z-10">Explore Menu</span>
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-10 py-6 font-serif tracking-wide"
          >
            <a href="#reservations">Reserve a Table</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-primary/70 hover:text-primary transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
