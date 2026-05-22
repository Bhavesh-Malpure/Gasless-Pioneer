import { useState } from "react";
import { useAccount } from "wagmi";
import { ProgressSteps } from "../components/ProgressSteps";
import { BadgeCard } from "../components/BadgeCard";
import { ClaimButton } from "../components/ClaimButton";
import { SuccessScreen } from "../components/SuccessScreen";
import { Toast } from "../components/Toast";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useToast } from "../hooks/useToast";

export function ClaimPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [txHash, setTxHash] = useState(null);
  const { address, isConnected } = useAccount();
  const { toast, showToast, hideToast } = useToast();

  if (isConnected && currentStep === 1) {
    setCurrentStep(2);
    showToast("Wallet connected successfully!", "success");
  }

  return (
    <div style={{
      paddingTop: "100px",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "100px 20px 60px"
    }}>

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
        onClose={hideToast}
      />

      <h1 style={{
        fontSize: "36px", fontWeight: "700",
        marginBottom: "8px", textAlign: "center"
      }}>
        Claim Your Badge
      </h1>

      <p style={{
        color: "#94A3B8", marginBottom: "48px",
        textAlign: "center", fontSize: "16px"
      }}>
        Complete the steps below to mint your Gasless Pioneer badge
      </p>

      <ProgressSteps currentStep={currentStep} />

      {!showSuccess ? (
        <div className="card glow-cyan" style={{
          padding: "40px",
          maxWidth: "480px",
          width: "100%",
          textAlign: "center"
        }}>
          <BadgeCard />

          <div style={{ marginTop: "32px" }}>
            {!isConnected ? (
              <div>
                <p style={{
                  color: "#94A3B8",
                  marginBottom: "16px",
                  fontSize: "14px"
                }}>
                  Step 1: Connect your MetaMask wallet
                </p>
                <ConnectButton />
              </div>
            ) : (
              <div>
                <p style={{
                  color: "#22C55E",
                  marginBottom: "20px",
                  fontSize: "14px"
                }}>
                  Wallet connected
                </p>
                <ClaimButton
                  walletAddress={address}
                  onStepChange={setCurrentStep}
                  onSuccess={(hash) => {
                    setTxHash(hash);
                    setShowSuccess(true);
                    setCurrentStep(4);
                    showToast("Badge claimed successfully!", "success");
                  }}
                  onError={() => showToast("Transaction failed. Try again.", "error")}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <SuccessScreen txHash={txHash} address={address} />
      )}

    </div>
  );
}