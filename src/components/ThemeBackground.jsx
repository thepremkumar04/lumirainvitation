import { useEffect, useRef } from "react";

export default function ThemeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationFrame;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

const blobs = [
  {
    x: 0.20,
    y: 0.25,
    size: 320,
    speed: 0.00030,
    phase: 0,
    color: [205, 175, 115],
  },
  {
    x: 0.78,
    y: 0.30,
    size: 360,
    speed: 0.00024,
    phase: 2,
    color: [225, 215, 190],
  },
  {
    x: 0.58,
    y: 0.75,
    size: 340,
    speed: 0.00028,
    phase: 4,
    color: [215, 195, 155],
  },
  {
    x: 0.15,
    y: 0.78,
    size: 260,
    speed: 0.00022,
    phase: 5,
    color: [235, 225, 205],
  },
];

    const resize = () => {
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );
    };

    const move = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
      mouse.active = true;
    };

    const leave = () => {
      mouse.active = false;
    };

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      move
    );

    window.addEventListener(
      "mouseleave",
      leave
    );

    resize();

    const drawBlob = (
      blob,
      time
    ) => {
      const baseX = blob.x * width;
      const baseY = blob.y * height;

      const floatX =
        Math.sin(
          time * blob.speed +
            blob.phase
        ) * 80;

      const floatY =
        Math.cos(
          time * blob.speed * 0.8 +
            blob.phase
        ) * 60;

      let x =
        baseX +
        floatX;

      let y =
        baseY +
        floatY;

      /*
       * Cursor gravity
       */

      if (mouse.active) {
        const dx =
          mouse.x - x;

        const dy =
          mouse.y - y;

        const distance = Math.sqrt(
          dx * dx +
            dy * dy
        );

        const influence = 500;

        if (distance < influence) {
          const strength =
            Math.pow(
              1 - distance / influence,
              2
            );

          x +=
            dx *
            strength *
            0.08;

          y +=
            dy *
            strength *
            0.08;
        }
      }

      const gradient =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          blob.size
        );

      gradient.addColorStop(
        0,
        `rgba(
          ${blob.color[0]},
          ${blob.color[1]},
          ${blob.color[2]},
          0.055
        )`
      );

      gradient.addColorStop(
        0.35,
        `rgba(
          ${blob.color[0]},
          ${blob.color[1]},
          ${blob.color[2]},
          0.025
        )`
      );

      gradient.addColorStop(
        0.7,
        `rgba(
          ${blob.color[0]},
          ${blob.color[1]},
          ${blob.color[2]},
          0.008
        )`
      );

      gradient.addColorStop(
        1,
        "rgba(255,255,255,0)"
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        blob.size,
        0,
        Math.PI * 2
      );

      ctx.fill();
    };

    const draw = (time) => {
      /*
       * Smooth cursor
       */

      mouse.x +=
        (mouse.targetX - mouse.x) *
        0.055;

      mouse.y +=
        (mouse.targetY - mouse.y) *
        0.055;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * Soft fluid background
       */

      ctx.globalCompositeOperation =
  "source-over";

      blobs.forEach((blob) => {
        drawBlob(blob, time);
      });

      /*
       * Cursor atmosphere
       */

      if (mouse.active) {
        const radius = 240;

        const gradient =
          ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            radius
          );

        gradient.addColorStop(
  0,
  "rgba(190,150,75,0.035)"
);

gradient.addColorStop(
  0.4,
  "rgba(190,150,75,0.012)"
);

gradient.addColorStop(
  1,
  "rgba(190,150,75,0)"
);

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          mouse.x,
          mouse.y,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalCompositeOperation =
        "source-over";

      animationFrame =
        requestAnimationFrame(draw);
    };

    animationFrame =
      requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseleave",
        leave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="theme-background"
    />
  );
}