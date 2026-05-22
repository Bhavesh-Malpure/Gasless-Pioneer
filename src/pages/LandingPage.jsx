import { useNavigate } from "react-router-dom";
import { LiveCounter } from "../components/LiveCounter";
import { PioneerComparison } from "../components/PioneerComparison";
import { OnboardingPopup } from "../components/OnboardingPopup";

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: "80px" }}>

      <OnboardingPopup />

      {/* Hero Section */}
      <section style={{
        minHeight: "90vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "40px 20px",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        <div className="fade-in-up">
          <div style={{
            display: "inline-block",
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.3)",
            borderRadius: "20px", padding: "6px 16px",
            fontSize: "13px", color: "#00E5FF",
            marginBottom: "24px", letterSpacing: "1px"
          }}>
            BUILT ON BASE SEPOLIA WITH UGF
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 8vw, 80px)",
            fontWeight: "700", lineHeight: "1.1",
            marginBottom: "24px"
          }}>
            Claim Your Badge
            <br />
            <span className="gradient-text">Without ETH</span>
          </h1>

          <p style={{
            fontSize: "18px", color: "#94A3B8",
            maxWidth: "600px", margin: "0 auto 40px",
            lineHeight: "1.7"
          }}>
            The biggest problem in Web3 is that you need ETH just to do
            anything. We fixed that. Pay with Mock USD instead. UGF handles
            the rest.
          </p>

          <div style={{
            display: "flex", gap: "16px",
            justifyContent: "center", flexWrap: "wrap"
          }}>
            <button
              onClick={() => navigate("/claim")}
              style={{
                background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                color: "white", border: "none",
                padding: "16px 40px", borderRadius: "12px",
                fontSize: "16px", fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 0 40px rgba(0,229,255,0.3)"
              }}
            >
              Claim Your Badge
            </button>

            <button
              onClick={() => navigate("/profile")}
              style={{
                background: "transparent",
                color: "#00E5FF",
                border: "1px solid rgba(0,229,255,0.4)",
                padding: "16px 40px", borderRadius: "12px",
                fontSize: "16px", fontWeight: "600",
                cursor: "pointer"
              }}
            >
              View My Profile
            </button>
          </div>
        </div>
      </section>

      {/* Live Counter */}
      <section style={{
        padding: "60px 20px",
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <LiveCounter />
      </section>

      {/* Comparison Section */}
      <PioneerComparison />

      {/* How It Works */}
      <section style={{
        padding: "80px 20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <h2 style={{
          textAlign: "center", fontSize: "36px",
          fontWeight: "700", marginBottom: "16px"
        }}>
          How It Works
        </h2>
        <p style={{
          textAlign: "center", color: "#94A3B8",
          marginBottom: "60px", fontSize: "16px"
        }}>
          Three steps. No ETH needed. No confusion.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {[
            {
              step: "01", icon: "🦊",
              title: "Connect Wallet",
              desc: "Connect your MetaMask wallet. Your wallet address is your identity. No signup, no password."
            },
            {
              step: "02", icon: "💳",
              title: "Pay with Mock USD",
              desc: "Instead of ETH, pay a tiny fee in Mock USD. UGF handles converting it to gas automatically."
            },
            {
              step: "03", icon: "🏅",
              title: "Claim Your Badge",
              desc: "Your Gasless Pioneer badge is minted on Base Sepolia blockchain. Verifiable, permanent, yours."
            },
          ].map(item => (
            <div key={item.step} className="card" style={{ padding: "32px" }}>
              <div style={{
                fontSize: "12px", color: "#00E5FF",
                letterSpacing: "2px", marginBottom: "16px"
              }}>
                STEP {item.step}
              </div>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: "20px", fontWeight: "700",
                marginBottom: "12px"
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "#94A3B8", lineHeight: "1.6",
                fontSize: "15px"
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "80px 20px",
        background: "rgba(0,229,255,0.03)",
        borderTop: "1px solid rgba(0,229,255,0.08)"
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "36px", fontWeight: "700",
            marginBottom: "24px"
          }}>
            Why Does This Matter?
          </h2>
          <p style={{
            fontSize: "18px", color: "#94A3B8",
            lineHeight: "1.8", marginBottom: "40px"
          }}>
            Today 99% of people who want to use Web3 give up because they
            need ETH just to pay for gas. It is like needing quarters just
            to use the internet. UGF removes this barrier completely.
          </p>
          <button
            onClick={() => navigate("/claim")}
            style={{
              background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
              color: "white", border: "none",
              padding: "16px 48px", borderRadius: "12px",
              fontSize: "16px", fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 0 40px rgba(0,229,255,0.3)"
            }}
          >
            Try It Now — Free
          </button>
        </div>
      </section>

    </div>
  );
}