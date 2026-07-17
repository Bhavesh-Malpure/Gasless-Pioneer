# 🔥 Gasless Pioneer

> **Claim your on-chain badge. No ETH. No friction. Just Web3 for everyone.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-gasless--pioneer.vercel.app-00E5FF?style=for-the-badge&logo=vercel)](https://gasless-pioneer.vercel.app)
[![Built on Base](https://img.shields.io/badge/Built%20on-Base%20Sepolia-0052FF?style=for-the-badge&logo=coinbase)](https://sepolia.basescan.org)
[![Powered by UGF](https://img.shields.io/badge/Powered%20by-UGF-7C3AED?style=for-the-badge)](https://universalgasframework.com)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

---

<!-- SCREENSHOT PLACEHOLDER -->
> 📸 _Screenshot / GIF of the app goes here_

---

## 🎯 Elevator Pitch

Gasless Pioneer is a beginner-friendly Web3 dApp where anyone can claim a verifiable on-chain badge on Base Sepolia — **without owning a single drop of ETH**. Powered by the Universal Gas Framework (UGF), users pay gas fees in Mock USD instead. The result: a complete blockchain interaction in under 60 seconds, no crypto knowledge required.

---

## 😤 Problem Statement

### The Barrier That's Killing Web3 Adoption

Every time a new user tries to interact with a blockchain app, they hit the same wall:

> _"You need ETH in your wallet to pay for gas."_

This single sentence is responsible for the majority of Web3 dropoffs. Here's why it's a real problem:

- 🚫 **Buying ETH is confusing** — exchanges, KYC, bank transfers, waiting periods
- 🚫 **Gas fees are unpredictable** — users don't know how much ETH they need
- 🚫 **Mainstream users don't have crypto** — and shouldn't need to just to try something
- 🚫 **Web3 stays niche** — because the first step is too hard for 99% of people

The technology is ready. The user experience isn't. **We fixed that.**

---

## ✅ Solution Overview

Gasless Pioneer demonstrates that **onchain actions can be invisible to the user**.

Instead of requiring ETH, we integrated **UGF (Universal Gas Framework)** — a protocol that lets users pay gas fees in stablecoins (Mock USD on testnet). UGF handles the conversion, routing, and execution behind the scenes. The user just clicks a button.

### Key Benefits

| Before Gasless Pioneer | After Gasless Pioneer |
|---|---|
| Need ETH to do anything | Pay with Mock USD instead |
| Confusing multi-step setup | Connect wallet and go |
| Users drop off at gas fee step | Complete flow in 60 seconds |
| Web3 = crypto experts only | Anyone can participate |

---

## ⚡ Quick Demo

<!-- GIF PLACEHOLDER -->
> 🎬 _Demo GIF goes here — showing connect wallet → claim badge → success screen_

**Or try it live right now:**

```
1. Go to https://gasless-pioneer.vercel.app
2. Click "Connect Wallet" → select MetaMask
3. Click "Claim Your Badge"
4. Pay tiny Mock USD fee in the UGF modal
5. See your badge minted on Base Sepolia ✅
```

> 💡 Need Mock USD? Get it free at [universalgasframework.com/faucets](https://universalgasframework.com/faucets)
> 💡 Need test ETH first? Get it free at [app.optimism.io/faucet](https://app.optimism.io/faucet)

---

## 🌟 Features

### Core Flow
- ✅ **Gasless Badge Claim** — pay with Mock USD, zero ETH required
- ✅ **Wallet Login** — MetaMask = identity, no signup, no password
- ✅ **On-chain Minting** — badge permanently recorded on Base Sepolia
- ✅ **Double Claim Prevention** — smart contract + localStorage guard
- ✅ **Transaction Verification** — every claim verifiable on BaseScan

### User Experience
- 🎉 **Confetti Animation** — celebration effect on successful claim
- 📥 **Badge Image Download** — Canvas API generates a shareable PNG badge card
- 🐦 **Share on X** — pre-written tweet with your badge proof
- 📊 **Animated Progress Steps** — 4-step visual indicator during claim flow
- 🔔 **Toast Notifications** — real-time success/error feedback

### Profile & History
- 👤 **Profile Page** — view all owned badges and claim status
- 📜 **Transaction History** — full history with BaseScan links
- 🔑 **ENS Name Resolution** — shows vitalik.eth instead of 0x1234...abcd
- 📋 **Copy Wallet Address** — one-click clipboard copy

### Onboarding
- 🆕 **Web3 Beginner Popup** — 3-step guide for first-time users
- 🌗 **Dark / Light Mode** — theme toggle with localStorage persistence
- ⏳ **Shimmer Loading Skeletons** — professional loading states
- 📱 **Mobile Responsive** — works on all screen sizes

### Pages
- 🏠 **Landing Page** — hero, live badge counter, animated comparison, how it works
- 🏅 **Claim Page** — full UGF gasless claim flow
- 👤 **Profile Page** — wallet identity, badges, history
- ℹ️ **About Page** — mission, tech stack, team

---

## 🛠️ Tech Stack

### Frontend
```
React.js 19        — UI framework
Vite 8             — build tool and dev server
React Router v6    — multi-page routing
Framer Motion      — animations
Tailwind CSS       — utility styling
Space Grotesk      — typography
```

### Web3 / Wallet Layer
```
wagmi v2           — React hooks for Ethereum
RainbowKit v2      — Connect Wallet UI
ethers.js v6       — ABI encoding, signer management
viem               — low-level EVM utilities
WalletConnect v2   — multi-wallet support
MetaMask           — browser wallet
```

### Gasless Layer
```
@tychilabs/react-ugf   — UGF React SDK
UGFProvider            — React context wrapper
openUGF()              — single function for complete gasless flow
TYI_MOCK_USD           — settlement token (replaces ETH)
```

### Smart Contract
```
Solidity v0.8          — contract language
Remix IDE              — compilation and deployment
Base Sepolia           — deployment network (Chain ID: 84532)
Contract Address       — 0xF6FfB24f0453FE1586fC4861AA83049d4b2f08da
```

### Deployment & Tools
```
Vercel             — hosting with auto-deploy
GitHub             — version control and CI/CD
BaseScan           — transaction explorer and verification
Chainlist          — network configuration
```

---

## 👥 Team Contributions

**5 contributors** built this project at HackWithMumbai 2026.

| Name | Role | Contribution |
|---|---|---|
| **Bhavesh Malpure** | Core Architect | Smart contract deployment, UGF SDK integration, wallet auth flow, gasless transaction pipeline, custom hooks, complete backend architecture |Frontend -  claim flow UI | Deployment - infrastructure, CI/CD pipeline |
| **Ashwini Chaudhari** | Frontend Developer | Core UI components — BadgeCard, SuccessScreen|
| **Isha Sharma** | Frontend + Project Setup | Project scaffolding, Basic setup |
| **Yash Birari** | Frontend Developer | UI components, UX polish, styling |
| **Prabha Jadhav** | Deployment | Vercel deployment |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
node --version    # v18 or higher
git --version     # any recent version
```

Also install:
- [MetaMask](https://metamask.io) browser extension
- A free [WalletConnect Project ID](https://cloud.walletconnect.com)

### Installation

```bash
# 1. Clone the repository
git clone (https://github.com/Bhavesh-Malpure/Gasless-Pioneer.git)
cd Gasless-Pioneer

# 2. Fix Windows script permissions (Windows only)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Install UGF and ethers
npm install @tychilabs/react-ugf ethers --legacy-peer-deps
```

### Setup

Create `src/wagmi.js`:

```javascript
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { baseSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Gasless Pioneer",
  projectId: "YOUR_WALLETCONNECT_PROJECT_ID", // from cloud.walletconnect.com
  chains: [baseSepolia],
  ssr: false,
});
```

### Run

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### MetaMask Setup

```
1. Add Base Sepolia network → https://chainlist.org/chain/84532
2. Get free test ETH → https://app.optimism.io/faucet
3. Get free Mock USD → https://universalgasframework.com/faucets
```

---

## 🧪 Test the Full Flow

```
□ App loads at localhost:5173
□ Connect Wallet button works
□ MetaMask connects on Base Sepolia
□ Claim Your Badge button appears
□ UGF Pay Gas modal opens with Mock USD amount
□ Transaction completes after confirming
□ Success screen shows with confetti
□ View Transaction opens real BaseScan proof
□ Profile page shows badge and history
```

---

## 📁 Project Structure

```
gasless-pioneer/
├── public/
│   └── badge.svg                  # Badge icon
├── src/
│   ├── components/
│   │   ├── BadgeCard.jsx          # Badge display
│   │   ├── ClaimButton.jsx        # UGF claim trigger
│   │   ├── ProgressSteps.jsx      # Animated step indicator
│   │   ├── SuccessScreen.jsx      # Post-claim screen
│   │   ├── ShareOnX.jsx           # Twitter share
│   │   ├── OnboardingPopup.jsx    # Web3 beginner guide
│   │   ├── LiveCounter.jsx        # Badge claim counter
│   │   └── ...more components
│   ├── pages/
│   │   ├── LandingPage.jsx        # Home
│   │   ├── ClaimPage.jsx          # Claim flow
│   │   ├── ProfilePage.jsx        # User profile
│   │   └── AboutPage.jsx          # About + team
│   ├── hooks/
│   │   ├── useClaimBadge.js       # UGF integration logic
│   │   ├── useTransactionHistory.js
│   │   ├── useENS.js
│   │   ├── useToast.js
│   │   └── useTheme.js
│   ├── config/
│   │   ├── wagmi.js               # Wallet config
│   │   └── constants.js           # Contract address, chain ID
│   ├── utils/
│   │   ├── formatAddress.js
│   │   ├── basescanLink.js
│   │   └── tweetText.js
│   ├── App.jsx                    # Router setup
│   └── main.jsx                   # Entry point + providers
└── package.json
```

---

## 📚 Documentation & Resources

| Resource | Link |
|---|---|
| 🌐 Live App | https://gasless-pioneer.vercel.app |
| 📖 UGF Docs | https://universalgasframework.com/docs/testnet |
| 🔵 Base Sepolia | https://sepolia.basescan.org |
| 📦 UGF SDK | https://www.npmjs.com/package/@tychilabs/react-ugf |
| ⛽ Mock USD Faucet | https://universalgasframework.com/faucets |
| 🔗 Base Sepolia Faucet | https://app.optimism.io/faucet |
| 🦊 MetaMask | https://metamask.io |
| 🔌 WalletConnect | https://cloud.walletconnect.com |
| 📊 Contract on BaseScan | https://sepolia.basescan.org/address/0xF6FfB24f0453FE1586fC4861AA83049d4b2f08da |

### Contact

| Person | Role | LinkedIn |
|---|---|---|
| Bhavesh Malpure | Core Architect | [linkedin.com/in/bhavesh-malpure](https://linkedin.com/in/bhavesh-malpure) |
| Ashwini Chaudhari | Frontend | [linkedin.com/in/ashwini-chaudhari](https://linkedin.com/in/ashwini-chaudhari) |
| Prabha Jadhav | Deployment | [linkedin.com/in/prabha-jadhav](https://linkedin.com/in/prabha-jadhav) |
| Isha Sharma | Frontend + Setup | [linkedin.com/in/isha-sharma](https://linkedin.com/in/isha-sharma) |
| Yash Birari | Frontend | [linkedin.com/in/yash-birari](https://linkedin.com/in/yash-birari) |

---

## 🐛 Common Issues

| Error | Fix |
|---|---|
| `scripts disabled on this system` | Run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` |
| `ERESOLVE could not resolve` | Add `--legacy-peer-deps` to npm install |
| `ERR_SSL_CIPHER_OPERATION_FAILED` | Run: `npm config set strict-ssl false` then retry |
| `Failed to resolve import wagmi.js` | Create `src/wagmi.js` with config from Setup section above |
| `Insufficient balance` in UGF modal | Get more Mock USD from the faucet |
| MetaMask not connecting | Switch MetaMask to Base Sepolia Testnet |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License — free to use, modify, and distribute with attribution.
```

---

## 🙏 Acknowledgments

- [**Tychi Labs**](https://universalgasframework.com) — for building UGF and making gasless transactions possible
- [**Coinbase / Base**](https://base.org) — for the fast, low-cost L2 network
- [**RainbowKit**](https://rainbowkit.com) — for the beautiful wallet connection UI
- [**wagmi**](https://wagmi.sh) — for excellent React hooks for Ethereum
- **HackWithMumbai 2026** — for the platform to build and ship this

---

<div align="center">

**Built with 🔥 at HackWithMumbai 2026**

[Live App](https://gasless-pioneer.vercel.app) · [Report Bug]((https://github.com/Bhavesh-Malpure/Gasless-Pioneer/issues)) · [Request Feature]((https://github.com/Bhavesh-Malpure/Gasless-Pioneer/issues)

*No ETH. No gatekeeping. Just Web3 for everyone.*

</div>







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.              
   
