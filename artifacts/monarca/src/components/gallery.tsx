import { motion } from "framer-motion";
import venuePath from "@assets/image_1780930602568.png";
import exteriorPath from "@assets/image_1780930604404.png";
import { SectionHeading } from "./animate";

const images = [
  { src: venuePath, alt: "Rooftop ambiance", span: "col-span-1 row-span-2" },
  { src: exteriorPath, alt: "Monarca exterior" },
  { src: venuePath, alt: "Evening lights" },
  { src: exteriorPath, alt: "City views" },
  { src: venuePath, alt: "Dining terrace", span: "col-span-1 row-span-2" },
  { src: exteriorPath, alt: "Night atmosphere" },
];

const captions = [
  "Rooftop Terrace",
  "Journey Above the City",
  "Evening Ambiance",
  "Unforgettable Views",
  "Fine Dining",
  "Monarca Nights",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading subtitle="Moments crafted for you">Experience Monarca</SectionHeading>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span || ""}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Dark base overlay */}
              <div className="absolute inset-0 bg-black/35 transition-opacity duration-500 group-hover:opacity-0" />

              {/* Gold hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-primary-foreground font-serif text-lg">{captions[i]}</p>
                <div className="w-8 h-0.5 bg-primary-foreground/80 mt-1" />
              </div>

              {/* Corner accent on hover */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-primary-foreground/0 group-hover:border-primary-foreground/70 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-primary-foreground/0 group-hover:border-primary-foreground/70 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
