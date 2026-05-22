export function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "32px 40px",
      textAlign: "center",
      color: "#94A3B8",
      fontSize: "14px"
    }}>
      <p>Built with UGF on Base Sepolia — No ETH needed</p>
      <p style={{ marginTop: "8px", color: "#4A5568" }}>
        Powered by Universal Gas Framework
      </p>
    </footer>
  );
}