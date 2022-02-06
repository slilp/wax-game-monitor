import React from "react";
import { Typography, Box } from "@mui/material";
import HeaderData from "./HeaderData";
import GameList from "./GameList";

function Home() {
  return (
    <Box m="25px 0 25px 0">
      <HeaderData />
      <br></br>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Game List We Support
      </Typography>
      <GameList />
    </Box>
  );
}

export default Home;
