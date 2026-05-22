import { getTwitterShareUrl } from "../utils/tweetText";

export function ShareOnX({ address }) {
  const handleShare = () => {
    window.open(getTwitterShareUrl(address), "_blank");
  };

  return (
    <button
      onClick={handleShare}
      style={{
        display: "flex", alignItems: "center", gap: "10px",
        background: "#000000",
        color: "#FFFFFF",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "12px",
        padding: "12px 24px",
        fontSize: "15px", fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={e => e.target.style.background = "#1a1a1a"}
      onMouseLeave={e => e.target.style.background = "#000000"}
    >
      <span style={{ fontSize: "18px", fontWeight: "900" }}>𝕏</span>
      Share on X
    </button>
  );
}