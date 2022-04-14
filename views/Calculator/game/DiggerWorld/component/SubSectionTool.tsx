import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, diggerCode } from "../../../../../api/game";
import { CardGame } from "../../../../../components/molecules";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { useAppSelector } from "../../../../../redux/hook";
import { DiggerWorldTokens } from "../../../../../config/tokens";

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
    const response = await getAtomicSalePrice(diggerCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicCurrency(waxToThb * response);
  };

  const getProfit = async () => {
    const immutableData = assetData?.immutableData;
    const mutableData = assetData?.mutableData;
    const calDailyWax =
      calculateDailyWax(
        mutableData?.miningToken,
        mutableData?.mining,
        24,
        mutableData?.ironUse,
        mutableData?.sulfurUse,
        mutableData?.diamondUse
      ) || 0;

    const calCurrency =
      calculateDailyThb(
        mutableData?.miningToken,
        mutableData?.mining,
        24,
        mutableData?.ironUse,
        mutableData?.sulfurUse,
        mutableData?.diamondUse
      ) || 0;
    setDailyWax(calDailyWax);
    setDailyCurrency(calCurrency);
  };

  const getCraft = () => {
    const mutableData = assetData?.mutableData;
    const waxCraftAmount =
      calculateWAX(prices, mutableData?.craftIronUse, DiggerWorldTokens.DWI) +
      calculateWAX(
        prices,
        mutableData?.craftDiamondUse,
        DiggerWorldTokens.DWD
      ) +
      calculateWAX(prices, mutableData?.craftSulfurUse, DiggerWorldTokens.DWS);
    const thbCraftAmount =
      calculateTHB(prices, mutableData?.craftIronUse, DiggerWorldTokens.DWI) +
      calculateTHB(
        prices,
        mutableData?.craftDiamondUse,
        DiggerWorldTokens.DWD
      ) +
      calculateTHB(prices, mutableData?.craftSulfurUse, DiggerWorldTokens.DWS);
    setCraftWax(waxCraftAmount);
    setCraftCurrency(thbCraftAmount);
    setCraftTokens([
      {
        name: DiggerWorldTokens.DWD,
        amount: mutableData?.craftDiamondUse,
      },
      {
        name: DiggerWorldTokens.DWS,
        amount: mutableData?.craftSulfurUse,
      },
      {
        name: DiggerWorldTokens.DWI,
        amount: mutableData?.craftIronUse,
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
    ironUse: number,
    sulfurUse: number,
    diamondUse: number
  ) =>
    hours *
    (calculateWAX(prices, mining, miningToken) -
      (calculateWAX(prices, ironUse, DiggerWorldTokens.DWI) +
        calculateWAX(prices, sulfurUse, DiggerWorldTokens.DWS) +
        calculateWAX(prices, diamondUse, DiggerWorldTokens.DWD)));

  const calculateDailyThb = (
    miningToken: string,
    mining: number,
    hours: number,
    ironUse: number,
    sulfurUse: number,
    diamondUse: number
  ) =>
    hours *
    (calculateTHB(prices, mining, miningToken) -
      (calculateTHB(prices, ironUse, DiggerWorldTokens.DWI) +
        calculateTHB(prices, sulfurUse, DiggerWorldTokens.DWS) +
        calculateTHB(prices, diamondUse, DiggerWorldTokens.DWD)));

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
        game={diggerCode}
        minted={assetData.minted}
      ></CardGame>
    </Grid>
  );
}

export default SubSectionTool;
