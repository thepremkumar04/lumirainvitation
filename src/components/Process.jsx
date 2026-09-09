import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your idea, business, audience and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We plan the structure, features and visual direction.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create a modern interface focused on clarity and experience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We turn the design into a fast, responsive and functional website.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, polish and launch your website ready for the real world.",
  },
];

export default function Process() {
  return (
<motion.section
  className="process section"
  id="process"
  initial={{
    opacity: 0,
    scale: 0.98,
    y: 30,
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
>      <div className="section-heading">
        <div>
          <p className="eyebrow">HOW WE WORK</p>

          <h2>
            From idea
            <br />
            <span>to launch.</span>
          </h2>
        </div>

        <p className="section-description">
          A simple and transparent process designed to turn your
          idea into a polished digital experience.
        </p>
      </div>

      <div className="process-track">
        <motion.div
          className="process-line"
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
  amount: 0.25,
}}

transition={{
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
}}



        />
        

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.article
              className="process-card"
              key={step.number}
              initial={{
                y: 35,
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="process-number">
                {step.number}
              </div>

              <div className="process-dot" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}