import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { GradientText } from "../../components/atomic";
import Image from "next/image";

function HeaderData() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Box
          minHeight="300px"
          p="10px"
          display="flex"
          alignContent="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          gap="15px"
          width="100%"
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            The WAX blockchain
          </Typography>
          <GradientText variant="h3" sx={{ fontWeight: "bold" }}>
            GAMING MONITOR
          </GradientText>
          <Typography variant="body1">
            We provide useful services for the WAX gaming players where you can
            view the profit , planning your strategy and guiding how to play
            each game.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box component="div" borderRadius="25px" overflow="hidden">
            <Image
              src="/wax.jpeg"
              alt="wax"
              width={150}
              height={150}
              objectFit="cover"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default HeaderData;
