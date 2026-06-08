import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923007058898"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-transform hover:scale-110"
    >
      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
      <FaWhatsapp size={28} className="relative z-10" />
    </a>
  );
}
