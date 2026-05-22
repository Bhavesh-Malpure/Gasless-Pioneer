import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "Claim Badge", to: "/claim" },
    { label: "My Profile", to: "/profile" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(13,27,42,0.9)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "16px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px" }}>🔥</span>
          <span style={{ fontSize: "20px", fontWeight: "700", color: "#00E5FF" }}>
            Gasless Pioneer
          </span>
        </div>
      </Link>

      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              textDecoration: "none",
              color: location.pathname === link.to ? "#00E5FF" : "#94A3B8",
              fontWeight: location.pathname === link.to ? "600" : "500",
              fontSize: "15px",
              transition: "color 0.3s ease"
            }}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
        <ConnectButton />
      </div>
    </nav>
  );
}