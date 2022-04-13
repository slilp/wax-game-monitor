import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, aofCode } from "../../../../../api/game";
import { CardGame } from "../../../../../components/molecules";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { useAppSelector } from "../../../../../redux/hook";
import { AgeOfFarmingTokens } from "../../../../../config/tokens";
import { axe, pickaxe } from "../const";

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
    const response = await getAtomicSalePrice(aofCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicCurrency(waxToThb * response);
  };

  const getProfit = async () => {
    const immutableData = assetData?.immutableData;
    const mutableData = assetData?.mutableData;
    const calDailyWax =
      calculateDailyWax(
        axe.includes(assetData?.id)
          ? AgeOfFarmingTokens.AOFW
          : pickaxe.includes(assetData?.id)
          ? AgeOfFarmingTokens.AOFS
          : AgeOfFarmingTokens.AOFF,
        mutableData?.mining,
        24,
        mutableData?.energyUse,
        mutableData?.woodUse,
        mutableData?.stoneUse
      ) || 0;

    const calCurrency =
      calculateDailyThb(
        axe.includes(assetData?.id)
          ? AgeOfFarmingTokens.AOFW
          : pickaxe.includes(assetData?.id)
          ? AgeOfFarmingTokens.AOFS
          : AgeOfFarmingTokens.AOFF,
        mutableData?.mining,
        24,
        mutableData?.energyUse,
        mutableData?.woodUse,
        mutableData?.stoneUse
      ) || 0;
    setDailyWax(calDailyWax);
    setDailyCurrency(calCurrency);
  };

  const getCraft = () => {
    const mutableData = assetData?.mutableData;
    const waxCraftAmount =
      calculateWAX(prices, mutableData?.craftWoodUse, AgeOfFarmingTokens.AOFW) +
      calculateWAX(prices, mutableData?.craftStoneUse, AgeOfFarmingTokens.AOFS);
    const thbCraftAmount =
      calculateTHB(prices, mutableData?.craftWoodUse, AgeOfFarmingTokens.AOFW) +
      calculateTHB(prices, mutableData?.craftStoneUse, AgeOfFarmingTokens.AOFS);
    setCraftWax(waxCraftAmount);
    setCraftCurrency(thbCraftAmount);
    setCraftTokens([
      {
        name: AgeOfFarmingTokens.AOFW,
        amount: mutableData?.craftWoodUse,
      },
      {
        name: AgeOfFarmingTokens.AOFS,
        amount: mutableData?.craftStoneUse,
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
    energyUse: number,
    woodUse: number,
    stoneUse: number
  ) =>
    hours *
    (calculateWAX(prices, mining, miningToken) -
      (calculateWAX(prices, energyUse / 5, AgeOfFarmingTokens.AOFF) +
        calculateWAX(prices, woodUse, AgeOfFarmingTokens.AOFW) +
        calculateWAX(prices, stoneUse, AgeOfFarmingTokens.AOFS)));

  const calculateDailyThb = (
    miningToken: string,
    mining: number,
    hours: number,
    energyUse: number,
    woodUse: number,
    stoneUse: number
  ) =>
    hours *
    (calculateTHB(prices, mining, miningToken) -
      (calculateTHB(prices, energyUse, AgeOfFarmingTokens.AOFF) +
        calculateTHB(prices, woodUse, AgeOfFarmingTokens.AOFW) +
        calculateTHB(prices, stoneUse, AgeOfFarmingTokens.AOFS)));

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
        game={aofCode}
        minted={assetData.minted}
      ></CardGame>
    </Grid>
  );
}

export default SubSectionTool;
