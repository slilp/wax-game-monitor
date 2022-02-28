import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import Image from "next/image";
import SubSectionTool from "./SubSectionTool";
import useCurrency from "../../../../../hook/useCurrency";
import { SeaTokens, fishingRod, pickaxe, magnet } from "../const";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
  const { prices } = useCurrency({
    tokens: [
      SeaTokens.FSFT.toString(),
      SeaTokens.MSFT.toString(),
      SeaTokens.TSFT.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/seafarmersio/${SeaTokens.FSFT}.png`}
              alt={SeaTokens.FSFT}
              width={25}
              height={25}
            />
            <Typography variant="h6">{SeaTokens.FSFT}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => fishingRod.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
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
              src={`/seafarmersio/${SeaTokens.TSFT}.png`}
              alt={SeaTokens.TSFT}
              width={25}
              height={25}
            />
            <Typography variant="h6">{SeaTokens.TSFT}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => magnet.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
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
              src={`/seafarmersio/${SeaTokens.MSFT}.png`}
              alt={SeaTokens.MSFT}
              width={25}
              height={25}
            />
            <Typography variant="h6">{SeaTokens.MSFT}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => pickaxe.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
            ></SubSectionTool>
          ))}
      </Grid>
    </Box>
  );
}

export default ToolSection;
