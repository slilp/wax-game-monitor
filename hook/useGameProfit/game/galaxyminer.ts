import { GalaxyTokens } from "../../../config/tokens";
import { calculateTHB, calculateWAX } from "../../../utils/calculator";
import { ExchangePrice } from "../../useCurrency";

export const getProfit = (
  prices: ExchangePrice,
  immutableData: any,
  mutableData: any
) => {
  const calDailyWax =
    calculateDailyWax(
      prices,
      immutableData?.Type === "Plasma"
        ? GalaxyTokens.GMP
        : immutableData?.Type === "Asteroid"
        ? GalaxyTokens.GMA
        : GalaxyTokens.GMO,
      mutableData?.mining,
      24,
      mutableData?.gmoUse,
      mutableData?.gmpUse
    ) || 0;

  const calCurrency =
    calculateDailyThb(
      prices,
      immutableData?.Type === "Plasma"
        ? GalaxyTokens.GMP
        : immutableData?.Type === "Asteroid"
        ? GalaxyTokens.GMA
        : GalaxyTokens.GMO,
      mutableData?.mining,
      24,
      mutableData?.gmoUse,
      mutableData?.gmpUse
    ) || 0;

  return {
    wax: calDailyWax,
    thb: calCurrency,
  };
};

const calculateDailyWax = (
  prices: ExchangePrice,
  miningToken: string,
  mining: number,
  hours: number,
  gmoUse: number,
  gmpUse: number
) =>
  hours *
  (calculateWAX(prices, mining, miningToken) -
    (calculateWAX(prices, gmoUse, GalaxyTokens.GMO) +
      calculateWAX(prices, gmpUse, GalaxyTokens.GMP)));

const calculateDailyThb = (
  prices: ExchangePrice,
  miningToken: string,
  mining: number,
  hours: number,
  gmoUse: number,
  gmpUse: number
) =>
  hours *
  (calculateTHB(prices, mining, miningToken) -
    (calculateTHB(prices, gmoUse, GalaxyTokens.GMO) +
      calculateTHB(prices, gmpUse, GalaxyTokens.GMP)));
