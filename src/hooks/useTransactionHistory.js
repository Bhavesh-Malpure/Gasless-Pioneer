export function useTransactionHistory(address) {
  const all = JSON.parse(localStorage.getItem("txHistory") || "[]");
  const userHistory = address
    ? all.filter(tx => tx.address?.toLowerCase() === address?.toLowerCase())
    : [];
  return { history: userHistory };
}