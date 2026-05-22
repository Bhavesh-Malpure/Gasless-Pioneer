import { useState } from "react";
import { formatAddress } from "../utils/formatAddress";

export function CopyAddress({ address }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
        border: "1px solid " + (copied ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"),
        borderRadius: "8px",
        padding: "8px 14px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        color: copied ? "#22C55E" : "#94A3B8",
        fontSize: "13px",
        fontFamily: "monospace",
        transition: "all 0.3s ease"
      }}
    >
      {copied ? "✓ Copied!" : formatAddress(address) + " 📋"}
    </button>
  );
}   