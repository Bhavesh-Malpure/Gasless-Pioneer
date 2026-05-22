import { useState, useEffect } from "react";

export function useENS(address) {
  const [ensName, setEnsName] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) return;

    const cached = localStorage.getItem("ens_" + address);
    if (cached) {
      setEnsName(cached === "null" ? null : cached);
      return;
    }

    setLoading(true);

    fetch("https://api.ensideas.com/ens/resolve/" + address)
      .then(res => res.json())
      .then(data => {
        const name = data?.name || null;
        setEnsName(name);
        localStorage.setItem("ens_" + address, name || "null");
      })
      .catch(() => {
        setEnsName(null);
        localStorage.setItem("ens_" + address, "null");
      })
      .finally(() => setLoading(false));
  }, [address]);

  return { ensName, loading };
}