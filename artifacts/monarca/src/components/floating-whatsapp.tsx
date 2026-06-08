import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Pulsing rings */}
      <motion.span
        className="absolute inset-0 rounded-full bg-primary/30"
        animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-primary/20"
        animate={{ scale: [1, 2.3], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
      />

      <motion.a
        href="https://wa.me/923007058898"
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-[0_8px_32px_rgba(201,168,76,0.4)]"
        whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(201,168,76,0.55)" }}
        whileTap={{ scale: 0.94 }}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </motion.a>
    </motion.div>
  );
}
