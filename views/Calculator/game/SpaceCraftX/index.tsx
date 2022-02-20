import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { AssetInfo } from "../../../../api/game/modal";
import { HeaderPrice } from "../../../../components/molecules";
import ToolSection from "./component/ToolSection";
import IToolSection from "./component/IToolSection";
import CrewSection from "./component/CrewSection";
import PlanetSection from "./component/PlanetSection";
import { SxcTokens } from "./const";

function SpaceCraftX({ assets }: { assets: AssetInfo[] }) {
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
          <ToolSection assets={assets}></ToolSection>
        </Grid>

        {/* Itool section */}
        <Grid item xs={12}>
          <IToolSection assets={assets}></IToolSection>
        </Grid>

        {/* Crew section */}
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <CrewSection assets={assets}></CrewSection>
            </Grid>
            <Grid item xs={12} sm={6}>
              <PlanetSection assets={assets}></PlanetSection>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default SpaceCraftX;