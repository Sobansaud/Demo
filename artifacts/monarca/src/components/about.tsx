import exteriorPath from "@assets/image_1780930604404.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">Our Story</h2>
              <div className="w-24 h-1 bg-primary/50" />
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Nestled on the 4th floor overlooking DHA Phase 8, Monarca offers an unmatched dining experience where continental cuisine meets the art of hookah.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              Whether you're here for a romantic dinner or a night out with friends, every visit is a celebration. Step into our candle-lit lounge and experience true exclusivity above the city lights.
            </p>

            <div className="pt-6 border-t border-border">
              <p className="text-primary uppercase tracking-widest text-sm mb-2">Location & Contact</p>
              <p className="text-foreground/90 font-serif">Building Plot No 1-C, 4th Floor, Khy-e-Shaheen, Phase VIII, DHA, Karachi</p>
              <p className="text-foreground/90 font-serif mt-1">+92 300 7058898</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative p-4 border border-primary/20">
              <img 
                src={exteriorPath} 
                alt="Monarca Exterior" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
