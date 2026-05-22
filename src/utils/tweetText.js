export function generateTweetText(address) {
  const short = address ? address.slice(0, 6) + "..." + address.slice(-4) : "";
  const text = "I just claimed my Gasless Pioneer Badge on Base Sepolia — without paying a single drop of ETH! Web3 UX is finally here. Try it yourself: https://gasless-pioneer.vercel.app #GaslessPioneer #Web3 #UGF #BaseChain";
  return encodeURIComponent(text);
}

export function getTwitterShareUrl(address) {
  return "https://twitter.com/intent/tweet?text=" + generateTweetText(address);
}