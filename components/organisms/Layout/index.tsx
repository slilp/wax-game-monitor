import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../redux/hook";
import { storePriceData } from "../../../redux/reducer/waxSlice";
import { Container, Box } from "@mui/material";
import useWax from "../../../hook/useWax";

import SideBar from "../SideBar";
import Footer from "../Footer";

function Layout({ children }: any) {
  const dispatch = useAppDispatch();
  const { tokens, wax } = useWax();

  useEffect(() => {
    dispatch(
      storePriceData({
        waxToUsd: wax.wax.usd,
        tokens: tokens.map((item) => ({
          symbol: item.quote_token.symbol.name,
          price: item.last_price,
        })),
      })
    );
  }, [tokens, wax, dispatch]);

  return (
    <>
      <Box display="flex">
        <Box component="nav">
          <SideBar></SideBar>
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
