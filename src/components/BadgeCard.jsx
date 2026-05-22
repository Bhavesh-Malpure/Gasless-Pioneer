export function BadgeCard({ claimed = false, size = "normal" }) {
  const isLarge = size === "large";

  return (
    <div style={{
      textAlign: "center",
      padding: isLarge ? "40px" : "20px",
    }}>
      <div className={claimed ? "float" : ""} style={{
        width: isLarge ? "160px" : "120px",
        height: isLarge ? "160px" : "120px",
        margin: "0 auto 20px",
        background: "linear-gradient(135deg, #FFD700, #FFA500)",
        clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 40px rgba(255,215,0,0.4)",
        fontSize: isLarge ? "64px" : "48px"
      }}>
        G
      </div>
      <h2 style={{
        fontSize: isLarge ? "28px" : "22px",
        fontWeight: "700", color: "#FFD700",
        marginBottom: "8px"
      }}>
        Gasless Pioneer
      </h2>
      <p style={{ color: "#94A3B8", fontSize: "14px" }}>
        {claimed ? "Officially a Gasless Pioneer" : "Claim your badge — no ETH needed"}
      </p>
    </div>
  );
}