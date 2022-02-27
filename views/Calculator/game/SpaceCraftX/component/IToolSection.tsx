import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import Image from "next/image";
import SubSectionTool from "./SubSectionTool";
import useCurrency from "../../../../../hook/useCurrency";
import { SxcTokens, scicITools, scidITools, sciwITools } from "../const";

function IToolSection({ assets }: { assets: AssetInfo[] }) {
  const { prices } = useCurrency({
    tokens: [
      SxcTokens.SCIC.toString(),
      SxcTokens.SCID.toString(),
      SxcTokens.SCIW.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
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
          .filter((asset) => scicITools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
              type="itool"
            ></SubSectionTool>
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
          .filter((asset) => scidITools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
              type="itool"
            ></SubSectionTool>
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
          .filter((asset) => sciwITools.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={prices}
              type="itool"
            ></SubSectionTool>
          ))}
      </Grid>
    </Box>
  );
}

export default IToolSection;
