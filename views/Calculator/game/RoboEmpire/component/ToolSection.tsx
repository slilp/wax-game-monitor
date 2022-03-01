import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import { CustomPrice } from "../../../../../components/molecules";
import Image from "next/image";
import SubSectionTool from "./SubSectionTool";
import useCustomPrice from "../../../../../hook/useCustomPrice";
import { RoboTokens, spark, magneto, drilloid } from "../const";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
  const { calculatePrices, setSelectValues } = useCustomPrice({
    tokens: [
      RoboTokens.REC.toString(),
      RoboTokens.REG.toString(),
      RoboTokens.REM.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CustomPrice
            tokens={[
              RoboTokens.REC.toString(),
              RoboTokens.REG.toString(),
              RoboTokens.REM.toString(),
            ]}
            game="roboempireio"
            setSelectValues={setSelectValues}
          ></CustomPrice>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/roboempireio/${RoboTokens.REM}.png`}
              alt={RoboTokens.REM}
              width={25}
              height={25}
            />
            <Typography variant="h6">{RoboTokens.REM}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => magneto.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
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
              src={`/roboempireio/${RoboTokens.REG}.png`}
              alt={RoboTokens.REG}
              width={25}
              height={25}
            />
            <Typography variant="h6">{RoboTokens.REG}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => drilloid.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
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
              src={`/roboempireio/${RoboTokens.REC}.png`}
              alt={RoboTokens.REC}
              width={25}
              height={25}
            />
            <Typography variant="h6">{RoboTokens.REC}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => spark.includes(asset.id))
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((assetData) => (
            <SubSectionTool
              key={assetData?.id}
              assetData={assetData}
              prices={calculatePrices}
            ></SubSectionTool>
          ))}
      </Grid>
    </Box>
  );
}

export default ToolSection;
