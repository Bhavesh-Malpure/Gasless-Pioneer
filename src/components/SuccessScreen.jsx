import { ShareOnX } from "./ShareOnX";
import { BadgeCard } from "./BadgeCard";
import { BadgeImageCard } from "./BadgeImageCard";
import { Confetti } from "./Confetti";
import { useNavigate } from "react-router-dom";

export function SuccessScreen({ txHash, address }) {
  const navigate = useNavigate();

  const basescanUrl = txHash
    ? "https://sepolia.basescan.org/tx/" + txHash
    : null;

  return (
    <div
      className="fade-in-up"
      style={{ textAlign: "center", padding: "40px 20px" }}
    >
      <Confetti trigger={true} />

      <div
        style={{
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.3)",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "16px" }}>
          🎉
        </div>

        <BadgeCard claimed={true} size="large" />

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#22C55E",
            marginBottom: "8px",
            marginTop: "16px",
          }}
        >
          Badge Claimed!
        </h2>

        <p
          style={{
            color: "#94A3B8",
            marginBottom: "32px",
            fontSize: "15px",
          }}
        >
          You are officially a Gasless Pioneer. No ETH was used.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <ShareOnX address={address} />

          <BadgeImageCard address={address} txHash={txHash} />

          {basescanUrl && (
            <a
              href={basescanUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00E5FF",
                fontSize: "14px",
                textDecoration: "none",
                padding: "10px 20px",
                border: "1px solid rgba(0,229,255,0.3)",
                borderRadius: "10px",
              }}
            >
              View on BaseScan →
            </a>
          )}

          <button
            onClick={() => navigate("/profile")}
            style={{
              background: "transparent",
              color: "#94A3B8",
              border: "none",
              fontSize: "14px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            View My Profile
          </button>
        </div>
      </div>
    </div>
  );
}