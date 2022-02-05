import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import HeaderData from "./HeaderData";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Divide = (props: any) => (
  <Box
    height="1.5px"
    borderRadius="25px"
    width="85%"
    bgcolor="#ffffff"
    m="auto"
    mt="15px"
    mb="15px"
    {...props}
  />
);

function GameList() {
  return (
    <Grid container spacing={6} mt="10px">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid key={item} item xs={12} sm={4}>
          <Box display="flex" flexDirection="column">
            <Box
              component="div"
              borderRadius="25px 25px 0 0"
              // overflow="hidden"
              height="175px"
              bgcolor="rgba(39, 55, 85, 0.75)"
              p="10px"
            >
              <Grid container wrap="nowrap">
                <Grid item xs={6}>
                  <Box
                    width="150px"
                    sx={{ borderRadius: "50%" }}
                    overflow="hidden"
                  >
                    <Image
                      src="/farmerworld.jpeg"
                      alt="wax"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} zeroMinWidth>
                  <Box
                    display="flex"
                    alignItems="center"
                    height="100%"
                    justifyContent="center"
                  >
                    <div>
                      <Typography variant="h6">Farmer world</Typography>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box
              bgcolor="rgba(39, 55, 85, 0.75)"
              borderRadius="0 0 25px 25px"
              minHeight="225px"
              p="15px"
              display="flex"
              flexDirection="column"
            >
              <Box
                display="flex"
                minHeight="100px"
                justifyContent="space-around"
                width="100%"
              >
                <Typography variant="body2">
                  Explore deep space with our game. The Metaverse is waiting for
                  you. Choose a species, pick the planet and suitable land and
                  start mining. The Big varieties for items and unique amulets.
                </Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                justifyContent="end"
              >
                <Divide />
                <Grid container sx={{ textAlign: "center" }}>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      <AssignmentIcon />
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      <AttachMoneyIcon />
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5">
                      <EqualizerIcon />
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default GameList;
