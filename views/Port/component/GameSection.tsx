import React, { useState, useEffect } from "react";
import { Box, Grid, Avatar, Typography, CircularProgress } from "@mui/material";

import { AssetWithProfit } from "../../../api/game/modal";
import useGameProfit from "../../../hook/useGameProfit";
import useInGameAccount from "../../../hook/useInGameAccount";
import { galaxyCode } from "../../../api/game";
import GameCard from "./GameCard";

interface TotalProfitGame {
  wax: number;
  thb: number;
}

function GameSection({ wallet, code }: { wallet: string; code: string }) {
  // const { profitData, loading } = useGameProfit({ code });
  // const { inGameStakeData, inGameTokenData } = useInGameAccount({
  //   code,
  //   wallet,
  // });
  const [totalProfit, setTotalProfit] = useState<TotalProfitGame>({
    wax: 0,
    thb: 0,
  });

  // useEffect(() => {
  //   calculateTotal();
  // }, [profitData, inGameStakeData]);

  // const calculateTotal = () => {
  //   let waxTotal = 0;
  //   let thbTotal = 0;
  //   inGameStakeData?.map((item: string) => {
  //     const tempItem = profitData.find((i) => i.id === item + "");

  //     waxTotal += tempItem === undefined ? 0 : tempItem?.profit.wax;
  //     thbTotal += tempItem === undefined ? 0 : tempItem?.profit.thb;
  //   });
  //   setTotalProfit({ wax: waxTotal, thb: thbTotal });
  // };

  return (
    <>
      <Grid item xs={12}>
        {/* <Box display="flex" key={`totalSection-${galaxyCode}`}>
          <Box display="flex" gap="5px" alignItems="center">
            <Avatar src={`/${galaxyCode}/${galaxyCode}.png`} alt={galaxyCode} />
            <Typography variant="body1">Galaxy Miner</Typography>
          </Box>
          <Box flexGrow="1" textAlign="end">
            <Typography>
              Total Daily : {totalProfit.wax.toFixed(2)} WAX
            </Typography>
            <Typography>( {totalProfit.thb.toFixed(2)} THB )</Typography>
          </Box>
        </Box> */}
        {wallet}
        {code}
      </Grid>
      {/* {!loading && (
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
              {inGameStakeData?.map((item: string, index) => (
                <GameCard
                  key={item + "-" + index}
                  profitData={profitData}
                  assetId={item}
                ></GameCard>
              ))}
            </Grid>
          </Box>
        </Grid>
      )} */}
    </>
  );
}

export default GameSection;
