import React from "react";
import { Box, Grid } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import CardInfo from "./CardInfo";
import { planetCommon, planetRare, planetUltrarare } from "../const";

function PlanetSection({ assets }: { assets: AssetInfo[] }) {
  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
      <Grid container spacing={3}>
        {assets
          .filter((asset) => planetCommon?.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <Grid item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.image}
                name={assetData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.value?.market_prices?.[0]}
                scicCraft={assetData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.value?.market_prices?.[2]}
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
            <Grid item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.image}
                name={assetData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.value?.market_prices?.[0]}
                scicCraft={assetData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.value?.market_prices?.[2]}
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
            <Grid item xs={12}>
              <CardInfo
                id={assetData?.id}
                img={assetData?.image}
                name={assetData?.name}
                usdCraft={500}
                waxCraft={1000}
                scidCraft={assetData?.value?.market_prices?.[0]}
                scicCraft={assetData?.value?.market_prices?.[1]}
                sciwCraft={assetData?.value?.market_prices?.[2]}
              ></CardInfo>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default PlanetSection;
