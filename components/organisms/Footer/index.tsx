import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { BsGithub, BsFacebook, BsGlobe } from "react-icons/bs";
import styled from "@emotion/styled";

const Icon = styled.button`
  color: red;
  font-size: 22px;
  border: transparent;
`;

function FOOTER() {
  return (
    <Box
      display="flex"
      p="10px"
      bgcolor="#EBECF0"
      minHeight="50px"
      marginTop="15px"
    >
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            Copyright © Bloks.io 2022. All rights reserved.
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Box
              display="flex"
              justifyContent="space-around"
              alignContent="center"
            >
              <Icon>
                <BsGithub></BsGithub>
              </Icon>
              <Icon>
                <BsFacebook></BsFacebook>
              </Icon>
              <Icon>
                <BsGlobe></BsGlobe>
              </Icon>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FOOTER;
