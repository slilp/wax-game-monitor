import React from "react";
import { useAppSelector } from "../../../redux/hook";
import { useRouter } from "next/router";
import Link from "next/link";

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
  Typography,
  Button as MuiButton,
} from "@mui/material";
import { Button } from "../../atomic";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";

import useWaxTransaction from "../../../hook/useWaxTransaction";
interface ListItem {
  key: string;
  label: string;
  icon: any;
  url: string;
  match: string[];
}

const lists: ListItem[] = [
  {
    key: "",
    label: "Home",
    icon: <HomeIcon />,
    url: "/",
    match: [""],
  },
  {
    key: "calculator",
    label: "Calculator",
    icon: <AttachMoneyIcon />,
    url: "/calculator",
    match: ["calculator", "how-to"],
  },
  {
    key: "port",
    label: "Port",
    icon: <AccountBalanceWalletIcon />,
    url: "/me",
    match: ["me"],
  },
];

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiDrawer-paper": {
    backgroundColor: "#1a2034",
  },
}));

function SideBar() {
  const { login, logout } = useWaxTransaction();
  const router = useRouter();
  const path = router.pathname.split("/")[0] + router.pathname.split("/")[1];
  const accountData = useAppSelector((state) => state.account);

  return (
    <CustomDrawer anchor="left" variant="permanent">
      <Box width="275px" overflow="hidden" mt="50px" mb="25px">
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
              width={110}
              height={110}
              objectFit="cover"
            />
          </Box>
          {accountData?.wallet ? (
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              gap="10px"
              color="#ffffff"
            >
              <Typography sx={{ textAlign: "center" }}>Welcome</Typography>
              <Box sx={{ minWidth: "100%" }}>
                <Box
                  m="auto"
                  pt="5px"
                  pb="5px"
                  width="90%"
                  textAlign="center"
                  borderRadius="25px"
                  bgcolor="#294d82"
                >
                  {accountData?.wallet}
                </Box>
              </Box>
              <Box sx={{ minWidth: "100%", textAlign: "center" }}>
                <MuiButton
                  sx={{ minWidth: "90%", color: "white" }}
                  onClick={logout}
                  size="small"
                  endIcon={<LogoutIcon />}
                >
                  Logout
                </MuiButton>
              </Box>
            </Box>
          ) : (
            <Box sx={{ minWidth: "100%", textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ minWidth: "90%", color: "white" }}
                onClick={login}
              >
                LOGIN
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      {/* <Divider /> */}
      <Box
        bgcolor="rgba(39, 55, 85, 0.75)"
        m="15px"
        borderRadius="15px"
        p="5px"
        sx={{ backdropFilter: "blur(16px) saturate(180%)" }}
      >
        <List>
          {lists.map((item: ListItem) => (
            <Link key={item.url} href={item.url} passHref={true}>
              <ListItem
                button
                sx={{
                  paddingLeft: "30px",
                  margin: "20px 0px 20px 0px",
                  color: "#ffffff",
                  borderRadius: "15px",
                  backgroundColor: () => {
                    return item.match.includes(path) ? "#14192e" : "";
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
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
    </CustomDrawer>
  );
}

export default SideBar;
