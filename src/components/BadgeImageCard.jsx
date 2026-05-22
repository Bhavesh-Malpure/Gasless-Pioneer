import { useRef } from "react";
import { formatAddress } from "../utils/formatAddress";

export function BadgeImageCard({ address, txHash }) {
  const cardRef = useRef(null);

  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#0D1B2A";
    ctx.fillRect(0, 0, 600, 400);

    // Border glow effect
    ctx.strokeStyle = "#00E5FF";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, 580, 380);

    // Badge hexagon
    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    const cx = 120, cy = 200, r = 70;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // G letter
    ctx.fillStyle = "#0D1B2A";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.fillText("G", cx, cy + 16);

    // Title
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 32px Arial";
    ctx.textAlign = "left";
    ctx.fillText("Gasless Pioneer", 220, 170);

    // Subtitle
    ctx.fillStyle = "#00E5FF";
    ctx.font = "16px Arial";
    ctx.fillText("Badge Claimed Without ETH", 220, 200);

    // Wallet
    ctx.fillStyle = "#94A3B8";
    ctx.font = "14px monospace";
    ctx.fillText(formatAddress(address), 220, 230);

    // Date
    ctx.fillStyle = "#4A5568";
    ctx.font = "13px Arial";
    ctx.fillText(new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }), 220, 255);

    // UGF tag
    ctx.fillStyle = "rgba(0,229,255,0.1)";
    ctx.roundRect(220, 275, 160, 32, 8);
    ctx.fill();
    ctx.fillStyle = "#00E5FF";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Powered by UGF", 300, 295);

    // Download
    const link = document.createElement("a");
    link.download = "gasless-pioneer-badge.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div ref={cardRef}>
      <button
        onClick={handleDownload}
        style={{
          background: "linear-gradient(135deg, #FFD700, #FFA500)",
          color: "#0D1B2A",
          border: "none",
          padding: "12px 24px",
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "700",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        ⬇️ Download Badge
      </button>
    </div>
  );
}