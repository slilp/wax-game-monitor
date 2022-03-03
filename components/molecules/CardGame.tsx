import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

interface CraftTokens {
  name: string;
  amount: number;
}
interface CardGameProps {
  id: string;
  name: string;
  img: string;
  craftWax: number;
  craftCurrency: number;
  atomicWax: number;
  atomicCurrency: number;
  dailyWax: number;
  dailyCurrency: number;
  currency: string;
  craftTokens: CraftTokens[];
  game: string;
}

function CardGame({
  id,
  name,
  img,
  craftWax = 0,
  craftCurrency = 0,
  dailyWax = 0,
  dailyCurrency = 0,
  atomicCurrency = 0,
  atomicWax = 0,
  craftTokens = [],
  game,
  currency,
}: CardGameProps) {
  return (
    <Box display="flex">
      <img
        alt={id}
        src={img}
        crossOrigin="anonymous"
        style={{
          objectFit: "contain",
          width: "150px",
          height: "150px",
        }}
      ></img>
      <Box display="flex" flexDirection="column" gap="5px" width="50%">
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box height="5px"></Box>
        <Box
          bgcolor={dailyWax < 0 ? "red" : "green"}
          borderRadius="25px"
          textAlign="center"
          p="5px"
        >
          <Typography variant="body2">
            Daily : {dailyWax.toFixed(0)} WAX
          </Typography>
          <Typography variant="body2">
            {dailyCurrency.toFixed(0)} {currency}
          </Typography>
        </Box>
        <Box height="5px"></Box>
        {craftTokens.length !== 0 && (
          <>
            <Typography variant="body2">Crafting Cost</Typography>
            {craftTokens.map(
              (token: CraftTokens) =>
                token.amount > 0 && (
                  <Box
                    key={token?.name}
                    display="flex"
                    flexDirection="row"
                    gap="5px"
                  >
                    <Image
                      src={`/${game}/${token.name}.png`}
                      alt={token.name}
                      width={15}
                      height={15}
                    />
                    <Typography variant="body2">
                      {token.amount.toFixed(0) + " " + token.name}
                    </Typography>
                  </Box>
                )
            )}
            <Typography variant="body2">{craftWax.toFixed(0)} WAX</Typography>
            <Typography variant="body2">
              {craftCurrency.toFixed(0)} {currency}
            </Typography>
          </>
        )}
        <Box display="flex" flexDirection="row" gap="5px" mt="5px">
          <Image src={`/atomic.svg`} alt="atomic_logo" width={15} height={15} />
          <Typography variant="body2">AtomicHub</Typography>
        </Box>
        {atomicWax == 0 ? (
          <Typography variant="body2">No Selling Found</Typography>
        ) : (
          <>
            <Typography variant="body2">
              {atomicWax.toFixed(0) + " WAX"}
            </Typography>
            <Typography variant="body2">
              {atomicCurrency.toFixed(0) + ` ${currency}`}
            </Typography>
          </>
        )}
        <Box height="5px"></Box>
      </Box>
    </Box>
  );
}

export default CardGame;
