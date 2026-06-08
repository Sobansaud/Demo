import { motion } from "framer-motion";
import exteriorPath from "@assets/image_1780930604404.png";
import { Reveal, SectionHeading, fadeLeft, fadeRight } from "./animate";

export function About() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text side */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeLeft}
          >
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-[0.3em] text-xs">Who We Are</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                Our <span className="text-primary italic">Story</span>
              </h2>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ originX: 0 }}
              >
                <div className="w-16 h-px bg-primary" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="w-8 h-px bg-primary/40" />
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-foreground/75 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Nestled on the 4th floor overlooking DHA Phase 8, Monarca offers an unmatched dining experience where continental cuisine meets the art of hookah.
            </motion.p>
            <motion.p
              className="text-lg text-foreground/75 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Whether you're here for a romantic dinner or a night out with friends, every visit is a celebration. Step into our candle-lit lounge and experience true exclusivity above the city lights.
            </motion.p>

            <motion.div
              className="pt-6 border-t border-primary/20 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-foreground/80 font-serif">Building Plot No 1-C, 4th Floor, Khy-e-Shaheen, Phase VIII, DHA, Karachi</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                <a href="tel:+923007058898" className="text-primary font-serif hover:underline">+92 300 7058898</a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeRight}
          >
            <div className="relative">
              {/* Corner ornaments */}
              <motion.div
                className="absolute -top-5 -right-5 w-28 h-28 border-t-2 border-r-2 border-primary z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <motion.div
                className="absolute -bottom-5 -left-5 w-28 h-28 border-b-2 border-l-2 border-primary z-10"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />

              {/* Main image */}
              <div className="overflow-hidden border border-primary/15 p-2">
                <motion.img
                  src={exteriorPath}
                  alt="Monarca Exterior"
                  className="w-full h-[480px] object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-8 left-8 bg-primary text-primary-foreground px-6 py-4 z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] font-light">4th Floor</p>
                <p className="font-serif text-lg">DHA Phase 8</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
