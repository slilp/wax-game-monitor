import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../redux/hook";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { AssetInfo } from "../../../../api/game/modal";
import { HeaderPrice } from "../../../../components/molecules";
import ToolSection from "./component/ToolSection";
import IToolSection from "./component/IToolSection";
import CrewSection from "./component/CrewSection";
import PlanetSection from "./component/PlanetSection";
import { SxcTokens } from "./const";

interface ConvertPrice {
  [key: string]: {
    Wax: number;
    USD: number;
    THB: number;
  };
}

function SpaceCraftX({ assets }: { assets: AssetInfo[] }) {
  const [prices, setPrices] = useState<ConvertPrice>({});
  const waxData = useAppSelector((state) => state.wax);
  const gameToken = waxData.tokens.filter((token) =>
    [
      SxcTokens.SCIC.toString(),
      SxcTokens.SCID.toString(),
      SxcTokens.SCIW.toString(),
    ].includes(token.symbol)
  );

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

  useEffect(() => {
    const priceState = {
      [SxcTokens.SCIC]: {
        Wax: convertToWax(SxcTokens.SCIC),
        USD: convertToUsd(SxcTokens.SCIC),
        THB: convertToThb(SxcTokens.SCIC),
      },
      [SxcTokens.SCID]: {
        Wax: convertToWax(SxcTokens.SCID),
        USD: convertToUsd(SxcTokens.SCID),
        THB: convertToThb(SxcTokens.SCID),
      },
      [SxcTokens.SCIW]: {
        Wax: convertToWax(SxcTokens.SCIW),
        USD: convertToUsd(SxcTokens.SCIW),
        THB: convertToThb(SxcTokens.SCIW),
      },
    };
    setPrices(priceState);
  }, [waxData, gameToken]);

  return (
    <div>
      <Box height="25px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            width="150px"
            sx={{ borderRadius: "50%" }}
            overflow="hidden"
            m="auto"
          >
            <Image
              src={`/spacecraftxc/spacecraftxc.jpeg`}
              alt="wax"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HeaderPrice
            game="spacecraftxc"
            tokens={[SxcTokens.SCIC, SxcTokens.SCID, SxcTokens.SCIW]}
          ></HeaderPrice>
        </Grid>
      </Grid>
      <Box height="25px"></Box>
      <Grid container spacing={3}>
        {/* Tool section */}
        <Grid item xs={12}>
          <ToolSection assets={assets} prices={prices}></ToolSection>
        </Grid>

        {/* Itool section */}
        <Grid item xs={12}>
          <IToolSection assets={assets} prices={prices}></IToolSection>
        </Grid>

        {/* Crew section */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <CrewSection assets={assets} prices={prices}></CrewSection>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PlanetSection assets={assets} prices={prices}></PlanetSection>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpaceCraftX;
