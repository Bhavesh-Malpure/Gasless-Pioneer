import { useState } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WalletAvatar } from "../components/WalletAvatar";
import { BadgeCard } from "../components/BadgeCard";
import { TransactionCard } from "../components/TransactionCard";
import { ShareOnX } from "../components/ShareOnX";
import { CopyAddress } from "../components/CopyAddress";
import { ProfileShimmer } from "../components/Shimmer";
import { useTransactionHistory } from "../hooks/useTransactionHistory";
import { useENS } from "../hooks/useENS";

export function ProfilePage() {
  const { address, isConnected } = useAccount();
  const { history } = useTransactionHistory(address);
  const { ensName, loading } = useENS(address);

  const hasClaimed = history.length > 0;

  const [showAll, setShowAll] = useState(false);

  const basescanUrl = address
    ? "https://sepolia.basescan.org/address/" + address
    : null;

  const displayHistory = showAll
    ? history
    : history.slice(0, 3);

  if (!isConnected) {
    return (
      <div
        style={{
          paddingTop: "80px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <div style={{ fontSize: "60px", marginBottom: "24px" }}>
          🔗
        </div>

        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          Connect Your Wallet
        </h2>

        <p
          style={{
            color: "#94A3B8",
            marginBottom: "32px",
            fontSize: "16px",
          }}
        >
          Connect your wallet to view your profile and badges
        </p>

        <ConnectButton />
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          paddingTop: "100px",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "100px 20px 60px",
        }}
      >
        <div className="card">
          <ProfileShimmer />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        paddingTop: "100px",
        minHeight: "100vh",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "100px 20px 60px",
      }}
    >
      {/* Profile Header */}
      <div className="card" style={{ padding: "32px", marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <WalletAvatar address={address} size={64} />

            {ensName && (
              <p
                style={{
                  color: "#00E5FF",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "8px",
                }}
              >
                {ensName}
              </p>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <CopyAddress address={address} />

            {basescanUrl && (
              <a
                href={basescanUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00E5FF",
                  fontSize: "13px",
                  textDecoration: "none",
                  border: "1px solid rgba(0,229,255,0.3)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                View on BaseScan →
              </a>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "12px",
                marginBottom: "4px",
              }}
            >
              Badges Owned
            </p>

            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#00E5FF",
              }}
            >
              {hasClaimed ? "1" : "0"}
            </p>
          </div>

          <div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "12px",
                marginBottom: "4px",
              }}
            >
              Transactions
            </p>

            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#00E5FF",
              }}
            >
              {history.length}
            </p>
          </div>

          <div>
            <p
              style={{
                color: "#94A3B8",
                fontSize: "12px",
                marginBottom: "4px",
              }}
            >
              Status
            </p>

            <p
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#FFD700",
              }}
            >
              {hasClaimed ? "Pioneer" : "Newcomer"}
            </p>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div className="card" style={{ padding: "32px", marginBottom: "24px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          My Badges
        </h3>

        {hasClaimed ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <BadgeCard claimed={true} />
            <ShareOnX address={address} />
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p
              style={{
                color: "#94A3B8",
                marginBottom: "16px",
              }}
            >
              No badges yet. Claim your first one!
            </p>

            <a
              href="/claim"
              style={{
                color: "#00E5FF",
                textDecoration: "none",
                border: "1px solid rgba(0,229,255,0.3)",
                padding: "10px 24px",
                borderRadius: "10px",
                fontSize: "14px",
              }}
            >
              Claim Badge →
            </a>
          </div>
        )}
      </div>

      {/* Transaction History */}
      <div className="card" style={{ padding: "32px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "700",
            marginBottom: "24px",
          }}
        >
          Transaction History
        </h3>

        {history.length > 0 ? (
          <div>
            {displayHistory.map((tx, i) => (
              <TransactionCard key={i} tx={tx} />
            ))}

            {history.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  background: "transparent",
                  color: "#00E5FF",
                  border: "1px solid rgba(0,229,255,0.3)",
                  borderRadius: "10px",
                  padding: "10px 24px",
                  fontSize: "14px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "12px",
                }}
              >
                {showAll
                  ? "Show Less"
                  : "Show All " + history.length + " transactions"}
              </button>
            )}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p style={{ color: "#94A3B8" }}>
              No transactions yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}