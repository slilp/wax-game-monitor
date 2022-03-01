import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hook";
import useCurrency, { ExchangePrice } from "./useCurrency";

interface CustomPriceProps {
  tokens: string[];
}

interface CustomTokenPrice {
  tokenName: string;
  value: number;
}

function useCustomPrice({ tokens }: CustomPriceProps) {
  const [calculatePrices, setCalculatePrices] = useState<ExchangePrice>({});
  const [selectValues, setSelectValues] = useState<CustomTokenPrice[]>([]);
  const { prices } = useCurrency({
    tokens: [...tokens],
  });

  const waxData = useAppSelector((state) => state.wax);

  useEffect(() => {
    if (selectValues?.length === 0) {
      setCalculatePrices(prices);
    } else {
      let priceState: ExchangePrice = {};
      selectValues.map(({ tokenName, value }) => {
        priceState[tokenName] = {
          WAX: value,
          USD: value * waxData.waxToUsd,
          THB: value * waxData.waxToThb,
        };
      });
      setCalculatePrices(priceState);
    }
  }, [waxData, prices, selectValues]);

  return {
    calculatePrices,
    selectValues,
    setSelectValues,
  };
}

export default useCustomPrice;
