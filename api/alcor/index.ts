import axios from "axios";
import { WaxPrice, TokenPrice } from "./modal";
const coingeckoUrl = "https://api.coingecko.com/api";

const alcorUrl = "https://wax.alcor.exchange";

export const getTokenPrice = () =>
  axios.get<TokenPrice[]>(`${alcorUrl}/api/markets`);

export const getWaxPrice = () =>
  axios.get<WaxPrice>(
    `${coingeckoUrl}/v3/simple/price?ids=wax&vs_currencies=usd`
  );
