import React from "react";
import Link from "next/link";
import { Typography, Box, Grid } from "@mui/material";
import { GradientText, Button } from "../../components/atomic";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AssignmentIcon from "@mui/icons-material/Assignment";
import games, { Game } from "../../config/games";

function MainCalculator() {
  return (
    <Box display="flex" flexDirection="column" m="25px 0 25px 0" gap="15px">
      <Box>
        <GradientText>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Choose your game
          </Typography>
        </GradientText>
      </Box>
      <Grid container spacing={2}>
        {games.map((item: Game) => (
          <Grid key={item.id} item xs={12} sm={6}>
            <Box bgcolor="rgba(39, 55, 85, 0.75)" borderRadius="25px" p="15px">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <Box width="125px" overflow="hidden" borderRadius="25px">
                    <Image
                      src={`/${item.name}/${item.logo}`}
                      alt="wax"
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <Box display="flex" height="100%" alignItems="center">
                    <Typography variant="h6">{item.label}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box display="flex" gap="10px" flexWrap="wrap">
                    {/* <Link href={item.how} passHref={true}> */}
                    <Button
                      variant="contained"
                      sx={{ color: "white" }}
                      startIcon={<AssignmentIcon />}
                      onClick={() => alert("Not available now")}
                    >
                      How to play
                    </Button>
                    {/* </Link> */}
                    <Link href={item.calculator} passHref={true}>
                      <Button
                        variant="contained"
                        sx={{ color: "white" }}
                        startIcon={<AttachMoneyIcon />}
                      >
                        Calculator
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      sx={{ color: "white" }}
                      startIcon={<EqualizerIcon />}
                      onClick={() => alert("Not available now")}
                    >
                      Statistic
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainCalculator;
