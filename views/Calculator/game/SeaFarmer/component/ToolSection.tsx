import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import Image from "next/image";
import CardInfo from "./CardInfo";
import { SeaTokens, fishingRod, pickaxe, magnet } from "../const";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
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
              alt="SCIC"
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
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" gap="15px">
            <Image
              src={`/seafarmersio/${SeaTokens.TSFT}.png`}
              alt="SCID"
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
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" gap="15px">
            <Image
              src={`/seafarmersio/${SeaTokens.MSFT}.png`}
              alt="wax"
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
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ToolSection;
