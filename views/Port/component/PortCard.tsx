import React from "react";
import { Typography, Box, Grid, CircularProgress } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CancelIcon from "@mui/icons-material/Cancel";

import TokenSection from "./TokenSection";
import GameCardSection from "./GameSection";
import { AssetWithProfit } from "../../../api/game/modal";

import useBalance from "../../../hook/useBalance";
import useAllInGameAccount from "../../../hook/useAllIngameAccount";

interface PortCardProps {
  wallet: string;
  deleteWallet: any;
  isHighValue: boolean;
  assetProfitData: AssetWithProfit[];
}

function PortCard({
  wallet,
  deleteWallet,
  isHighValue,
  assetProfitData,
}: PortCardProps) {
  const { data: tokenData, loading } = useBalance({ wallet });
  const { data: inGameData } = useAllInGameAccount({
    wallet,
  });

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

          {Object.keys(inGameData).map((key, index) => (
            <GameCardSection
              key={key}
              code={key}
              wallet={wallet}
              stakeData={inGameData[key].inGameStakeData}
              tokenData={inGameData[key].inGameTokenData}
              assetProfitData={assetProfitData}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default PortCard;
