import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, seaCode } from "../../../../../api/game";
import { CardGame } from "../../../../../components/molecules";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { useAppSelector } from "../../../../../redux/hook";
import { SeaTokens } from "../const";

interface SubSectionToolProps {
  prices: ExchangePrice;
  assetData: AssetInfo;
}

function SubSectionTool({ prices, assetData }: SubSectionToolProps) {
  const [dailyWax, setDailyWax] = useState<number>(0);
  const [dailyCurrency, setDailyCurrency] = useState<number>(0);
  const [saleAtomicWax, setSaleAtomicWax] = useState<number>(0);
  const [saleAtomicCurrency, setSaleAtomicCurrency] = useState<number>(0);
  const { waxToThb } = useAppSelector((state) => state.wax);

  const getAtomicSale = async () => {
    const response = await getAtomicSalePrice(seaCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicCurrency(waxToThb * response);
  };

  const getProfit = async () => {
    const immutableData = assetData?.immutableData;
    const mutableData = assetData?.mutableData;
    const calDailyWax =
      calculateDailyWax(
        24,
        mutableData?.Consumption,
        mutableData?.Power,
        immutableData?.name
      ) || 0;

    const calCurrency =
      calculateDailyThb(
        24,
        mutableData?.Consumption,
        mutableData?.Power,
        immutableData?.name
      ) || 0;
    setDailyWax(calDailyWax);
    setDailyCurrency(calCurrency);
  };

  useEffect(() => {
    getProfit();
  }, [assetData, prices]);

  useEffect(() => {
    getAtomicSale();
  }, [assetData?.id, waxToThb]);

  const calculateDailyWax = (
    hours: number,
    consumption: number,
    power: number,
    name: string
  ) => {
    if (name === "Magnet") {
      return (
        (hours / 3) *
        (calculateWAX(prices, power, SeaTokens.TSFT) -
          (calculateWAX(prices, consumption, SeaTokens.FSFT) +
            calculateWAX(prices, consumption, SeaTokens.MSFT)))
      );
    } else if (name === "Fishing rod") {
      return (
        (hours / 3) *
        (calculateWAX(prices, power, SeaTokens.FSFT) -
          (calculateWAX(prices, consumption, SeaTokens.TSFT) +
            calculateWAX(prices, consumption, SeaTokens.MSFT)))
      );
    } else if (name === "Pickaxe") {
      return (
        (hours / 3) *
        (calculateWAX(prices, power, SeaTokens.MSFT) -
          (calculateWAX(prices, consumption, SeaTokens.FSFT) +
            calculateWAX(prices, consumption, SeaTokens.TSFT)))
      );
    }
  };

  const calculateDailyThb = (
    hours: number,
    consumption: number,
    power: number,
    name: string
  ) => {
    if (name === "Magnet") {
      return (
        (hours / 3) *
        (calculateTHB(prices, power, SeaTokens.TSFT) -
          (calculateTHB(prices, consumption, SeaTokens.FSFT) +
            calculateTHB(prices, consumption, SeaTokens.MSFT)))
      );
    } else if (name === "Fishing rod") {
      return (
        (hours / 3) *
        (calculateTHB(prices, power, SeaTokens.FSFT) -
          (calculateTHB(prices, consumption, SeaTokens.TSFT) +
            calculateTHB(prices, consumption, SeaTokens.MSFT)))
      );
    } else if (name === "Pickaxe") {
      return (
        (hours / 3) *
        (calculateTHB(prices, power, SeaTokens.MSFT) -
          (calculateTHB(prices, consumption, SeaTokens.FSFT) +
            calculateTHB(prices, consumption, SeaTokens.TSFT)))
      );
    }
  };

  return (
    <Grid key={assetData?.id} item xs={12} sm={4}>
      <CardGame
        id={assetData?.id}
        img={assetData?.immutableData?.img}
        name={assetData?.immutableData?.name}
        craftCurrency={0}
        craftWax={0}
        dailyCurrency={dailyCurrency}
        dailyWax={dailyWax}
        atomicWax={saleAtomicWax}
        atomicCurrency={saleAtomicCurrency}
        currency="THB"
        craftTokens={[]}
        game={seaCode}
        minted={assetData.minted}
      ></CardGame>
    </Grid>
  );
}

export default SubSectionTool;
