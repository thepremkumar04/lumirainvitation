import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      {/* =================================================
          MAIN CTA
      ================================================= */}

      <div className="footer-main">

        <motion.p
          className="eyebrow"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          READY WHEN YOU ARE
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          Let's build
          <br />
          <span>something great.</span>
        </motion.h2>

        <motion.p
          className="footer-description"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
        >
          Have an idea for a website or digital experience?
          Let's turn it into something people remember.
        </motion.p>

        {/* CTA BUTTONS */}

        <motion.div
          className="footer-actions"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
        >

          <motion.a
            href="#contact"
            className="footer-primary"
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Start a Project
            <ArrowUpRight size={17} />
          </motion.a>

          <motion.a
            href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary"
            aria-label="Contact Lumira on WhatsApp"
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            WhatsApp Us
            <MessageCircle size={17} />
          </motion.a>

        </motion.div>

      </div>


      {/* =================================================
          FOOTER INFORMATION
      ================================================= */}

      <motion.div
        className="footer-bottom"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* BRAND */}

        <div className="footer-brand">

          <a
            href="#home"
            className="footer-logo"
            aria-label="Lumira home"
          >
            LUMIRA<span>.</span>
          </a>

          <span className="footer-tagline">
            Digital • Creative • Web Solutions
          </span>

        </div>


        {/* NAVIGATION */}

        <nav
          className="footer-links"
          aria-label="Footer navigation"
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#packages">Packages</a>
        </nav>


        {/* CONTACT */}

        <div className="footer-contact-links">

          <a
            href="mailto:lumiracreative26@gmail.com"
            aria-label="Email Lumira"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          <a
            href="https://wa.me/918008307484"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Lumira"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </a>

        </div>

      </motion.div>


      {/* =================================================
          COPYRIGHT / LEGAL
      ================================================= */}

      <div className="footer-copyright">

        <span>
          © {new Date().getFullYear()} Lumira
        </span>

        <span>
          Crafted with intention.
        </span>

        <div className="footer-legal">

          <a href="/privacy">
            Privacy
          </a>

          <span aria-hidden="true">
            ·
          </span>

          <a href="/terms">
            Terms
          </a>

        </div>

      </div>

    </footer>
  );
}