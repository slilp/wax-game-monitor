import React from "react";
import { Box, Grid } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import CardInfo from "./CardInfo";
import { normalCrew, uncommonCrew, rareCrew } from "../const";

function CrewSection({ assets }: { assets: AssetInfo[] }) {
  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
      <Grid container spacing={3}>
        {assets
          .filter((asset) => normalCrew?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.immutableData?.value?.market_prices?.[0]}
                scicCraft={assetData?.immutableData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.immutableData?.value?.market_prices?.[2]}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => uncommonCrew?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.immutableData?.value?.market_prices?.[0]}
                scicCraft={assetData?.immutableData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.immutableData?.value?.market_prices?.[2]}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
      <Box height="24px"></Box>
      <Grid container spacing={3}>
        {assets
          .filter((asset) => rareCrew?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid key={assetData?.id} item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.immutableData?.img}
                name={assetData?.immutableData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.immutableData?.value?.market_prices?.[0]}
                scicCraft={assetData?.immutableData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.immutableData?.value?.market_prices?.[2]}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default CrewSection;
