import React from "react";
import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress></CircularProgress>
    </Box>
  );
}

export default Loader;
