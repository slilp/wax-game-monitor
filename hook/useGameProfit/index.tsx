import React, { useState, useEffect } from "react";
import useCustomPrice from "../useCustomPrice";
import useContent from "../useContent";
import { ExchangePrice } from "../useCurrency";
import { GalaxyTokens } from "../../config/tokens";
import { galaxyCode } from "../../api/game";
import { AssetWithProfit, AssetInfo } from "../../api/game/modal";
import { getProfit as getProfitGalaxy } from "./game/galaxyminer";

const mapToTokens = (code: string): string[] => {
  switch (code) {
    case galaxyCode:
      return [GalaxyTokens.GMA, GalaxyTokens.GMO, GalaxyTokens.GMP];
    default:
      return [];
  }
};

const mapToProfit = (
  code: string,
  prices: ExchangePrice,
  immutableData: any,
  mutableData: any
) => {
  switch (code) {
    case galaxyCode:
      return getProfitGalaxy(prices, immutableData, mutableData);
    default:
      return { wax: 0, thb: 0 };
  }
};

const mapToData = (
  code: string,
  prices: ExchangePrice,
  data: AssetInfo[]
): AssetWithProfit[] => {
  const response: AssetWithProfit[] = data.map((item: AssetInfo) => {
    const profit = mapToProfit(
      code,
      prices,
      item.immutableData,
      item.mutableData
    );

    return {
      ...item,
      profit: {
        wax: profit.wax,
        thb: profit.thb,
      },
    };
  });

  return response;
};

function useGameProfit({ code }: { code: string }) {
  const [profitData, setProfitData] = useState<AssetWithProfit[]>([]);
  const { calculatePrices } = useCustomPrice({
    tokens: [...mapToTokens(code)],
  });
  const { data, loading } = useContent({ code });

  useEffect(() => {
    const tempData = mapToData(code, calculatePrices, data);
    setProfitData(tempData);
  }, [data, calculatePrices]);

  return {
    profitData,
    loading,
  };
}

export default useGameProfit;
