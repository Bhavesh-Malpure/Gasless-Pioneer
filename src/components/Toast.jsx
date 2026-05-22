import { useEffect } from "react";

export function Toast({ message, type, visible, onClose }) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  const colors = {
    success: { bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.4)", text: "#22C55E", icon: "✅" },
    error: { bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.4)", text: "#EF4444", icon: "❌" },
    info: { bg: "rgba(0,229,255,0.15)", border: "rgba(0,229,255,0.4)", text: "#00E5FF", icon: "ℹ️" },
  };

  const style = colors[type] || colors.info;

  return (
    <div style={{
      position: "fixed",
      bottom: "32px",
      right: "32px",
      zIndex: 9999,
      background: style.bg,
      border: "1px solid " + style.border,
      borderRadius: "12px",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      animation: "slideIn 0.3s ease",
      maxWidth: "360px"
    }}>
      <span style={{ fontSize: "20px" }}>{style.icon}</span>
      <p style={{
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "500",
        margin: 0
      }}>
        {message}
      </p>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "#94A3B8",
          cursor: "pointer",
          fontSize: "16px",
          marginLeft: "auto",
          padding: "0 4px"
        }}
      >
        ×
      </button>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
