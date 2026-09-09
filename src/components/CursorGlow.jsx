import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 40,
    mass: 0.25,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 40,
    mass: 0.25,
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

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="lumira-cursor">

      {/* LARGE SOFT FIELD */}
      <motion.div
        className="cursor-field"
        style={{
          x,
          y,
        }}
      />

      {/* OUTER CIRCLE */}
      <motion.div
        className="cursor-outline"
        style={{
          x,
          y,
        }}
      />

      {/* SMALL CORE */}
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

    </div>
  );
}