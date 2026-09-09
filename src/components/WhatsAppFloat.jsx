import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Lumira on WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.94,
      }}
    >
      <span className="whatsapp-pulse" />

      <span className="whatsapp-icon">
        <MessageCircle size={22} strokeWidth={2} />
      </span>

      <span className="whatsapp-label">
        WhatsApp Us
      </span>
    </motion.a>
  );
}