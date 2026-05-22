import { useEffect } from "react";

export function Confetti({ trigger }) {
  useEffect(() => {
    if (!trigger) return;

    const colors = ["#00E5FF", "#7C3AED", "#FFD700", "#22C55E", "#EF4444"];
    const container = document.createElement("div");
    container.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;";
    document.body.appendChild(container);

    for (let i = 0; i < 100; i++) {
      const particle = document.createElement("div");
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100;
      const duration = Math.random() * 2 + 2;
      const delay = Math.random() * 1;

      particle.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        background:${color};
        border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
        left:${left}%;
        top:-20px;
        opacity:1;
        animation:confetti-fall ${duration}s ${delay}s ease-in forwards;
      `;
      container.appendChild(particle);
    }

    const style = document.createElement("style");
    style.textContent = `
      @keyframes confetti-fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    const cleanup = setTimeout(() => {
      document.body.removeChild(container);
      document.head.removeChild(style);
    }, 4000);

    return () => {
      clearTimeout(cleanup);
      if (document.body.contains(container)) document.body.removeChild(container);
    };
  }, [trigger]);

  return null;
}