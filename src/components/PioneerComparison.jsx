import { useState, useEffect } from "react";

export function PioneerComparison() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: "80px 20px",
      maxWidth: "900px",
      margin: "0 auto"
    }}>
      <h2 style={{
        textAlign: "center",
        fontSize: "36px",
        fontWeight: "700",
        marginBottom: "16px"
      }}>
        The Difference
      </h2>
      <p style={{
        textAlign: "center",
        color: "#94A3B8",
        marginBottom: "60px",
        fontSize: "16px"
      }}>
        See why gas fees break Web3 — and how we fixed it
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px"
      }}>

        {/* Without UGF */}
        <div style={{
          background: "rgba(239,68,68,0.05)",
          border: "1px solid rgba(239,68,68,0.2)",
          borderRadius: "20px",
          padding: "32px"
        }}>
          <div style={{
            fontSize: "13px",
            color: "#EF4444",
            letterSpacing: "2px",
            marginBottom: "24px",
            fontWeight: "600"
          }}>
            WITHOUT UGF
          </div>

          {[
            { icon: "👤", label: "User wants to mint" },
            { icon: "❓", label: "Needs ETH for gas" },
            { icon: "😕", label: "Doesn't have ETH" },
            { icon: "🚫", label: "Transaction blocked" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.4s ease " + (i * 0.1) + "s"
            }}>
              <div style={{
                width: "36px", height: "36px",
                background: "rgba(239,68,68,0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <span style={{ color: "#94A3B8", fontSize: "14px" }}>
                {item.label}
              </span>
              {i < 3 && (
                <div style={{
                  marginLeft: "auto",
                  color: "#EF4444",
                  fontSize: "18px"
                }}>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* With UGF */}
        <div style={{
          background: "rgba(0,229,255,0.05)",
          border: "1px solid rgba(0,229,255,0.2)",
          borderRadius: "20px",
          padding: "32px"
        }}>
          <div style={{
            fontSize: "13px",
            color: "#00E5FF",
            letterSpacing: "2px",
            marginBottom: "24px",
            fontWeight: "600"
          }}>
            WITH UGF
          </div>

          {[
            { icon: "👤", label: "User wants to mint" },
            { icon: "💳", label: "Pays with Mock USD" },
            { icon: "⚡", label: "UGF handles gas" },
            { icon: "✅", label: "Badge minted!" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.4s ease " + (i * 0.1) + "s"
            }}>
              <div style={{
                width: "36px", height: "36px",
                background: "rgba(0,229,255,0.1)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <span style={{ color: "#FFFFFF", fontSize: "14px" }}>
                {item.label}
              </span>
              {i < 3 && (
                <div style={{
                  marginLeft: "auto",
                  color: "#00E5FF",
                  fontSize: "18px"
                }}>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}