import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { getAtomicSalePrice, spxCode } from "../../../../../api/game";
import CardTool from "./CardTool";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { SxcTokens } from "../const";
import { useAppSelector } from "../../../../../redux/hook";

interface SubSectionToolProps {
  prices: ExchangePrice;
  assetData: AssetInfo;
  type: "tool" | "itool";
}

function SubSectionTool({ prices, assetData, type }: SubSectionToolProps) {
  const [saleAtomicWax, setSaleAtomicWax] = useState<number>(0);
  const [saleAtomicThb, setSaleAtomicThb] = useState<number>(0);
  const { waxToThb } = useAppSelector((state) => state.wax);

  const getAtomicSale = async () => {
    const response = await getAtomicSalePrice(spxCode, assetData?.id);
    setSaleAtomicWax(response);
    setSaleAtomicThb(waxToThb * response);
  };

  useEffect(() => {
    getAtomicSale();
  }, []);

  const immutableData = assetData?.immutableData;
  let scid = 0;
  let scic = 0;
  let sciw = 0;
  if (type === "itool") {
    scid = immutableData?.value?.market_prices?.[0]?.split(" ")[0];
    scic = immutableData?.value?.market_prices?.[1]?.split(" ")[0];
    sciw = immutableData?.value?.market_prices?.[2]?.split(" ")[0];
  } else {
    scid = immutableData?.value?.second?.split(" ")[0];
    scic = immutableData?.value?.first.split(" ")[0];
  }

  const waxCraftAmount =
    calculateWAX(prices, scid, SxcTokens.SCID) +
    calculateWAX(prices, scic, SxcTokens.SCIC);
  const thbCraftAmount =
    calculateTHB(prices, scid, SxcTokens.SCID) +
    calculateTHB(prices, scic, SxcTokens.SCIC);

  const calculateDailyWax = (
    hours: number,
    miningToken: string,
    mining: number,
    enerygy: number,
    strength: number
  ) =>
    hours *
    (calculateWAX(prices, mining, miningToken) -
      (calculateWAX(prices, enerygy, SxcTokens.SCIW) +
        calculateWAX(prices, strength, SxcTokens.SCID)) /
        10);

  const calculateDailyThb = (
    hours: number,
    miningToken: string,
    mining: number,
    enerygy: number,
    strength: number
  ) =>
    hours *
    (calculateTHB(prices, mining, miningToken) -
      (calculateTHB(prices, enerygy, SxcTokens.SCIW) +
        calculateTHB(prices, strength, SxcTokens.SCID)) /
        10);

  const calDailyWax = calculateDailyWax(
    24,
    immutableData?.type === "cosmic_dust"
      ? SxcTokens.SCID
      : immutableData?.type === "wave"
      ? SxcTokens.SCIW
      : SxcTokens.SCIC,
    immutableData?.mining_power,
    immutableData?.energy_usage,
    immutableData?.strength_usage
  );
  const calDailyThb = calculateDailyThb(
    24,
    immutableData?.type === "cosmic_dust"
      ? SxcTokens.SCID
      : immutableData?.type === "wave"
      ? SxcTokens.SCIW
      : SxcTokens.SCIC,
    immutableData?.mining_power,
    immutableData?.energy_usage,
    immutableData?.strength_usage
  );

  return (
    <Grid key={assetData?.id} item xs={12} sm={4}>
      <CardTool
        id={assetData?.id}
        img={immutableData?.img}
        name={immutableData?.name}
        usdCraft={thbCraftAmount}
        waxCraft={waxCraftAmount}
        dailyUsd={calDailyThb}
        dailyWax={calDailyWax}
        scidCraft={scid}
        scicCraft={scic}
        sciwCraft={sciw}
        atomicThb={saleAtomicThb}
        atomicWax={saleAtomicWax}
      ></CardTool>
    </Grid>
  );
}

export default SubSectionTool;
