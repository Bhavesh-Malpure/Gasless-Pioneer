import { useClaimBadge } from "../hooks/useClaimBadge";
import { useEffect } from "react";

export function ClaimButton({ walletAddress, onSuccess, onStepChange, onError }) {
  const { claimBadge, step, error, txHash, hasClaimed } = useClaimBadge();

  const isLoading = step === "executing";
  const isDone = step === "done";
  const alreadyClaimed = walletAddress && hasClaimed(walletAddress);

  useEffect(() => {
    if (isDone && onSuccess) onSuccess(txHash);
  }, [isDone]);

  useEffect(() => {
    if (step === "error" && onError) onError(error);
  }, [step]);

  useEffect(() => {
    if (isLoading && onStepChange) onStepChange(2);
    if (isDone && onStepChange) onStepChange(4);
  }, [isLoading, isDone]);

  if (alreadyClaimed) {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{
          background: "#22C55E22",
          color: "#22C55E",
          padding: "14px 32px",
          borderRadius: "12px",
          fontWeight: "600",
          fontSize: "16px",
          border: "1px solid #22C55E44"
        }}>
          Already Claimed
        </div>
        <p style={{ color: "#94A3B8", fontSize: "13px", marginTop: "8px" }}>
          You already own this badge
        </p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => claimBadge(walletAddress)}
        disabled={isLoading || isDone || !walletAddress}
        style={{
          background: isDone
            ? "#22C55E"
            : "linear-gradient(135deg, #00E5FF, #7C3AED)",
          color: "white",
          padding: "16px 40px",
          borderRadius: "12px",
          border: "none",
          fontSize: "16px",
          fontWeight: "700",
          cursor: isLoading || isDone || !walletAddress
            ? "not-allowed"
            : "pointer",
          opacity: !walletAddress ? 0.5 : 1,
          transition: "all 0.3s ease",
          boxShadow: "0 0 30px rgba(0,229,255,0.3)",
          minWidth: "200px"
        }}
      >
        {isLoading ? "Minting..." : isDone ? "Badge Claimed!" : "Claim Your Badge"}
      </button>

      {!walletAddress && (
        <p style={{ color: "orange", marginTop: "10px", fontSize: "14px" }}>
          Connect your wallet first
        </p>
      )}

      {step === "error" && (
        <p style={{ color: "#EF4444", marginTop: "10px", fontSize: "14px" }}>
          {error}
        </p>
      )}
    </div>
  );
}