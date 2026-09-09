import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSubmitting(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/mppagjdb",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();

        setSubmitted(true);

        // Remove success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setError(
        "Unable to send your enquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
<motion.section
  className="contact section"
  id="contact"
  initial={{
    opacity: 0,
    scale: 0.97,
    y: 35,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.12,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>      <div className="contact-layout">

        {/* LEFT */}
        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">
            START A PROJECT
          </p>

          <h2>
            Let's create
            <br />
            <span>something great.</span>
          </h2>

          <p className="contact-description">
            Have a website idea, a business that needs a
            digital presence, or a completely custom project?
            Tell us what you're thinking.
          </p>

          <a
            href="mailto:lumiracreative26@gmail.com"
            className="contact-email"
          >
            <span className="contact-email-icon">
              <Mail size={18} />
            </span>

            <span>
              <small>EMAIL US</small>
              lumiracreative26@gmail.com
            </span>

            <ArrowUpRight size={17} />
          </a>
          <a
  href="https://wa.me/918008307484?text=Hey%20Lumira%21%20I'm%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="contact-email contact-whatsapp"
>
  <span className="contact-email-icon">
    <MessageCircle size={18} />
  </span>

  <span>
    <small>WHATSAPP</small>
    +91 80083 07484
  </span>

  <ArrowUpRight size={17} />
</a>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="contact-card"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.h2
  initial={{
    opacity: 0,
    y: 30,
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
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  PROJECT ENQUIRY
</motion.h2>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="contact-field">
              <label htmlFor="name">
                YOUR NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="contact-field">
              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {/* MOBILE */}
            <div className="contact-field">
              <label htmlFor="phone">
                MOBILE NUMBER
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+]?[0-9\s()-]{10,15}"
                required
              />
            </div>

            {/* SERVICE */}
            <div className="contact-field">
              <label htmlFor="service">
                SERVICE
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="Wedding Invitation Website">
                  Wedding Invitation Website
                </option>

                <option value="Business Website">
                  Business Website
                </option>

                <option value="Portfolio Website">
                  Portfolio Website
                </option>

                <option value="Booking Website">
                  Booking Website
                </option>

                <option value="Online Store">
                  Online Store
                </option>

                <option value="Custom Web Application">
                  Custom Web Application
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="contact-field">
              <label htmlFor="message">
                TELL US ABOUT YOUR IDEA
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="contact-form-error">
                {error}
              </p>
            )}

            {/* SUCCESS */}
            {submitted && (
              <motion.div
                className="contact-form-success"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <CheckCircle2 size={18} />

                <span>
                  Enquiry sent successfully. We'll get
                  back to you soon.
                </span>
              </motion.div>
            )}

            {/* BUTTON */}
            <motion.button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
              whileHover={{
                y: isSubmitting ? 0 : -3,
              }}
              whileTap={{
                scale: isSubmitting ? 1 : 0.98,
              }}
            >
              {isSubmitting
                ? "Sending..."
                : "Send Enquiry"}

              {!isSubmitting && (
                <ArrowUpRight size={17} />
              )}
            </motion.button>
          </form>

          <p className="contact-note">
            Your enquiry will be sent securely to Lumira.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}