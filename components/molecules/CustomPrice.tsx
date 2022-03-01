import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Switch,
  styled,
  TextField,
} from "@mui/material";
import { Button } from "../atomic";

interface CustomTokenPrice {
  tokenName: string;
  value: number;
}

interface CustomPriceProps {
  game: string;
  tokens: string[];
  setSelectValues: React.Dispatch<React.SetStateAction<CustomTokenPrice[]>>;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
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

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

function CustomPrice({ game, tokens, setSelectValues }: CustomPriceProps) {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (!open) setSelectValues([]);
  }, [open]);
  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <Box display="flex" alignItems="center" gap="15px">
          <Typography variant="body1">Custom token prices</Typography>
          <AntSwitch onChange={() => setOpen((prev) => !prev)} checked={open} />
          {open && (
            <Button
              variant="contained"
              sx={{ minWidth: "15%" }}
              onClick={() =>
                setSelectValues([
                  {
                    tokenName: tokens[0],
                    value: 5,
                  },
                  {
                    tokenName: tokens[1],
                    value: 10,
                  },
                  {
                    tokenName: tokens[2],
                    value: 30,
                  },
                ])
              }
            >
              Calculate
            </Button>
          )}
        </Box>
      </Grid>
      {open && (
        <>
          {tokens?.map((token: string) => (
            <Grid key={token} item xs={12} sm={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="7px"
              >
                <Image
                  src={`/${game}/${token}.png`}
                  alt={token}
                  width={25}
                  height={25}
                />
                <TextField
                  color="primary"
                  focused
                  sx={{ color: "text.primary" }}
                />
                <Typography variant="body1">WAX</Typography>
              </Box>
            </Grid>
          ))}
        </>
      )}
    </Grid>
  );
}

export default CustomPrice;
