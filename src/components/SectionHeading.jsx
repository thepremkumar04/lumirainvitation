import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}) {
  return (
    <div className="section-heading">
      <div>
        <motion.p
          className="eyebrow"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
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
          {title}
          <br />
          <span>{highlight}</span>
        </motion.h2>
      </div>

      <motion.p
        className="section-description"
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.15,
          duration: 0.7,
        }}
      >
        {description}
      </motion.p>
    </div>
  );
}