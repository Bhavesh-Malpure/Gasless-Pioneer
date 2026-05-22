import { useState, useEffect } from "react";
import { TOTAL_BADGES_DUMMY } from "../config/constants";

export function LiveCounter() {
  const [count, setCount] = useState(TOTAL_BADGES_DUMMY);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "32px" }}>
      <p style={{ color: "#94A3B8", fontSize: "14px", marginBottom: "8px", letterSpacing: "2px", textTransform: "uppercase" }}>
        Total Badges Claimed
      </p>
      <div style={{
        fontSize: "64px", fontWeight: "700",
        background: "linear-gradient(135deg, #00E5FF, #7C3AED)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
      }}>
        {count.toLocaleString()}
      </div>
      <p style={{ color: "#22C55E", fontSize: "13px", marginTop: "8px" }}>
        and counting...
      </p>
    </div>
  );
}