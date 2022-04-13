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

function CustomPrice({ game, tokens, setSelectValues }: CustomPriceProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [customTokens, setCustomTokens] = useState<CustomTokenPrice[]>([]);

  useEffect(() => {
    const tempState: CustomTokenPrice[] = tokens.map((token) => ({
      tokenName: token,
      value: 0,
    }));
    setCustomTokens(tempState);
  }, []);

  useEffect(() => {
    if (!open) setSelectValues([]);
  }, [open]);

  const handleChange = (event: any) => {
    const tempState: CustomTokenPrice[] = customTokens.map((i) => {
      if (i.tokenName !== event.target.name) return i;
      return {
        tokenName: i.tokenName,
        value: event.target.value < 0 ? 0 : event.target.value,
      };
    });
    setCustomTokens(tempState);
  };

  const handleCalculate = () => {
    setSelectValues(customTokens);
  };

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
              onClick={handleCalculate}
            >
              Calculate
            </Button>
          )}
        </Box>
      </Grid>
      {open && (
        <>
          {customTokens?.map((token: CustomTokenPrice) => (
            <Grid key={token?.tokenName} item xs={12} sm={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="7px"
              >
                <Box>
                  <Typography>{token?.tokenName}</Typography>
                  <Image
                    src={`/${game}/${token?.tokenName}.png`}
                    alt={token?.tokenName}
                    width={25}
                    height={25}
                  />
                </Box>

                <TextField
                  color="primary"
                  focused
                  name={token?.tokenName}
                  sx={{ color: "text.primary" }}
                  value={token?.value}
                  InputProps={{ inputProps: { min: 0 } }}
                  onChange={handleChange}
                  type="number"
                  placeholder="0"
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
