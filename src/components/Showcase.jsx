import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Jayasree & Venkatsai",
    category: "Wedding Invitation",
    description:
      "An elegant digital wedding invitation designed as an interactive online experience.",
    url: "https://jayasree-venkatsai.vercel.app/",
  },
  {
    number: "02",
    title: "Sriya & Ajay Reddy",
    category: "Wedding Invitation",
    description:
      "A personalized wedding website combining traditional details with a modern digital experience.",
    url: "https://sriya-ajayreddy.vercel.app/",
  },
  {
    number: "03",
    title: "Pradyumna & Srideepika",
    category: "Wedding Invitation",
    description:
      "A memorable digital invitation created to bring the couple's celebration online.",
    url: "https://pradyumnaandsrideepika.vercel.app/",
  },
];

export default function Showcase() {
  return (
    <motion.section
      className="showcase section" id="work"
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
    >

      {/* HEADER */}
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            OUR WORK
          </p>

          <h2>
            Ideas we've
            <br />
            <span>brought to life.</span>
          </h2>
        </div>

        <p className="section-description">
          A selection of digital experiences we've designed
          and developed. Explore the live projects below.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
            }}
          >

            {/* TOP */}
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            {/* CONTENT */}
            <div className="project-main">

              <div className="project-icon">
                <ArrowUpRight size={26} />
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

            </div>

            {/* FOOTER */}
            <div className="project-footer">

              <span>
                LIVE WEBSITE
              </span>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-live-btn"
                whileHover={{
                  x: 5,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                Visit Website
                <ExternalLink size={15} />
              </motion.a>

            </div>

          </motion.article>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        className="showcase-bottom"
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
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <p>
          Your idea could be next.
          <span> Let's build it.</span>
        </p>

        <a
          href="#contact"
          className="showcase-cta"
        >
          Start a Project
          <ArrowUpRight size={17} />
        </a>
      </motion.div>

    </motion.section>
  );
}