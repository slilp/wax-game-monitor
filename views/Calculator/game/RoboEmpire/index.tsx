import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { roboCode } from "../../../../api/game";
import { AssetInfo } from "../../../../api/game/modal";
import { HeaderPrice } from "../../../../components/molecules";
import ToolSection from "./component/ToolSection";
import { RoboTokens } from "./const";

function RoboEmpire({ assets }: { assets: AssetInfo[] }) {
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
              src={`/${roboCode}/${roboCode}.jpeg`}
              alt="wax"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HeaderPrice
            game={roboCode}
            tokens={[RoboTokens.REC, RoboTokens.REG, RoboTokens.REM]}
          ></HeaderPrice>
        </Grid>
      </Grid>
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

export default RoboEmpire;
