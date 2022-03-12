import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useAppDispatch } from "../../../redux/hook";
import { storePriceData } from "../../../redux/reducer/waxSlice";
import { Container, Box } from "@mui/material";
import useWax from "../../../hook/useWax";

import SideBar from "../SideBar";
import NavBar from "../NavBar";
import Footer from "../Footer";

function Layout({ children }: any) {
  const dispatch = useAppDispatch();
  const { tokens, wax, waxThb } = useWax();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    dispatch(
      storePriceData({
        waxToUsd: wax.wax.usd,
        tokens: tokens.map((item) => ({
          symbol: item.quote_token.symbol.name,
          price: item.last_price,
        })),
        waxToThb: waxThb,
      })
    );
  }, [tokens, wax, waxThb, dispatch]);

  return (
    <>
      <Head>
        <title>WAX Game Monitor</title>
        <link rel="shortcut icon" href="/tokens/WAX.png" />
      </Head>
      <NavBar setOpenMenu={setOpenMenu}></NavBar>
      <Box display="flex">
        <Box component="nav">
          <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu}></SideBar>
        </Box>
        <Box component="main" flexGrow="1">
          <Container>{children}</Container>
        </Box>
      </Box>
      <Footer></Footer>
    </>
  );
}

export default Layout;
