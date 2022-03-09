import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, roboCode } from "../../../../../api/game";
import { CardGame } from "../../../../../components/molecules";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { useAppSelector } from "../../../../../redux/hook";
import { RoboTokens } from "../const";

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
    const response = await getAtomicSalePrice(roboCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicCurrency(waxToThb * response);
  };

  const getProfit = async () => {
    const immutableData = assetData?.immutableData;
    const mutableData = assetData?.mutableData;
    const calDailyWax =
      calculateDailyWax(
        immutableData?.type === "Metal"
          ? RoboTokens.REM
          : immutableData?.type === "Gold"
          ? RoboTokens.REG
          : RoboTokens.REC,
        mutableData?.mining,
        24,
        mutableData?.recUse,
        mutableData?.regUse
      ) || 0;

    const calCurrency =
      calculateDailyThb(
        immutableData?.type === "Metal"
          ? RoboTokens.REM
          : immutableData?.type === "Gold"
          ? RoboTokens.REG
          : RoboTokens.REC,
        mutableData?.mining,
        24,
        mutableData?.recUse,
        mutableData?.regUse
      ) || 0;
    setDailyWax(calDailyWax);
    setDailyCurrency(calCurrency);
  };

  const getCraft = () => {
    const mutableData = assetData?.mutableData;
    const waxCraftAmount =
      calculateWAX(prices, mutableData?.craftRecUse, RoboTokens.REM) +
      calculateWAX(prices, mutableData?.craftRegUse, RoboTokens.REG);
    const thbCraftAmount =
      calculateTHB(prices, mutableData?.craftRecUse, RoboTokens.REM) +
      calculateTHB(prices, mutableData?.craftRegUse, RoboTokens.REG);
    setCraftWax(waxCraftAmount);
    setCraftCurrency(thbCraftAmount);
    setCraftTokens([
      {
        name: RoboTokens.REM,
        amount: mutableData?.craftRecUse,
      },
      {
        name: RoboTokens.REG,
        amount: mutableData?.craftRegUse,
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
    recUse: number,
    regUse: number
  ) =>
    hours *
    (calculateWAX(prices, mining, miningToken) -
      (calculateWAX(prices, recUse, RoboTokens.REC) +
        calculateWAX(prices, regUse, RoboTokens.REG)));

  const calculateDailyThb = (
    miningToken: string,
    mining: number,
    hours: number,
    recUse: number,
    regUse: number
  ) =>
    hours *
    (calculateTHB(prices, mining, miningToken) -
      (calculateTHB(prices, recUse, RoboTokens.REC) +
        calculateTHB(prices, regUse, RoboTokens.REG)));

  return (
    <Grid key={assetData?.id} item xs={12} sm={4}>
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
        game={roboCode}
        minted={assetData?.minted || 0}
      ></CardGame>
    </Grid>
  );
}

export default SubSectionTool;
