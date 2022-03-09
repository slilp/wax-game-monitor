import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { galaxyCode } from "../../../../api/game";
import { AssetInfo } from "../../../../api/game/modal";
import { HeaderPrice, Simulator } from "../../../../components/molecules";
import ToolSection from "./component/ToolSection";
import { GalaxyTokens } from "./const";

function GalaxyMiner({ assets }: { assets: AssetInfo[] }) {
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
              src={`/${galaxyCode}/${galaxyCode}.png`}
              alt="logo"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HeaderPrice
            game={galaxyCode}
            tokens={[GalaxyTokens.GMP, GalaxyTokens.GMA, GalaxyTokens.GMO]}
          ></HeaderPrice>
        </Grid>
      </Grid>
      <Box height="25px"></Box>
      <Simulator />

      <Box height="25px"></Box>

      <Grid container spacing={3}>
        {/* Tool section */}
        <Grid item xs={12}>
          <ToolSection assets={assets}></ToolSection>
        </Grid>
      </Grid>
    </div>
  );
}

export default GalaxyMiner;
