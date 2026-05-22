import { Link } from "react-router-dom";

export function FooterEnhanced() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(13,27,42,0.95)",
        padding: "64px 40px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                }}
              >
                🔥
              </div>

              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#00E5FF",
                }}
              >
                Gasless Pioneer
              </span>
            </div>

            <p
              style={{
                color: "#4A5568",
                fontSize: "14px",
                lineHeight: "1.7",
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              A Web3 app that lets anyone claim a badge on the blockchain
              without paying ETH gas fees. Powered by UGF on Base Sepolia.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://github.com/your-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
              >
                🐙
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                𝕏
              </a>

              <a
                href="https://universalgasframework.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                🌐
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#FFFFFF",
                letterSpacing: "2px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Platform
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { label: "Claim Badge", to: "/claim" },
                { label: "My Profile", to: "/profile" },
                { label: "About", to: "/about" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  style={{
                    color: "#4A5568",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#4A5568")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#FFFFFF",
                letterSpacing: "2px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Resources
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  label: "UGF Docs",
                  href: "https://universalgasframework.com/docs",
                },
                {
                  label: "BaseScan",
                  href: "https://sepolia.basescan.org",
                },
                {
                  label: "Get Test ETH",
                  href: "https://app.optimism.io/faucet",
                },
                {
                  label: "Mock USD Faucet",
                  href: "https://universalgasframework.com/faucets",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#4A5568",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#4A5568")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: "700",
                color: "#FFFFFF",
                letterSpacing: "2px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Community
            </h4>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { label: "Tychi Labs", href: "https://x.com/TychiLabs" },
                {
                  label: "Telegram",
                  href: "https://t.me/TychiCommunity",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/your-github-repo",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#4A5568",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#4A5568")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "#4A5568", fontSize: "13px" }}>
            2026 Gasless Pioneer. Built on Base Sepolia with UGF.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              to="/about"
              style={{
                color: "#4A5568",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              Meet the Team
            </Link>

            <a
              href="https://universalgasframework.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#4A5568",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              Powered by UGF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}