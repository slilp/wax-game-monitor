import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CardInfo from "./CardInfo";
import { ExchangePrice } from "../../../../../hook/useCurrency";
import { AssetInfo } from "../../../../../api/game/modal";
import { calculateTHB, calculateWAX } from "../../../../../utils/calculator";
import { SxcTokens } from "../const";
import { useAppSelector } from "../../../../../redux/hook";
import { getAtomicSalePrice, spxCode } from "../../../../../api/game";

interface SubSectionToolProps {
  prices: ExchangePrice;
  assetData: AssetInfo;
}

function SubSectionInfo({ prices, assetData }: SubSectionToolProps) {
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
  }, [waxToThb]);

  const immutableData = assetData?.immutableData;
  const scid = immutableData?.value?.market_prices?.[0]?.split(" ")[0];
  const scic = immutableData?.value?.market_prices?.[1]?.split(" ")[0];
  const sciw = immutableData?.value?.market_prices?.[2]?.split(" ")[0];

  const waxCraftAmount =
    calculateWAX(prices, scid, SxcTokens.SCID) +
    calculateWAX(prices, scic, SxcTokens.SCIC);
  const thbCraftAmount =
    calculateTHB(prices, scid, SxcTokens.SCID) +
    calculateTHB(prices, scic, SxcTokens.SCIC);

  return (
    <Grid key={assetData?.id} item xs={12}>
      <CardInfo
        id={assetData?.id}
        img={assetData?.immutableData?.img}
        name={assetData?.immutableData?.name}
        usdCraft={thbCraftAmount}
        waxCraft={waxCraftAmount}
        scidCraft={scid}
        scicCraft={scic}
        sciwCraft={sciw}
        atomicThb={saleAtomicThb}
        atomicWax={saleAtomicWax}
      ></CardInfo>
    </Grid>
  );
}

export default SubSectionInfo;
