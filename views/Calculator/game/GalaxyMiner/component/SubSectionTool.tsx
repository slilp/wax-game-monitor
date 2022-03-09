import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, galaxyCode } from "../../../../../api/game";
import { CardGame } from "../../../../../components/molecules";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { useAppSelector } from "../../../../../redux/hook";
import { GalaxyTokens } from "../const";

interface SubSectionToolProps {
  prices: ExchangePrice;
  assetData: AssetInfo;
}

function SubSectionTool({ prices, assetData }: SubSectionToolProps) {
  const [dailyWax, setDailyWax] = useState<number>(0);
  const [dailyCurrency, setDailyCurrency] = useState<number>(0);
  const [saleAtomicWax, setSaleAtomicWax] = useState<number>(0);
  const [saleAtomicCurrency, setSaleAtomicCurrency] = useState<number>(0);
  const [craftWax, setCraftWax] = useState<number>(0);
  const [craftCurrency, setCraftCurrency] = useState<number>(0);
  const [craftTokens, setCraftTokens] = useState<
    {
      name: string;
      amount: number;
    }[]
  >([]);
  const { waxToThb } = useAppSelector((state) => state.wax);

  const getAtomicSale = async () => {
    const response = await getAtomicSalePrice(galaxyCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicCurrency(waxToThb * response);
  };

  const getProfit = async () => {
    const immutableData = assetData?.immutableData;
    const mutableData = assetData?.mutableData;
    const calDailyWax =
      calculateDailyWax(
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
    setDailyWax(calDailyWax);
    setDailyCurrency(calCurrency);
  };

  const getCraft = () => {
    const mutableData = assetData?.mutableData;
    const waxCraftAmount =
      calculateWAX(prices, mutableData?.craftGmaUse, GalaxyTokens.GMA) +
      calculateWAX(prices, mutableData?.craftGmpUse, GalaxyTokens.GMP);
    const thbCraftAmount =
      calculateTHB(prices, mutableData?.craftGmaUse, GalaxyTokens.GMA) +
      calculateTHB(prices, mutableData?.craftGmpUse, GalaxyTokens.GMP);
    setCraftWax(waxCraftAmount);
    setCraftCurrency(thbCraftAmount);
    setCraftTokens([
      {
        name: GalaxyTokens.GMA,
        amount: mutableData?.craftGmaUse,
      },
      {
        name: GalaxyTokens.GMP,
        amount: mutableData?.craftGmpUse,
      },
    ]);
  };

  useEffect(() => {
    getProfit();
    getCraft();
  }, [assetData, prices]);

  useEffect(() => {
    getAtomicSale();
  }, [assetData?.id, waxToThb]);

  const calculateDailyWax = (
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

  return (
    <Grid key={assetData?.id} item xs={12} sm={6} md={4}>
      <CardGame
        id={assetData?.id}
        img={assetData?.immutableData?.img}
        name={assetData?.immutableData?.name}
        craftCurrency={craftCurrency}
        craftWax={craftWax}
        dailyCurrency={dailyCurrency}
        dailyWax={dailyWax}
        atomicWax={saleAtomicWax}
        atomicCurrency={saleAtomicCurrency}
        currency="THB"
        craftTokens={craftTokens}
        game={galaxyCode}
        minted={assetData.minted}
      ></CardGame>
    </Grid>
  );
}

export default SubSectionTool;
