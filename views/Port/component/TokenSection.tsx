import React from "react";
import Image from "next/image";
import { Typography, Box, Grid, Button as MuiButton } from "@mui/material";

interface TokenSectionProps {
  name: string;
  amount: number;
  value: {
    wax: number;
    usd: number;
    thb: number;
  };
}

function TokenSection({ name, amount, value }: TokenSectionProps) {
  return (
    <>
      <Grid item xs={3} sm={2}>
        <Box display="flex" alignItems="center" gap="5px">
          <Image
            src={`/tokens/${name}.png`}
            alt={name}
            width={25}
            height={25}
          />
          <Typography variant="body2">{name}</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ wordWrap: "break-word" }}>
          <Typography variant="body2">{amount.toFixed(2)}</Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ wordWrap: "break-word" }}>
          <Typography variant="body2">{value.wax.toFixed(2)}</Typography>
        </Box>
      </Grid>
      <Grid item xs={3} sm={4}>
        <Box sx={{ wordWrap: "break-word" }}>
          <Typography variant="body2">{value.thb.toFixed(2)}</Typography>
        </Box>
      </Grid>
    </>
  );
}

export default TokenSection;
