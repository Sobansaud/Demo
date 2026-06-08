import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">Contact Us</h2>
              <div className="w-24 h-1 bg-primary/50" />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-primary mb-2">Location</h4>
                <p className="text-foreground/80 font-serif leading-relaxed">
                  Building Plot No 1-C, 4th Floor,<br/>
                  Khy-e-Shaheen, Phase VIII, DHA,<br/>
                  Karachi, Pakistan
                </p>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-primary mb-2">Phone</h4>
                <a href="tel:+923007058898" className="text-foreground/80 font-serif hover:text-primary transition-colors">
                  +92 300 7058898
                </a>
              </div>

              <div>
                <h4 className="text-sm uppercase tracking-widest text-primary mb-2">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/monarca.pk/" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/monarcapk/" target="_blank" rel="noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto border border-primary/20">
            <iframe
              src="https://maps.google.com/maps?ftid=0x3eb33d162cf0f25b:0xd0244a295f198d61&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%) contrast(150%)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
