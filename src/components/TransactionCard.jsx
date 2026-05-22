import { basescanTxLink } from "../utils/basescanLink";

export function TransactionCard({ tx }) {
  const date = new Date(tx.timestamp).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const txLink = tx.txHash ? basescanTxLink(tx.txHash) : null;

  const shortHash = tx.txHash
    ? tx.txHash.slice(0, 6) + "..." + tx.txHash.slice(-4)
    : "";

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, #00E5FF22, #7C3AED22)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          🏅
        </div>

        <div>
          <p style={{ fontWeight: "600", fontSize: "15px" }}>
            {tx.badge}
          </p>

          <p
            style={{
              color: "#94A3B8",
              fontSize: "12px",
              marginTop: "2px",
            }}
          >
            {date}
          </p>
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <span
          style={{
            background: "#22C55E22",
            color: "#22C55E",
            padding: "4px 10px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Success
        </span>

        {txLink && (
          <a
            href={txLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              color: "#00E5FF",
              fontSize: "11px",
              marginTop: "4px",
              textDecoration: "none",
            }}
          >
            {shortHash} →
          </a>
        )}
      </div>
    </div>
  );
}