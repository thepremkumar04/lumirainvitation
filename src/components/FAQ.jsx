import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "The timeline depends on the scope of the project. A standard website can usually be completed within a few weeks, while custom applications and larger projects require more development time.",
  },
  {
    question: "Do you build completely custom websites?",
    answer:
      "Yes. We design and develop websites around the client's requirements rather than relying on a one-size-fits-all template.",
  },
  {
    question: "Can you integrate WhatsApp and enquiry forms?",
    answer:
      "Yes. We can integrate WhatsApp, enquiry forms, email notifications, Google Sheets and other services depending on the project.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes. Maintenance and ongoing support can be discussed depending on the project and the level of support required.",
  },
  {
    question: "Do you build online stores?",
    answer:
      "Yes. We can create online stores with product management, enquiries, payments and other features based on the business requirements.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Send us your project details through the enquiry form or contact us directly on WhatsApp. We'll review your requirements and get back to you.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section
      className="faq section"
      id="faq"
    >
      <div className="faq-heading">
        <p className="eyebrow">
          FAQ
        </p>

        <h2>
          Questions,
          <br />
          <span>answered.</span>
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = active === index;

          return (
            <motion.div
              className={`faq-item ${
                isOpen ? "faq-open" : ""
              }`}
              key={item.question}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
              }}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() =>
                  setActive(
                    isOpen ? null : index
                  )
                }
                aria-expanded={isOpen}
              >
                <span>
                  <small>
                    0{index + 1}
                  </small>

                  {item.question}
                </span>

                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                  }}
                >
                  <Plus size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <p>
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}