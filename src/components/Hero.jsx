import InteractiveGrid from "./InteractiveGrid";
import Typewriter from "./Typewriter";
import MagneticButton from "./MagneticButton";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  /*
   * =====================================================
   * MOUSE POSITION
   * =====================================================
   */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /*
   * Smooth mouse movement
   */

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.5,
  });

  /*
   * =====================================================
   * DIFFERENT DEPTH LAYERS
   * =====================================================
   */

  // Background moves the most
  const backgroundX = useTransform(
    smoothX,
    [-1, 1],
    [-30, 30]
  );

  const backgroundY = useTransform(
    smoothY,
    [-1, 1],
    [-20, 20]
  );

  // Main headline moves very slightly
  const titleX = useTransform(
    smoothX,
    [-1, 1],
    [-8, 8]
  );

  const titleY = useTransform(
    smoothY,
    [-1, 1],
    [-6, 6]
  );

  // Description moves slightly less
  const descriptionX = useTransform(
    smoothX,
    [-1, 1],
    [-5, 5]
  );

  const descriptionY = useTransform(
    smoothY,
    [-1, 1],
    [-4, 4]
  );

  // Buttons have slightly stronger depth
  const buttonsX = useTransform(
    smoothX,
    [-1, 1],
    [-12, 12]
  );

  const buttonsY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  // First orb
  const orbOneX = useTransform(
    smoothX,
    [-1, 1],
    [-45, 45]
  );

  const orbOneY = useTransform(
    smoothY,
    [-1, 1],
    [-35, 35]
  );

  // Second orb moves opposite direction
  const orbTwoX = useTransform(
    smoothX,
    [-1, 1],
    [35, -35]
  );

  const orbTwoY = useTransform(
    smoothY,
    [-1, 1],
    [25, -25]
  );

  // Deep orb moves very slowly
  const depthOrbX = useTransform(
    smoothX,
    [-1, 1],
    [-18, 18]
  );

  const depthOrbY = useTransform(
    smoothY,
    [-1, 1],
    [-14, 14]
  );

  /*
   * =====================================================
   * MOUSE LISTENER
   * =====================================================
   */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [mouseX, mouseY]);

  return (
    <section className="hero" id="home">
      <div className="dark-grid">
  <InteractiveGrid />
</div>

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="hero-background">

        {/* BACKGROUND PARALLAX */}
        <motion.div
          className="hero-background-depth"
          style={{
            x: backgroundX,
            y: backgroundY,
          }}
        />

        {/* MAIN GOLD ORB */}
        <motion.div
          className="hero-orb orb-one"
          style={{
            x: orbOneX,
            y: orbOneY,
          }}
          animate={{
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* SECOND ORB */}
        <motion.div
          className="hero-orb orb-two"
          style={{
            x: orbTwoX,
            y: orbTwoY,
          }}
          animate={{
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* DEPTH ORB */}
        <motion.div
          className="hero-orb orb-depth"
          style={{
            x: depthOrbX,
            y: depthOrbY,
          }}
          animate={{
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div className="hero-content">

        {/* EYEBROW */}

        <motion.p
  className="eyebrow"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 0.15,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  DIGITAL • CREATIVE • WEB SOLUTIONS
</motion.p>

        {/* =================================================
            HEADLINE
        ================================================= */}

        <motion.h1
  initial={{
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1,
    delay: 0.35,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  We build digital
  <br />

  <span>
    <Typewriter
      words={[
        "experiences.",
        "websites.",
        "brands.",
        "solutions.",
      ]}
      typingSpeed={85}
      deletingSpeed={45}
      pauseTime={1800}
    />
  </span>
</motion.h1>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
  className="hero-description"
  initial={{
    opacity: 0,
    y: 25,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Modern websites and digital solutions designed
  to help businesses, professionals and brands
  stand out.
</motion.p>

        {/* =================================================
            ACTION BUTTONS
        ================================================= */}

        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.75,
            duration: 0.8,
          }}
          style={{
            x: buttonsX,
            y: buttonsY,
          }}
        >

          <MagneticButton
  href="#services"
  className="primary-btn"
>
            Explore Services
            <ArrowUpRight size={18} />
          </MagneticButton>

          <MagneticButton
  href="#work"
  className="secondary-btn"
>
  View Our Work
  <ArrowDownRight size={18} />
</MagneticButton>

        </motion.div>

      </div>

      {/* =================================================
          BOTTOM
      ================================================= */}

      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.4,
          duration: 1,
        }}
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          ↓
        </motion.span>
      </motion.div>

    </section>
  );
}