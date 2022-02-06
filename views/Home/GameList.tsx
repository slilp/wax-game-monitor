import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/atomic";
import games, { Game } from "../../config/games";

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
      {games.map((item: Game) => (
        <Grid key={item.id} item xs={12} sm={4}>
          <Box display="flex" flexDirection="column">
            <Box
              component="div"
              borderRadius="25px 25px 0 0"
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
                      src={`/${item.name}/${item.logo}`}
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
                      <Typography variant="h6">{item.label}</Typography>
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
                <Typography variant="body2">{item.desc}</Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                justifyContent="end"
              >
                <Divide />
                <Link href={item.game} passHref={true}>
                  <Button
                    variant="contained"
                    sx={{ minWidth: "90%", color: "white" }}
                  >
                    SEE MORE
                  </Button>
                </Link>

                {/* <Grid container sx={{ textAlign: "center" }}>
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
                </Grid> */}
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default GameList;
