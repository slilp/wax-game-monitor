import React, { useState } from "react";
import { Typography, Box, Grid, Avatar, CircularProgress } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CancelIcon from "@mui/icons-material/Cancel";

import TokenSection from "./TokenSection";

import useBalance from "../../../hook/useBalance";
import { galaxyCode } from "../../../api/game";

interface PortCardProps {
  wallet: string;
  deleteWallet: any;
  isHighValue: boolean;
}

function PortCard({ wallet, deleteWallet, isHighValue }: PortCardProps) {
  // const { profitData, loading } = useGameProfit({ code: galaxyCode });
  const { data: tokenData, loading } = useBalance({ wallet });

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="150px"
        >
          <CircularProgress></CircularProgress>
        </Box>
      )}
      {!loading && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              bgcolor="#EA923E"
              borderRadius="25px"
              textAlign="center"
              p="5px"
              width="250px"
            >
              <Typography variant="body1">{wallet}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: "0.8",
                },
              }}
              onClick={() => deleteWallet(wallet)}
            >
              <CancelIcon></CancelIcon>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <Box display="flex" gap="5px">
                <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                <Typography variant="body1">Wallet</Typography>
              </Box>
              <Box flexGrow="1" textAlign="end">
                <Typography>
                  Total :{" "}
                  {tokenData
                    .filter((t) => t.amount !== 0)
                    .reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue.wax,
                      0
                    )
                    .toFixed(2)}{" "}
                  WAX
                </Typography>
                <Typography>
                  ({" "}
                  {tokenData
                    .filter((t) => t.amount !== 0)
                    .reduce(
                      (previousValue, currentValue) =>
                        previousValue + currentValue.thb,
                      0
                    )
                    .toFixed(2)}{" "}
                  THB )
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box bgcolor="#445c87" p="15px" borderRadius="15px">
              <Grid container spacing={1}>
                <Grid item xs={3} sm={2}>
                  Token
                </Grid>
                <Grid item xs={3}>
                  Amount
                </Grid>
                <Grid item xs={3}>
                  WAX
                </Grid>
                <Grid item xs={3} sm={4}>
                  THB
                </Grid>
                {tokenData
                  .filter(
                    (t) =>
                      t.amount !== 0 && (isHighValue ? t.wax > 5 : t.wax !== 0)
                  )
                  .sort((exist, next) => next.wax - exist.wax)
                  .map((token) => (
                    <TokenSection
                      key={token.token}
                      name={token.token}
                      amount={token.amount}
                      value={{
                        wax: token.wax,
                        usd: token.usd,
                        thb: token.thb,
                      }}
                    ></TokenSection>
                  ))}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <Box display="flex" gap="5px" alignItems="center">
                <Avatar
                  src={`/${galaxyCode}/${galaxyCode}.png`}
                  alt={galaxyCode}
                />
                <Typography variant="body1">Galaxy Miner</Typography>
              </Box>
              <Box flexGrow="1" textAlign="end">
                <Typography>Total Daily : - WAX</Typography>
                <Typography>( - THB )</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box bgcolor="#445c87" p="15px" borderRadius="15px">
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  Asset
                </Grid>
                <Grid item xs={4}>
                  Daily WAX
                </Grid>
                <Grid item xs={4}>
                  Daily THB
                </Grid>
                {/* <Grid item xs={4}>
                  <Image
                    src={`/${galaxyCode}/${"QmbKNCgPFkzAAPPGY1zPGRHggWRuUN31gzEn5rFhg6mPtH"}.png`}
                    alt={"GMO"}
                    width={35}
                    height={55}
                  />
                </Grid>
                <Grid item xs={4}>
                  444
                </Grid>
                <Grid item xs={4}>
                  888
                </Grid>
                <Grid item xs={4}>
                  <Image
                    src={`/${galaxyCode}/${"QmbKNCgPFkzAAPPGY1zPGRHggWRuUN31gzEn5rFhg6mPtH"}.png`}
                    alt={"GMO"}
                    width={35}
                    height={55}
                  />
                </Grid>
                <Grid item xs={4}>
                  444
                </Grid>
                <Grid item xs={4}>
                  888
                </Grid>
                <Grid item xs={4}>
                  <Image
                    src={`/${galaxyCode}/${"QmbKNCgPFkzAAPPGY1zPGRHggWRuUN31gzEn5rFhg6mPtH"}.png`}
                    alt={"GMO"}
                    width={35}
                    height={55}
                  />
                </Grid>
                <Grid item xs={4}>
                  444
                </Grid>
                <Grid item xs={4}>
                  888
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default PortCard;
