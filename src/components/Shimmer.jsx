export function Shimmer({ width, height, borderRadius = "8px" }) {
  return (
    <div style={{
      width: width || "100%",
      height: height || "20px",
      borderRadius,
      background: "linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)",
      backgroundSize: "200% 100%",
      animation: "shimmer 1.5s infinite"
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

export function ProfileShimmer() {
  return (
    <div style={{ padding: "32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
        <Shimmer width="64px" height="64px" borderRadius="50%" />
        <div style={{ flex: 1 }}>
          <Shimmer width="200px" height="20px" />
          <div style={{ marginTop: "8px" }}>
            <Shimmer width="150px" height="16px" />
          </div>
        </div>
      </div>
      <Shimmer width="100%" height="120px" borderRadius="12px" />
      <div style={{ marginTop: "16px" }}>
        <Shimmer width="100%" height="80px" borderRadius="12px" />
      </div>
      <div style={{ marginTop: "16px" }}>
        <Shimmer width="100%" height="80px" borderRadius="12px" />
      </div>
    </div>
  );
}