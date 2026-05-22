import { formatAddress } from "../utils/formatAddress";

export function WalletAvatar({ address, size = 48 }) {
  const colors = ["#00E5FF", "#7C3AED", "#FFD700", "#22C55E", "#EF4444"];
  const colorIndex = address ? parseInt(address.slice(2, 4), 16) % colors.length : 0;
  const letter = address ? address.slice(2, 3).toUpperCase() : "?";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: colors[colorIndex],
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: "700", fontSize: size * 0.4,
        color: "#0D1B2A", flexShrink: 0
      }}>
        {letter}
      </div>
      {address && (
        <span style={{ color: "#94A3B8", fontSize: "14px", fontFamily: "monospace" }}>
          {formatAddress(address)}
        </span>
      )}
    </div>
  );
}