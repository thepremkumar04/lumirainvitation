import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <motion.div className="not-found-inner" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
        <span className="not-found-number">404</span>
        <p className="eyebrow">PAGE NOT FOUND</p>
        <h1>This page went<br /><span>somewhere else.</span></h1>
        <p className="not-found-text">The invitation you're looking for may have moved, or this link may no longer exist.</p>
        <div className="not-found-actions">
          <a href="/" className="not-found-button"><ArrowLeft size={17} /> Back to Lumira</a>
          <a href="/#contact" className="not-found-secondary">Create an invitation <ArrowUpRight size={15} /></a>
        </div>
      </motion.div>
    </main>
  );
}
