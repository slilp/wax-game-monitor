import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Button } from "../../../../../components/atomic";
import { AssetInfo } from "../../../../../api/game/modal";
import { CustomPrice } from "../../../../../components/molecules";
import SubSectionTool from "./SubSectionTool";
import useCustomPrice from "../../../../../hook/useCustomPrice";
import { GalaxyTokens, asteroid, plasma, oxygen } from "../const";

function ToolSection({ assets }: { assets: AssetInfo[] }) {
  const { calculatePrices, setSelectValues } = useCustomPrice({
    tokens: [
      GalaxyTokens.GMP.toString(),
      GalaxyTokens.GMA.toString(),
      GalaxyTokens.GMO.toString(),
    ],
  });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <CustomPrice
            tokens={[
              GalaxyTokens.GMP.toString(),
              GalaxyTokens.GMA.toString(),
              GalaxyTokens.GMO.toString(),
            ]}
            game="galaxyminerx"
            setSelectValues={setSelectValues}
          ></CustomPrice>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link href="/me" passHref={true}>
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{ color: "white" }}
                startIcon={<AccountBalanceWalletIcon />}
              >
                See Port
              </Button>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Image
              src={`/galaxyminerx/${GalaxyTokens.GMA}.png`}
              alt={GalaxyTokens.GMA}
              width={25}
              height={25}
            />
            <Typography variant="h6">{GalaxyTokens.GMA}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => asteroid.includes(asset.id))
          .sort(
            (a, b) =>
              parseInt(a?.mutableData?.mining) -
              parseInt(b?.mutableData?.mining)
          )
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
              src={`/galaxyminerx/${GalaxyTokens.GMP}.png`}
              alt={GalaxyTokens.GMP}
              width={25}
              height={25}
            />
            <Typography variant="h6">{GalaxyTokens.GMP}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => plasma.includes(asset.id))
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
              src={`/galaxyminerx/${GalaxyTokens.GMO}.png`}
              alt={GalaxyTokens.GMO}
              width={25}
              height={25}
            />
            <Typography variant="h6">{GalaxyTokens.GMO}</Typography>
          </Box>
        </Grid>
        {assets
          .filter((asset) => oxygen.includes(asset.id))
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
