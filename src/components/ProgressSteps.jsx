export function ProgressSteps({ currentStep }) {
  const steps = [
    { id: 1, label: "Connect Wallet", icon: "🔗" },
    { id: 2, label: "Pay Gas", icon: "💳" },
    { id: 3, label: "Mint Badge", icon: "🏅" },
    { id: 4, label: "Success", icon: "🎉" },
  ];

  return (
    <div style={{
      display: "flex", alignItems: "center",
      justifyContent: "center", gap: "0", marginBottom: "40px"
    }}>
      {steps.map((step, index) => (
        <div key={step.id} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px",
              background: currentStep >= step.id
                ? "linear-gradient(135deg, #00E5FF, #7C3AED)"
                : "rgba(255,255,255,0.05)",
              border: currentStep === step.id
                ? "2px solid #00E5FF"
                : "2px solid transparent",
              transition: "all 0.4s ease",
              boxShadow: currentStep >= step.id
                ? "0 0 20px rgba(0,229,255,0.4)" : "none"
            }}>
              {currentStep > step.id ? "✓" : step.icon}
            </div>
            <p style={{
              fontSize: "11px", marginTop: "6px",
              color: currentStep >= step.id ? "#00E5FF" : "#4A5568",
              fontWeight: currentStep === step.id ? "700" : "400"
            }}>
              {step.label}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div style={{
              width: "60px", height: "2px", marginBottom: "24px",
              background: currentStep > step.id
                ? "linear-gradient(90deg, #00E5FF, #7C3AED)"
                : "rgba(255,255,255,0.08)",
              transition: "all 0.4s ease"
            }} />
          )}
        </div>
      ))}
    </div>
  );
}