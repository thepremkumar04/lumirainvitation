import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Purpose",
    text: "We build digital experiences around real business goals, not just pretty screens.",
  },
  {
    number: "02",
    title: "Design",
    text: "Every interface is designed to feel modern, clear and memorable across every device.",
  },
  {
    number: "03",
    title: "Technology",
    text: "We combine modern web technologies with thoughtful development to create reliable products.",
  },
];

const stats = [
  {
    value: "03",
    label: "LIVE PROJECTS",
  },
  {
    value: "10+",
    label: "SOLUTIONS",
  },
  {
    value: "100%",
    label: "CUSTOM BUILDS",
  },
];

export default function About() {
  return (
<motion.section
  className="about section"
  id="about"
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
    amount: 0.15,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
>      <div className="about-intro">
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="eyebrow">WHO WE ARE</p>

          <h2>
            Small studio.
            <br />
            <span>Big ideas.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{
            opacity: 0,
            x: 25,
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
            delay: 0.15,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            Lumira is a creative digital studio focused on building
            websites and digital experiences that help ideas become
            visible online.
          </p>

          <p>
            From wedding invitation websites to business websites
            and custom digital solutions, we combine design,
            technology and purpose to create something people
            remember.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        className="about-stats"
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
          duration: 0.8,
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            className="about-stat"
            key={stat.label}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <motion.strong
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
              }}
            >
              {stat.value}
            </motion.strong>

            <span>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlights */}
      <div className="about-highlights">
        {highlights.map((item, index) => (
          <motion.article
            className="highlight-card"
            key={item.number}
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
              amount: 0.15,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -8,
            }}
          >
            <span>{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}