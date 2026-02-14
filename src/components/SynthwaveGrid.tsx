import { useEffect, useRef } from "react";

const SynthwaveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      resize();
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const horizon = height * 0.5;
      const lines = 20;
      const cols = 30;

      // Horizontal perspective lines
      ctx.strokeStyle = "rgba(255, 110, 199, 0.2)";
      ctx.lineWidth = 1;

      for (let i = 0; i <= lines; i++) {
        const t = i / lines;
        const y = horizon + (height - horizon) * Math.pow(t, 1.5);
        const adjustedY = y + ((offset * Math.pow(t, 1.5) * (height - horizon) / lines) % ((height - horizon) / lines));
        
        if (adjustedY > horizon && adjustedY <= height) {
          ctx.beginPath();
          ctx.moveTo(0, adjustedY);
          ctx.lineTo(width, adjustedY);
          ctx.stroke();
        }
      }

      // Vertical converging lines
      ctx.strokeStyle = "rgba(0, 240, 255, 0.15)";
      const vanishX = width / 2;
      for (let i = 0; i <= cols; i++) {
        const x = (i / cols) * width;
        ctx.beginPath();
        ctx.moveTo(vanishX, horizon);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizon glow
      const grad = ctx.createLinearGradient(0, horizon - 40, 0, horizon + 10);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.5, "rgba(255, 110, 199, 0.1)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, horizon - 40, width, 50);

      offset += 0.005;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SynthwaveGrid;
