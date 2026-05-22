import { BASESCAN_URL } from "../config/constants";

export function basescanTxLink(txHash) {
  return BASESCAN_URL + "/tx/" + txHash;
}

export function basescanAddressLink(address) {
  return BASESCAN_URL + "/address/" + address;
}