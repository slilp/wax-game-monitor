import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import Image from "next/image";
import CardTool from "./CardTool";
import {
  scicToolsV2,
  scicTools,
  scidTools,
  sciwTools,
  SxcTokens,
} from "../const";

interface ConvertPrice {
  [key: string]: {
    Wax: number;
    USD: number;
    THB: number;
  };
}

function ToolSection({
  assets,
  prices,
}: {
  assets: AssetInfo[];
  prices?: ConvertPrice;
}) {
  const calculateThb = (scid: number, token: SxcTokens) => {
    const thb = prices?.[token]?.THB;
    return thb ? thb * scid : 0;
  };

  const calculateWax = (scid: number, token: SxcTokens) => {
    const thb = prices?.[token]?.Wax;
    return thb ? thb * scid : 0;
  };

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
              src={`/spacecraftxc/${SxcTokens.SCIC}.png`}
              alt="SCIC"
              width={25}
              height={25}
            />
            <Typography variant="h6">{SxcTokens.SCIC}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => scicToolsV2.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardTool
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                roi={25}
                usdCraft={
                  calculateThb(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateThb(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                waxCraft={
                  calculateWax(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateWax(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                dailyUsd={500}
                dailyWax={990}
                scidCraft={
                  assetData?.immutableData?.value?.second?.split(" ")[0]
                }
                scicCraft={assetData?.immutableData?.value?.first.split(" ")[0]}
              ></CardTool>
            </Grid>
          ))}
        {assets
          .filter((asset) => scicTools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardTool
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                roi={25}
                usdCraft={
                  calculateThb(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateThb(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                waxCraft={
                  calculateWax(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateWax(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                dailyUsd={500}
                dailyWax={990}
                scidCraft={
                  assetData?.immutableData?.value?.second?.split(" ")[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.first?.split(" ")[0]
                }
              ></CardTool>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" gap="15px">
            <Image
              src={`/spacecraftxc/${SxcTokens.SCID}.png`}
              alt="SCID"
              width={25}
              height={25}
            />
            <Typography variant="h6">{SxcTokens.SCID}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => scidTools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardTool
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                roi={25}
                usdCraft={
                  calculateThb(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateThb(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                waxCraft={
                  calculateWax(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateWax(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                dailyUsd={500}
                dailyWax={990}
                scidCraft={
                  assetData?.immutableData?.value?.second?.split(" ")[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.first?.split(" ")[0]
                }
              ></CardTool>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" gap="15px">
            <Image
              src={`/spacecraftxc/${SxcTokens.SCIW}.png`}
              alt="wax"
              width={25}
              height={25}
            />
            <Typography variant="h6">{SxcTokens.SCIW}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => sciwTools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12} sm={4}>
              <CardTool
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                roi={25}
                usdCraft={
                  calculateThb(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateThb(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                waxCraft={
                  calculateWax(
                    assetData?.immutableData?.value?.second?.split(" ")[0],
                    SxcTokens.SCID
                  ) +
                  calculateWax(
                    assetData?.immutableData?.value?.first.split(" ")[0],
                    SxcTokens.SCIC
                  )
                }
                dailyUsd={500}
                dailyWax={990}
                scidCraft={
                  assetData?.immutableData?.value?.second?.split(" ")[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.first?.split(" ")[0]
                }
              ></CardTool>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ToolSection;
