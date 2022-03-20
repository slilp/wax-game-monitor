import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import { AssetWithProfit } from "../../../api/game/modal";

interface GameCardProps {
  assetId: string;
  profitData: AssetWithProfit[];
}

interface TotalProfitGame {
  wax: number;
  thb: number;
}

function GameCard({ assetId, profitData }: GameCardProps) {
  const [stakedItem, setStakedItem] = useState<any>({
    id: "",
    minted: 0,
    profit: {
      wax: 0,
      thb: 0,
    },
  });
  useEffect(() => {
    const tempItem = profitData.find((i) => i.id === assetId + "");
    if (tempItem) setStakedItem(tempItem);
  }, []);

  return (
    <>
      <Grid item xs={4}>
        <img
          src={`${stakedItem?.immutableData?.img}`}
          alt={stakedItem?.id}
          style={{
            objectFit: "contain",
            width: "35px",
            height: "55px",
          }}
        />
      </Grid>
      <Grid item xs={4}>
        {stakedItem?.profit?.wax.toFixed(2)}
      </Grid>
      <Grid item xs={4}>
        {stakedItem?.profit?.thb.toFixed(2)}
      </Grid>
    </>
  );
}

export default GameCard;
