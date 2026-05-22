import { useState } from "react";
import { useUGFModal } from "@tychilabs/react-ugf";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, DEST_CHAIN_ID } from "../config/constants";

export function useClaimBadge() {
  const [step, setStep] = useState("idle");
  const [txHash, setTxHash] = useState(null);
  const [error, setError] = useState(null);
  const { openUGF } = useUGFModal();

  const claimBadge = async (walletAddress) => {
    try {
      setStep("executing");
      setError(null);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const iface = new ethers.Interface([
        "function mint(address to)"
      ]);
      const data = iface.encodeFunctionData("mint", [walletAddress]);

      const result = await openUGF({
        signer,
        tx: {
          to: CONTRACT_ADDRESS,
          data,
          value: 0n,
        },
        destChainId: DEST_CHAIN_ID,
      });

      const hash = result?.userTxHash || result?.txHash || result?.hash;
      setTxHash(hash);

      // Save to localStorage for transaction history
      const history = JSON.parse(localStorage.getItem("txHistory") || "[]");
      history.unshift({
        txHash: hash,
        address: walletAddress,
        timestamp: new Date().toISOString(),
        badge: "Gasless Pioneer"
      });
      localStorage.setItem("txHistory", JSON.stringify(history));
      localStorage.setItem("claimed_" + walletAddress, "true");

      setStep("done");

    } catch (err) {
      setError(err.message);
      setStep("error");
    }
  };

  const hasClaimed = (address) => {
    return localStorage.getItem("claimed_" + address) === "true";
  };

  return { claimBadge, step, txHash, error, hasClaimed };
}