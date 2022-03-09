import * as React from "react";
import { useAppSelector } from "../../../redux/hook";
import Image from "next/image";

import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  Button as MuiButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "../../atomic";

import useWaxTransaction from "../../../hook/useWaxTransaction";

export default function NavBar({
  setOpenMenu,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { login, logout } = useWaxTransaction();
  const accountData = useAppSelector((state) => state.account);

  return (
    <Box sx={{ lexGrowf: 1, display: { xs: "block", md: "none" } }}>
      <AppBar position="static" sx={{ background: "#1a2034" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box borderRadius="50%" overflow="hidden" flexGrow="1"></Box>
          <Box sx={{ textAlign: "center" }}>
            {accountData?.wallet ? (
              <Box
                display="flex"
                gap="1.5px"
                color="#ffffff"
                alignItems="center"
              >
                <Box
                  m="auto"
                  mt="5px"
                  pt="5px"
                  pb="5px"
                  pl="15px"
                  pr="15px"
                  textAlign="center"
                  borderRadius="25px"
                  bgcolor="#294d82"
                >
                  {accountData?.wallet}
                </Box>
                <Box>
                  <MuiButton
                    sx={{ color: "white" }}
                    onClick={logout}
                    size="small"
                    endIcon={<LogoutIcon />}
                  ></MuiButton>
                </Box>
              </Box>
            ) : (
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{ padding: "5px 25px 5px 25px" }}
                  onClick={login}
                >
                  LOGIN
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
