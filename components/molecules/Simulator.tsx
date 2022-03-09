import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Switch,
  styled,
} from "@mui/material";
import { Button } from "../atomic";
import { useAppSelector } from "../../redux/hook";
import Image from "next/image";

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

interface SimulationState {
  id: string;
  amount: number;
}

function Simulator() {
  const [simuData, setSimuData] = useState<SimulationState[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const assetData = useAppSelector((state) => state.asset);
  const [dailyWax, setDailyWax] = useState<number>(0);
  const [dailyCurrency, setDailyCurrency] = useState<number>(0);

  useEffect(() => {
    setDailyCurrency(0);
    setDailyWax(0);
  }, [open]);

  const handleChange = (event: any) => {
    if (event.target.value === ".") return;
    const checkExist = simuData.find((item) => item.id === event.target.name);
    if (checkExist) {
      const tempState = simuData.filter(
        (item) => item.id !== event.target.name
      );
      setSimuData([
        ...tempState,
        {
          id: event.target.name,
          amount:
            event.target.value < 0
              ? 0
              : event.target.value === ""
              ? event.target.value
              : parseInt(event.target.value),
        },
      ]);
    } else {
      setSimuData((prev) => [
        ...prev,
        {
          id: event.target.name,
          amount:
            event.target.value < 0
              ? 0
              : event.target.value === ""
              ? event.target.value
              : parseInt(event.target.value),
        },
      ]);
    }
  };

  const calculateProfit = () => {
    let tempDailyWax = 0;
    let tempDailyCurrency = 0;
    simuData.map((item) => {
      const match = assetData.find((i) => i.id === item.id);
      if (match) {
        tempDailyWax += item.amount * match.profit.wax;
        tempDailyCurrency += item.amount * match.profit.thb;
      }
    });
    setDailyWax(tempDailyWax);
    setDailyCurrency(tempDailyCurrency);
  };

  return (
    <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
      <Box display="flex" alignItems="center" gap="15px">
        <Typography variant="body1">Port Simulation</Typography>
        <AntSwitch onChange={() => setOpen((prev) => !prev)} checked={open} />
        {open && (
          <Button
            variant="contained"
            sx={{ minWidth: "15%" }}
            onClick={calculateProfit}
          >
            Calculate
          </Button>
        )}
      </Box>

      <Box height="15px"></Box>
      {open && (
        <Grid container spacing={3}>
          {assetData.map((item) => (
            <Grid item xs={12} sm={3}>
              <Box display="flex" gap="15px">
                <Box>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={75}
                  />
                </Box>
                <Box>
                  <Typography variant="body2">Amount</Typography>
                  <TextField
                    color="primary"
                    focused
                    size="small"
                    sx={{ color: "text.primary" }}
                    name={item.id}
                    value={
                      simuData.find((i) => i.id === item.id)
                        ? simuData.find((i) => i.id === item.id)?.amount
                        : 0
                    }
                    onChange={handleChange}
                    InputProps={{ inputProps: { min: 0 } }}
                    type="number"
                    placeholder="0"
                  />
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box textAlign="center" width="50%" m="auto">
              <Box
                bgcolor={dailyWax < 0 ? "red" : "green"}
                borderRadius="25px"
                textAlign="center"
                p="5px"
              >
                <Typography variant="body2">
                  Total Daily Profit {dailyWax.toFixed(0)} WAX ({" "}
                  {dailyCurrency.toFixed(0)} THB )
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Simulator;
