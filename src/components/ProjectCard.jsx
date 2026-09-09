import { motion, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      ((event.clientX - rect.left) / rect.width) * 100
    );

    mouseY.set(
      ((event.clientY - rect.top) / rect.height) * 100
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };

  return (
    <motion.article
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        y: 35,
      }}
      whileInView={{
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -10,
      }}
    >
      <motion.div
        className="project-spotlight"
        style={{
          left: `${smoothX}%`,
          top: `${smoothY}%`,
        }}
      />

      <div className="project-visual">
        <div className="project-browser">
          <div className="browser-bar">
            <div className="browser-dots">
              <span />
              <span />
              <span />
            </div>

            <div className="browser-address">
              {project.url
                .replace("https://", "")
                .replace("/", "")}
            </div>
          </div>

          <div className="project-live-area">
            <motion.div
              className="project-live-content"
              whileHover={{
                scale: 1.04,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <span>LIVE PROJECT</span>

              <h3>{project.title}</h3>

              <p>Wedding Invitation Website</p>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="live-project-link"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                Open Website
                <ExternalLink size={15} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <span className="project-index">
          {project.number}
        </span>
      </div>

      <div className="project-content">
        <p className="project-category">
          WEDDING INVITATION WEBSITE
        </p>

        <h3>{project.title}</h3>

        <p>
          A personalized digital wedding invitation created
          as a memorable online experience.
        </p>

        <div className="project-footer">
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
            whileHover={{
              x: 4,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            View Live Website
            <ExternalLink size={15} />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}