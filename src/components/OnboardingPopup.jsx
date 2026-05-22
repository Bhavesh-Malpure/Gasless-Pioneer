import { useState } from "react";

export function OnboardingPopup() {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem("onboarding_done");
  });

  const [step, setStep] = useState(1);

  if (!visible) return null;

  const steps = [
    {
      icon: "🦊",
      title: "Install MetaMask",
      desc: "MetaMask is a free browser extension that acts as your Web3 wallet. It is your identity on the blockchain.",
      action: "Download MetaMask",
      link: "https://metamask.io",
    },
    {
      icon: "⛽",
      title: "Get Free Test ETH",
      desc: "You need a tiny amount of test ETH to interact with our app. Get it free from a faucet in 30 seconds.",
      action: "Get Free ETH",
      link: "https://app.optimism.io/faucet",
    },
    {
      icon: "🏅",
      title: "Claim Your Badge",
      desc: "Pay a tiny fee in Mock USD instead of ETH. UGF handles the rest. Your badge is minted on blockchain instantly.",
      action: "Claim Now",
      link: "/claim",
    },
  ];

  const current = steps[step - 1];

  const handleClose = () => {
    localStorage.setItem("onboarding_done", "true");
    setVisible(false);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#162032",
          border: "1px solid rgba(0,229,255,0.3)",
          borderRadius: "24px",
          padding: "40px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 0 60px rgba(0,229,255,0.1)",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "rgba(0,229,255,0.1)",
            border: "1px solid rgba(0,229,255,0.2)",
            borderRadius: "20px",
            padding: "6px 16px",
            fontSize: "12px",
            color: "#00E5FF",
            marginBottom: "24px",
            letterSpacing: "1px",
          }}
        >
          NEW TO WEB3?
        </div>

        <div style={{ fontSize: "60px", marginBottom: "16px" }}>
          {current.icon}
        </div>

        <h2
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "12px",
            color: "#FFFFFF",
          }}
        >
          {current.title}
        </h2>

        <p
          style={{
            color: "#94A3B8",
            fontSize: "15px",
            lineHeight: "1.7",
            marginBottom: "32px",
          }}
        >
          {current.desc}
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: i === step ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background:
                  i === step
                    ? "#00E5FF"
                    : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleClose}
            style={{
              background: "transparent",
              color: "#94A3B8",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "12px 24px",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Skip
          </button>

          <a
            href={current.link}
            target={current.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {current.action}
            </button>
          </a>

          <button
            onClick={handleNext}
            style={{
              background: "rgba(0,229,255,0.1)",
              color: "#00E5FF",
              border: "1px solid rgba(0,229,255,0.3)",
              padding: "12px 24px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {step === 3 ? "Done" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}