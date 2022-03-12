import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button as MuiButton,
  styled as MuiStyled,
  Switch,
} from "@mui/material";

import PortCard from "./component/PortCard";

const AntSwitch = MuiStyled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Button = styled(MuiButton)`
  border-radius: 0 15px 15px 0;
  color: "white";
  padding: 8px 14px;
`;

function Port() {
  // const { profitData, loading } = useGameProfit({ code: galaxyCode });
  const [portWallet, setPortWallet] = useState<string[]>([]);
  const [walletValue, setWalletValue] = useState<string>("");
  const [isHighValue, setIsHighValue] = useState<boolean>(true);

  const addNewWallet = () => {
    const tempData = portWallet.filter((i) => i !== walletValue);
    setPortWallet([...tempData, walletValue.trim()]);
    setWalletValue("");
  };

  const deleteWallet = (wallet: string) => {
    const tempData = portWallet.filter((i) => i !== wallet);
    setPortWallet([...tempData]);
  };

  return (
    <Box mt="25px">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Tracking your GAME
      </Typography>
      <br></br>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <TextField
          size="small"
          color="primary"
          focused
          value={walletValue}
          placeholder="Your wallet"
          onChange={(e) => setWalletValue(e.target.value)}
          inputProps={{ maxLength: 20 }}
          sx={{
            color: "text.primary",
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px 0 0 15px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ minWidth: "5%" }}
          onClick={addNewWallet}
        >
          ADD !
        </Button>
      </Box>
      {portWallet.length !== 0 && (
        <Box
          display="flex"
          mt="15px"
          gap="10px"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography variant="body2">Hide small balances</Typography>
          <AntSwitch
            onChange={() => setIsHighValue((prev) => !prev)}
            checked={isHighValue}
          />
        </Box>
      )}

      <Box height="25px" />
      {portWallet.map((item) => (
        <>
          <PortCard
            key={item}
            wallet={item}
            deleteWallet={deleteWallet}
            isHighValue={isHighValue}
          />
          <Box height="25px" />
        </>
      ))}
    </Box>
  );
}

export default Port;
