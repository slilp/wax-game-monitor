import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import {
  Typography,
  Box,
  Grid,
  TextField,
  Button as MuiButton,
  Avatar,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CancelIcon from "@mui/icons-material/Cancel";

import useGameProfit from "../../hook/useGameProfit";
import { galaxyCode } from "../../api/game";

const Button = styled(MuiButton)`
  border-radius: 0 15px 15px 0;
  color: "white";
  padding: 8px 14px;
`;

function Port() {
  // const { profitData, loading } = useGameProfit({ code: galaxyCode });
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
          // onClick={handleCalculate}
        >
          ADD !
        </Button>
      </Box>
      <Box height="25px" />
      {/* {!loading && JSON.stringify(profitData)} */}
      <Box bgcolor="rgba(39, 55, 85, 0.75)" p="15px" borderRadius="15px">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              bgcolor="#EA923E"
              borderRadius="25px"
              textAlign="center"
              p="5px"
              width="250px"
            >
              <Typography variant="body1">giwxm.wam</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="end"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  opacity: "0.8",
                },
              }}
            >
              <CancelIcon></CancelIcon>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex">
              <Box display="flex" gap="5px">
                <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                <Typography variant="body1">Wallet</Typography>
              </Box>
              <Box flexGrow="1" textAlign="end">
                <Typography>Total : 15000 WAX</Typography>
                <Typography>( 500000 THB )</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box bgcolor="#445c87" p="15px" borderRadius="15px">
              <Grid container>
                <Grid item xs={4}>
                  Token
                </Grid>
                <Grid item xs={4}>
                  WAX
                </Grid>
                <Grid item xs={4}>
                  THB
                </Grid>
                <Grid item xs={4}>
                  <Box display="flex" alignItems="center" gap="5px">
                    <Image
                      src={`/${galaxyCode}/${"GMA"}.png`}
                      alt={"GMA"}
                      width={25}
                      height={25}
                    />
                    <Typography variant="body2">GMA</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ wordWrap: "break-word" }}>
                    <Typography variant="body2">1234</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ wordWrap: "break-word" }}>
                    {" "}
                    <Typography variant="body2">1234</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box display="flex" alignItems="center" gap="5px">
                    <Image
                      src={`/${galaxyCode}/${"GMO"}.png`}
                      alt={"GMO"}
                      width={25}
                      height={25}
                    />
                    <Typography variant="body2">GMO</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">1234</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">1234</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" gap="5px" alignItems="center">
              <Avatar
                src={`/${galaxyCode}/${galaxyCode}.png`}
                alt={galaxyCode}
              />
              <Typography variant="body1">Galaxy Miner</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box bgcolor="#445c87" p="15px" borderRadius="15px">
              <Grid container>
                <Grid item xs={4}>
                  Token
                </Grid>
                <Grid item xs={4}>
                  Value
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Port;
