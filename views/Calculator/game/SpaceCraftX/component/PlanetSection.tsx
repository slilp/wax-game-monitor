import React from "react";
import { Box, Grid } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import CardInfo from "./CardInfo";
import { planetCommon, planetRare, planetUltrarare } from "../const";

interface ConvertPrice {
  [key: string]: {
    Wax: number;
    USD: number;
    THB: number;
  };
}

function PlanetSection({
  assets,
  prices,
}: {
  assets: AssetInfo[];
  prices?: ConvertPrice;
}) {
  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetCommon?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={
                  assetData?.immutableData?.immutableData?.value
                    ?.market_prices?.[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.market_prices?.[1]?.split(
                    " "
                  )[0]
                }
                sciwCraft={
                  assetData?.immutableData?.value?.market_prices?.[2]?.split(
                    " "
                  )[0]
                }
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetRare?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={
                  assetData?.immutableData?.value?.market_prices?.[0]?.split(
                    " "
                  )[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.market_prices?.[1]?.split(
                    " "
                  )[0]
                }
                sciwCraft={
                  assetData?.immutableData?.value?.market_prices?.[2]?.split(
                    " "
                  )[0]
                }
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetUltrarare?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={
                  assetData?.immutableData?.value?.market_prices?.[0]?.split(
                    " "
                  )[0]
                }
                scicCraft={
                  assetData?.immutableData?.value?.market_prices?.[1]?.split(
                    " "
                  )[0]
                }
                sciwCraft={
                  assetData?.immutableData?.value?.market_prices?.[2]?.split(
                    " "
                  )[0]
                }
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default PlanetSection;
