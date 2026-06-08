import logoPath from "@assets/image_1780930600932.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-primary/10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-8">
        <img src={logoPath} alt="Monarca Logo" className="h-16 w-auto opacity-80" />
        
        <div className="flex gap-6">
          <a href="https://www.facebook.com/monarca.pk/" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.instagram.com/monarcapk/" target="_blank" rel="noreferrer" className="text-foreground/50 hover:text-primary transition-colors">
            <FaInstagram size={20} />
          </a>
        </div>

        <p className="text-foreground/40 text-sm font-light uppercase tracking-wider">
          © 2025 Monarca. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
