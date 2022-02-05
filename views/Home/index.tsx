import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import HeaderData from "./HeaderData";
import Image from "next/image";
import { GradientText } from "../../components/atomic";
import { BsGithub, BsFacebook, BsGlobe } from "react-icons/bs";

function Home() {
  return (
    <div style={{ marginTop: "25px" }}>
      <HeaderData />
      <br></br>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Game List We Support
      </Typography>
      <Grid container spacing={5} sx={{ marginTop: "10px" }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Grid key={item} item xs={12} sm={6} md={4}>
            <Box display="flex">
              <Box
                component="div"
                sx={{ borderRadius: "25px 0 0 25px" }}
                overflow="hidden"
                flex="1"
              >
                <Image
                  src="/spacecraftx.jpeg"
                  alt="wax"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </Box>
              <Box
                flex="1"
                display="flex"
                flexDirection="column"
                p="5px"
                gap="10px"
                justifyContent="center"
                alignItems="center"
                sx={{
                  border: "1px solid grey",
                  borderLeft: "none",
                  borderRadius: "0 25px 25px 0",
                }}
              >
                <Box textAlign="center">
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    Farmer world
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-around" width="100%">
                  <Typography variant="h5">
                    <BsGithub></BsGithub>
                  </Typography>
                  <Typography variant="h5">
                    <BsFacebook></BsFacebook>
                  </Typography>
                  <Typography variant="h5">
                    <BsGlobe></BsGlobe>
                  </Typography>
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
