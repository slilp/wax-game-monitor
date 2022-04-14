import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { AssetInfo } from "../../../../../api/game/modal";
import { CustomPrice } from "../../../../../components/molecules";
import SubSectionTool from "./SubSectionTool";
import useCustomPrice from "../../../../../hook/useCustomPrice";
import { pickaxes, bombs, jackhammers } from "../const";
import { DiggerWorldTokens } from "../../../../../config/tokens";
import { diggerCode } from "../../../../../api/game";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
  const { calculatePrices, setSelectValues } = useCustomPrice({
    tokens: [
      DiggerWorldTokens.DWS.toString(),
      DiggerWorldTokens.DWI.toString(),
      DiggerWorldTokens.DWD.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CustomPrice
            tokens={[
              DiggerWorldTokens.DWS.toString(),
              DiggerWorldTokens.DWI.toString(),
              DiggerWorldTokens.DWD.toString(),
            ]}
            game={diggerCode}
            setSelectValues={setSelectValues}
          ></CustomPrice>
        </Grid>
        <Grid item xs={12}>
          <Box
            height="100px"
            width="300px"
            m="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              background: "url('/diggersworld/safemine.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
                paddingTop: "20px",
                paddingLeft: "20px",
              }}
            >
              Safe mine
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/tokens/${DiggerWorldTokens.DWS}.png`}
              alt={DiggerWorldTokens.DWS}
              width={25}
              height={25}
            />
            <Typography variant="h6">{DiggerWorldTokens.DWS}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => pickaxes.includes(asset.id))
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
              src={`/tokens/${DiggerWorldTokens.DWI}.png`}
              alt={DiggerWorldTokens.DWI}
              width={25}
              height={25}
            />
            <Typography variant="h6">{DiggerWorldTokens.DWI}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => bombs.includes(asset.id))
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
              src={`/tokens/${DiggerWorldTokens.DWD}.png`}
              alt={DiggerWorldTokens.DWD}
              width={25}
              height={25}
            />
            <Typography variant="h6">{DiggerWorldTokens.DWD}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => jackhammers.includes(asset.id))
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
