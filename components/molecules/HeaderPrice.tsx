import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hook";

interface HeaderPriceProps {
  game: string;
  tokens: string[];
}

function HeaderPrice({ game, tokens }: HeaderPriceProps) {
  const waxData = useAppSelector((state) => state.wax);
  const gameToken = waxData.tokens.filter((token) =>
    tokens.includes(token.symbol)
  );

  const convertToThb = (token: string) => {
    const tokenPrice = gameToken?.find((i) => i.symbol === token)?.price;
    if (tokenPrice) {
      return tokenPrice * waxData.waxToThb;
    }
    return 0;
  };

  return (
    <Grid container spacing={3}>
      {tokens?.map((token: string) => (
        <Grid key={token} item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="7px"
          >
            <Image
              src={`/${game}/${token}.png`}
              alt="SCIC"
              width={25}
              height={25}
            />
            <Typography variant="h6">{token}</Typography>
            <Typography variant="body1">
              ( {gameToken.find((i) => i.symbol === token)?.price?.toFixed(4)}{" "}
              WAX = {convertToThb(token).toFixed(4)} THB )
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default HeaderPrice;
