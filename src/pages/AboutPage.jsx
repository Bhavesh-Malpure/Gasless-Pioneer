export function AboutPage() {
  const developers = [
    {
      name: "Bhavesh Malpure",
      role: "Core Architect",
      description:
        "The backbone of the entire project. Built every piece of blockchain logic from scratch — smart contract deployment, UGF SDK integration, wallet connection, gasless transaction flow, and all Web3 infrastructure. If the app works on-chain, it is because of Bhavesh.",
      emoji: "⚙️",
      color: "#00E5FF",
      linkedin: "https://www.linkedin.com/in/malpure-bhavesh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Ashwini Chaudhari",
      role: "Frontend Developer",
      description:
        "Designed and built the core UI components including the badge card, success screen, and claim flow. Brought the visual identity of Gasless Pioneer to life.",
      emoji: "🎨",
      color: "#7C3AED",
      linkedin: "https://www.linkedin.com/in/ashwini-chaudhari-20398a364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Prabha Jadhav",
      role: "Deployment Engineer",
      description:
        "Handled the complete deployment pipeline — from local testing to live production on Vercel. Ensured the app is fast, stable, and accessible to everyone.",
      emoji: "🚀",
      color: "#22C55E",
      linkedin: "https://www.linkedin.com/in/prabha-jadhav-0b974232a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Isha Sharma",
      role: "Frontend Developer & Project Setup",
      description:
        "Set up the entire project architecture from scratch and built key frontend pages. Laid the foundation that the whole team built on top of.",
      emoji: "🏗️",
      color: "#FFD700",
      linkedin: "https://www.linkedin.com/in/isha-sharma-b4b630379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Yash Birari",
      role: "Frontend Developer",
      description:
        "Built and polished multiple frontend components and pages. Focused on user experience, making every interaction feel smooth and intuitive.",
      emoji: "✨",
      color: "#F97316",
      linkedin: "https://www.linkedin.com/in/yashbirari2006?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  ];

  const stats = [
    { value: "100%", label: "Gasless Transactions" },
    { value: "0 ETH", label: "Required to Claim" },
    { value: "Base", label: "Network (Sepolia)" },
    { value: "∞", label: "Badges Available" },
  ];

  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Hero */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.3)",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "13px",
            color: "#00E5FF",
            marginBottom: "24px",
            letterSpacing: "1px",
          }}
        >
          ABOUT US
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "24px",
          }}
        >
          Building Web3 for
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Everyone, Not Just ETH Holders
          </span>
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#94A3B8",
            lineHeight: "1.8",
            marginBottom: "0",
          }}
        >
          Gasless Pioneer was born from a simple frustration — why do you need
          ETH to do anything meaningful on-chain? We built a system that removes
          that barrier entirely, letting anyone join the blockchain revolution
          one badge at a time.
        </p>
      </section>

      {/* Stats */}
      <section
        style={{
          background: "rgba(0,229,255,0.03)",
          borderTop: "1px solid rgba(0,229,255,0.08)",
          borderBottom: "1px solid rgba(0,229,255,0.08)",
          padding: "48px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "32px",
            textAlign: "center",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </p>

              <p style={{ color: "#94A3B8", fontSize: "14px" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Cards */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              desc: "To make blockchain accessible to every person on earth — no ETH, no gas fees, no gatekeeping. Just a stablecoin and a wallet.",
            },
            {
              icon: "⚡",
              title: "How It Works",
              desc: "We use UGF (Universal Gas Framework) so transactions are relayed on-chain and you pay in Mock USD instead of ETH. Simple, fast, gasless.",
            },
            {
              icon: "🔵",
              title: "Built on Base",
              desc: "Deployed on Base Sepolia testnet — Coinbase's low-cost, Ethereum-compatible Layer 2 — ensuring fast finality and near-zero real-world costs.",
            },
            {
              icon: "🏅",
              title: "On-Chain Identity",
              desc: "Every badge is a non-transferable on-chain credential. It is yours forever, living on the blockchain as proof of your pioneering spirit.",
            },
            {
              icon: "🔓",
              title: "Open Source",
              desc: "All smart contracts are verified and open-source on BaseScan. Trustless, transparent, and auditable by anyone at any time.",
            },
            {
              icon: "🔥",
              title: "UGF Integration",
              desc: "Powered by Universal Gas Framework — a gas sponsorship protocol that abstracts away Ethereum's complexity from the end user.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                {card.icon}
              </div>

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#94A3B8",
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        style={{
          padding: "80px 20px",
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Meet the Team
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#94A3B8",
              marginBottom: "60px",
              fontSize: "16px",
            }}
          >
            Five builders who turned a Web3 pain point into a working solution
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {developers.map((dev) => (
              <a
                key={dev.name}
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    padding: "28px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.border =
                      "1px solid " + dev.color + "44";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.border =
                      "1px solid rgba(255,255,255,0.08)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.03)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: dev.color + "22",
                        border: "2px solid " + dev.color + "44",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        flexShrink: 0,
                      }}
                    >
                      {dev.emoji}
                    </div>

                    <div>
                      <h3
                        style={{
                          fontSize: "17px",
                          fontWeight: "700",
                          color: "#FFFFFF",
                          marginBottom: "4px",
                        }}
                      >
                        {dev.name}
                      </h3>

                      <span
                        style={{
                          fontSize: "12px",
                          color: dev.color,
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {dev.role}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#94A3B8",
                      fontSize: "14px",
                      lineHeight: "1.7",
                      marginBottom: "16px",
                    }}
                  >
                    {dev.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      color: dev.color,
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    <span>View LinkedIn</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Built With */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#4A5568", fontSize: "14px" }}>
          Built with UGF on Base Sepolia
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "24px",
            flexWrap: "wrap",
          }}
        >
          {[
            "React",
            "Vite",
            "RainbowKit",
            "wagmi",
            "ethers.js",
            "UGF SDK",
            "Base Sepolia",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              style={{
                color: "#4A5568",
                fontSize: "13px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                padding: "6px 14px",
                borderRadius: "20px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}