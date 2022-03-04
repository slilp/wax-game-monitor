import React from "react";
import { Box, Typography } from "@mui/material";
interface CardInfoProps {
  id: string;
  name: string;
  img: string;
  waxCraft: number;
  usdCraft: number;
}

function CardInfo({ id, name, img, waxCraft, usdCraft }: CardInfoProps) {
  return (
    <Box display="flex">
      <img
        alt={id}
        src={img}
        style={{
          objectFit: "contain",
          width: "150px",
          height: "150px",
        }}
      ></img>
      <Box display="flex" flexDirection="column" gap="5px">
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box height="5px"></Box>
        <Typography variant="body2">Crafting Cost</Typography>
        <Typography variant="body2">
          {waxCraft} WAX ( {usdCraft} THB )
        </Typography>
        <Box height="5px"></Box>
      </Box>
    </Box>
  );
}

export default CardInfo;
