import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, Grid, Avatar, Typography } from "@mui/material";

import { AssetWithProfit } from "../../../api/game/modal";
import { InGameTokenInfo } from "../../../api/game/modal";
import GameCard from "./GameCard";

interface TotalProfitGame {
  wax: number;
  thb: number;
}

interface GameSectionProps {
  wallet: string;
  code: string;
  stakeData: string[];
  tokenData: InGameTokenInfo[];
  assetProfitData: AssetWithProfit[];
}

function GameSection({
  wallet,
  code,
  assetProfitData,
  tokenData,
  stakeData,
}: GameSectionProps) {
  const [totalProfit, setTotalProfit] = useState<TotalProfitGame>({
    wax: 0,
    thb: 0,
  });

  useEffect(() => {
    calculateTotal();
  }, [assetProfitData, stakeData]);

  const calculateTotal = () => {
    let waxTotal = 0;
    let thbTotal = 0;
    stakeData?.map((item: string) => {
      const tempItem = assetProfitData.find((i) => i.id === item + "");

      waxTotal += tempItem === undefined ? 0 : tempItem?.profit.wax;
      thbTotal += tempItem === undefined ? 0 : tempItem?.profit.thb;
    });
    setTotalProfit({ wax: waxTotal, thb: thbTotal });
  };

  return (
    <>
      <Grid item xs={12}>
        <Box display="flex" key={`totalSection-${code}`}>
          <Box display="flex" gap="5px" alignItems="center">
            <Avatar src={`/${code}/${code}.png`} alt={code} />
            <Typography variant="body1">Galaxy Miner</Typography>
          </Box>
          <Box flexGrow="1" textAlign="end">
            <Typography>
              Total Daily : {totalProfit.wax.toFixed(2)} WAX
            </Typography>
            <Typography>( {totalProfit.thb.toFixed(2)} THB )</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box bgcolor="#445c87" p="15px" borderRadius="15px">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              In Game Token
            </Grid>
            {tokenData.map((token) => (
              <Grid item xs={4} key={token.name}>
                <Box display="flex" alignItems="center" gap="5px">
                  <Image
                    src={`/tokens/${token.name}.png`}
                    alt={token.name}
                    width={25}
                    height={25}
                  />
                  <Typography variant="body2">{token.amount}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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
            {stakeData?.map((item: string, index) => (
              <GameCard
                key={item + "-" + index}
                profitData={assetProfitData}
                assetId={item}
              ></GameCard>
            ))}
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default GameSection;
