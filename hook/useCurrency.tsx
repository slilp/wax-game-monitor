import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hook";

export interface ExchangePrice {
  [key: string]: {
    WAX: number;
    USD: number;
    THB: number;
  };
}

function useCurrency({ tokens }: { tokens: string[] }) {
  const [prices, setPrices] = useState<ExchangePrice>({});
  const waxData = useAppSelector((state) => state.wax);
  const gameToken = waxData.tokens.filter((token) =>
    [...tokens].includes(token.symbol)
  );

  useEffect(() => {
    let priceState: ExchangePrice = {};
    tokens.map((token: string) => {
      priceState[token] = {
        WAX: convertToWax(token),
        USD: convertToUsd(token),
        THB: convertToThb(token),
      };
    });
    setPrices(priceState);
  }, []);

  const convertToThb = (token: string) => {
    const tokenPrice = gameToken?.find((i) => i.symbol === token)?.price;
    if (tokenPrice) {
      return tokenPrice * waxData.waxToThb;
    }
    return 0;
  };

  const convertToUsd = (token: string) => {
    const tokenPrice = gameToken?.find((i) => i.symbol === token)?.price;
    if (tokenPrice) {
      return tokenPrice * waxData.waxToUsd;
    }
    return 0;
  };

  const convertToWax = (token: string) => {
    const tokenPrice = gameToken?.find((i) => i.symbol === token)?.price;
    return tokenPrice ?? 0;
  };

  return {
    prices,
    convertToThb,
    convertToUsd,
    convertToWax,
  };
}

export default useCurrency;
