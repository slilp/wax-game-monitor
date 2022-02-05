import * as React from "react";
import { Container, Box } from "@mui/material";

import SideBar from "../SideBar";

function Layout({ children }: any) {
  return (
    <Box display="flex">
      <Box component="nav">
        <SideBar></SideBar>
      </Box>
      <Box component="main" flexGrow="1">
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Layout;
