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

function Home() {
  return (
    <div style={{ marginTop: "25px" }}>
      <HeaderData />
      <br></br>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Game List We Support
      </Typography>
      <Grid container spacing={6} sx={{ marginTop: "10px" }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid key={item} item xs={12} sm={4}>
            <Box display="flex" flexDirection="column">
              <Box
                component="div"
                sx={{ borderRadius: "25px 25px 0 0" }}
                overflow="hidden"
                height="200px"
              >
                <Image
                  src="/farmerworld.jpeg"
                  alt="wax"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
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
                    Explore deep space with our game. The Metaverse is waiting
                    for you. Choose a species, pick the planet and suitable land
                    and start mining. The Big varieties for items and unique
                    amulets.
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
    </div>
  );
}

export default Home;
