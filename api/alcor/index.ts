import axios from "axios";
import { WaxPrice, TokenPrice, WaxPriceInTHB } from "./modal";
const coingeckoUrl = "https://api.coingecko.com/api";

const alcorUrl = "https://wax.alcor.exchange";
const coinmarketcapUrl = "https://3rdparty-apis.coinmarketcap.com";

export const getTokenPrice = () =>
  axios.get<TokenPrice[]>(`${alcorUrl}/api/markets`);

export const getWaxPrice = () =>
  axios.get<WaxPrice>(
    `${coingeckoUrl}/v3/simple/price?ids=wax&vs_currencies=usd`
  );

export const getWaxPriceInTHB = () =>
  axios.get<WaxPriceInTHB>(
    `${coinmarketcapUrl}/v1/cryptocurrency/widget?id=2300,9119&convert_id=2809`
  );
