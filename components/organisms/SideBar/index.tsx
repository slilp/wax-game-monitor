import React, { useState } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Button } from "../../atomic";

const CustomFrawer = styled(Drawer)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiDrawer-paper": {
    backgroundColor: "#272e4d",
  },
}));

function SideBar() {
  return (
    <CustomFrawer anchor="left" variant="permanent">
      <Box width="225px" overflow="hidden" mt="25px" mb="25px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
        >
          <Box borderRadius="50%" overflow="hidden">
            <Image
              src="/wax.jpeg"
              alt="wax"
              width={125}
              height={125}
              objectFit="cover"
            />
          </Box>
          <Box sx={{ minWidth: "100%", textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ minWidth: "90%", color: "white" }}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <List style={{ minWidth: "225px" }}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              paddingLeft: "30px",
            }}
          >
            <ListItemIcon>ICON </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="end"
        flexGrow="1"
        mb="30px"
      >
        <Divider />
        <br></br>
        <Box display="flex" justifyContent="space-around">
          <Box>LOGO 1</Box>
          <Box>LOGO 2</Box>
          <Box>LOGO 3</Box>
        </Box>
      </Box>
    </CustomFrawer>
  );
}

export default SideBar;
