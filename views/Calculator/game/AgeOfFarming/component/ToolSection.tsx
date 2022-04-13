import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import { CustomPrice } from "../../../../../components/molecules";
import SubSectionTool from "./SubSectionTool";
import useCustomPrice from "../../../../../hook/useCustomPrice";
import { axe, pickaxe, spear } from "../const";
import { AgeOfFarmingTokens } from "../../../../../config/tokens";
import { aofCode } from "../../../../../api/game";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
  const { calculatePrices, setSelectValues } = useCustomPrice({
    tokens: [
      AgeOfFarmingTokens.AOFW.toString(),
      AgeOfFarmingTokens.AOFS.toString(),
      AgeOfFarmingTokens.AOFF.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CustomPrice
            tokens={[
              AgeOfFarmingTokens.AOFW.toString(),
              AgeOfFarmingTokens.AOFS.toString(),
              AgeOfFarmingTokens.AOFF.toString(),
            ]}
            game={aofCode}
            setSelectValues={setSelectValues}
          ></CustomPrice>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/${aofCode}/${AgeOfFarmingTokens.AOFW}.png`}
              alt={AgeOfFarmingTokens.AOFW}
              width={25}
              height={25}
            />
            <Typography variant="h6">{AgeOfFarmingTokens.AOFW}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => axe.includes(asset.id))
          .sort(
            (a, b) =>
              parseInt(a?.mutableData?.mining) -
              parseInt(b?.mutableData?.mining)
          )
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
            ></SubSectionTool>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/${aofCode}/${AgeOfFarmingTokens.AOFS}.png`}
              alt={AgeOfFarmingTokens.AOFS}
              width={25}
              height={25}
            />
            <Typography variant="h6">{AgeOfFarmingTokens.AOFS}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => pickaxe.includes(asset.id))
          .sort(
            (a, b) =>
              parseInt(a?.mutableData?.mining) -
              parseInt(b?.mutableData?.mining)
          )
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
            ></SubSectionTool>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/${aofCode}/${AgeOfFarmingTokens.AOFF}.png`}
              alt={AgeOfFarmingTokens.AOFF}
              width={25}
              height={25}
            />
            <Typography variant="h6">{AgeOfFarmingTokens.AOFF}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => spear.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
            ></SubSectionTool>
          ))}
      </Grid>
    </Box>
  );
}

export default ToolSection;
