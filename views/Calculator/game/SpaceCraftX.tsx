import React from "react";
import { Box, Grid, CardMedia } from "@mui/material";
import { AssetInfo } from "../../../api/game/modal";

function SpaceCraftX({ assets }: { assets: AssetInfo[] }) {
  return (
    <div>
      <Box height="25px"></Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
            <Grid container>
              <Grid item xs={12} sm={4}>
                <CardMedia
                  component="img"
                  height="30%"
                  width="150px"
                  alt={assets[0].id}
                  src={assets[0].image}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                fdfsd
              </Grid>
              <Grid item xs={12} sm={4}>
                fsdf
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
            <Grid container>
              <Grid item xs={12} sm={4}>
                fdfsfds
              </Grid>
              <Grid item xs={12} sm={4}>
                fdfsd
              </Grid>
              <Grid item xs={12} sm={4}>
                fsdf
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
            <Grid container>
              <Grid item xs={12} sm={4}>
                fdfsfds
              </Grid>
              <Grid item xs={12} sm={4}>
                fdfsd
              </Grid>
              <Grid item xs={12} sm={4}>
                fsdf
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box bgcolor="rgba(39, 55, 85, 0.75)" p="5px" borderRadius="15px">
            <Grid container>
              <Grid item xs={12} sm={4}>
                fdfsfds
              </Grid>
              <Grid item xs={12} sm={4}>
                fdfsd
              </Grid>
              <Grid item xs={12} sm={4}>
                fsdf
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {JSON.stringify(assets)}
      </Grid>
    </div>
  );
}

export default SpaceCraftX;
