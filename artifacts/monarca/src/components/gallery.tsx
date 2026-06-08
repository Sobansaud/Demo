import venuePath from "@assets/image_1780930602568.png";
import exteriorPath from "@assets/image_1780930604404.png";

export function Gallery() {
  const images = [
    venuePath,
    exteriorPath,
    venuePath,
    exteriorPath,
    venuePath,
    exteriorPath
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Experience Monarca</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <img 
                src={src} 
                alt={`Monarca Gallery ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
