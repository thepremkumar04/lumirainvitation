import { useEffect, useRef } from "react";

export default function InteractiveGrid() {
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

      // Smoothed position
      currentX: -1000,
      currentY: -1000,

      // Previous position
      previousX: -1000,
      previousY: -1000,

      // Velocity
      velocityX: 0,
      velocityY: 0,

      active: false,
    };

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
      mouse.x = event.clientX;
      mouse.y = event.clientY;
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

    const spacing = 72;

    const influence = 240;

    const maxDistortion = 55;

    const smooth = 0.12;

    const draw = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * ------------------------------------------
       * SMOOTH MOUSE
       * ------------------------------------------
       */

      mouse.currentX +=
        (mouse.x - mouse.currentX) *
        smooth;

      mouse.currentY +=
        (mouse.y - mouse.currentY) *
        smooth;

      /*
       * ------------------------------------------
       * VELOCITY
       * ------------------------------------------
       */

      mouse.velocityX =
        mouse.currentX -
        mouse.previousX;

      mouse.velocityY =
        mouse.currentY -
        mouse.previousY;

      mouse.previousX =
        mouse.currentX;

      mouse.previousY =
        mouse.currentY;

      const velocity =
        Math.sqrt(
          mouse.velocityX *
            mouse.velocityX +
            mouse.velocityY *
            mouse.velocityY
        );

      /*
       * Limit velocity influence
       */

      const velocityPower = Math.min(
        velocity / 30,
        1.5
      );

      /*
       * ------------------------------------------
       * GRID POINT FUNCTION
       * ------------------------------------------
       */

      const getPoint = (
        baseX,
        baseY
      ) => {
        let x = baseX;
        let y = baseY;

        if (!mouse.active) {
          return {
            x,
            y,
            intensity: 0,
          };
        }

        const dx =
          baseX - mouse.currentX;

        const dy =
          baseY - mouse.currentY;

        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        if (distance >= influence) {
          return {
            x,
            y,
            intensity: 0,
          };
        }

        const power =
          1 -
          distance / influence;

        const easedPower =
          Math.pow(power, 2.4);

        /*
         * Normal radial distortion
         */

        const radialForce =
          easedPower *
          maxDistortion;

        /*
         * Movement direction
         */

        const speedX =
          mouse.velocityX;

        const speedY =
          mouse.velocityY;

        /*
         * Push grid in movement direction.
         */

        const directionalForce =
          easedPower *
          velocityPower *
          28;

        x +=
          (dx / (distance || 1)) *
          radialForce;

        y +=
          (dy / (distance || 1)) *
          radialForce;

        x +=
          speedX *
          directionalForce *
          0.08;

        y +=
          speedY *
          directionalForce *
          0.08;

        return {
          x,
          y,
          intensity: easedPower,
        };
      };

      const cols =
        Math.ceil(
          width / spacing
        ) + 2;

      const rows =
        Math.ceil(
          height / spacing
        ) + 2;

      /*
       * ------------------------------------------
       * HORIZONTAL LINES
       * ------------------------------------------
       */

      for (
        let row = 0;
        row < rows;
        row++
      ) {
        ctx.beginPath();

        for (
          let col = 0;
          col < cols;
          col++
        ) {
          const point =
            getPoint(
              col * spacing,
              row * spacing
            );

          if (col === 0) {
            ctx.moveTo(
              point.x,
              point.y
            );
          } else {
            ctx.lineTo(
              point.x,
              point.y
            );
          }
        }

        ctx.strokeStyle =
          "rgba(216, 180, 106, 0.065)";

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      /*
       * ------------------------------------------
       * VERTICAL LINES
       * ------------------------------------------
       */

      for (
        let col = 0;
        col < cols;
        col++
      ) {
        ctx.beginPath();

        for (
          let row = 0;
          row < rows;
          row++
        ) {
          const point =
            getPoint(
              col * spacing,
              row * spacing
            );

          if (row === 0) {
            ctx.moveTo(
              point.x,
              point.y
            );
          } else {
            ctx.lineTo(
              point.x,
              point.y
            );
          }
        }

        ctx.strokeStyle =
          "rgba(216, 180, 106, 0.065)";

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      /*
       * ------------------------------------------
       * GRID NODES
       * ------------------------------------------
       */

      for (
        let row = 0;
        row < rows;
        row++
      ) {
        for (
          let col = 0;
          col < cols;
          col++
        ) {
          const point =
            getPoint(
              col * spacing,
              row * spacing
            );

          const radius =
            1.2 +
            point.intensity * 2.8;

          ctx.beginPath();

          ctx.arc(
            point.x,
            point.y,
            radius,
            0,
            Math.PI * 2
          );

          if (
            point.intensity > 0
          ) {
            ctx.fillStyle =
              `rgba(216, 180, 106, ${
                0.12 +
                point.intensity *
                  0.55
              })`;
          } else {
            ctx.fillStyle =
              "rgba(216, 180, 106, 0.075)";
          }

          ctx.fill();
        }
      }

      /*
       * ------------------------------------------
       * CURSOR ATMOSPHERE
       * ------------------------------------------
       */

      if (mouse.active) {
        const glowSize =
          260 +
          velocityPower * 100;

        const gradient =
          ctx.createRadialGradient(
            mouse.currentX,
            mouse.currentY,
            0,
            mouse.currentX,
            mouse.currentY,
            glowSize
          );

        gradient.addColorStop(
          0,
          "rgba(216, 180, 106, 0.055)"
        );

        gradient.addColorStop(
          0.35,
          "rgba(216, 180, 106, 0.025)"
        );

        gradient.addColorStop(
          1,
          "rgba(216, 180, 106, 0)"
        );

        ctx.fillStyle = gradient;

        ctx.beginPath();

        ctx.arc(
          mouse.currentX,
          mouse.currentY,
          glowSize,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      animationFrame =
        requestAnimationFrame(draw);
    };

    draw();

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
    className="interactive-grid"
  />
);
}