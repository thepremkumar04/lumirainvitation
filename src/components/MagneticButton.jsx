import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.18,
  ...props
}) {
  const ref = useRef(null);

  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const update = () => {
      setEnabled(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  const handleMove = (event) => {
    if (!enabled || !ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    const distanceX =
      event.clientX - centerX;

    const distanceY =
      event.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </motion.a>
  );
}