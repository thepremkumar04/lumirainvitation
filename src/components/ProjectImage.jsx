import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProjectImage({
  src,
  alt = "",
}) {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 90,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(y, {
    stiffness: 90,
    damping: 20,
    mass: 0.4,
  });

  const handleMove = (event) => {
    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const mouseX =
      event.clientX - rect.left;

    const mouseY =
      event.clientY - rect.top;

    const percentX =
      mouseX / rect.width - 0.5;

    const percentY =
      mouseY / rect.height - 0.5;

    x.set(percentX * 18);
    y.set(percentY * 18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="project-image-wrap"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.img
        src={src}
        alt={alt}
        className="project-image-parallax"
        style={{
          x: smoothX,
          y: smoothY,
          scale: 1.04,
        }}
      />
    </div>
  );
}