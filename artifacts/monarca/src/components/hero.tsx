import venuePath from "@assets/image_1780930602568.png";
import logoPath from "@assets/image_1780930600932.png";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={venuePath}
          alt="Monarca Rooftop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-in fade-in zoom-in duration-1000">
        <img src={logoPath} alt="Monarca" className="h-24 w-auto mb-8 opacity-90" />
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground font-serif mb-4">
          Welcome to Monarca
        </h1>
        <p className="text-lg md:text-2xl text-primary font-light tracking-[0.2em] uppercase mb-10">
          Fine Dining Redefined with Hookah
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 font-serif">
            <a href="#menu">Explore Menu</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-serif">
            <a href="#reservations">Reserve a Table</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="text-primary hover:text-primary/80">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
}
