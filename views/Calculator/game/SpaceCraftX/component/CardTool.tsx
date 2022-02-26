import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { SxcTokens } from "../const";

interface CardToolProps {
  id: string;
  name: string;
  img: string;
  scidCraft: string;
  scicCraft: string;
  sciwCraft?: string;
  waxCraft: number;
  usdCraft: number;
  roi: number;
  dailyWax: number;
  dailyUsd: number;
}

function CardTool({
  id,
  name,
  img,
  scicCraft,
  scidCraft,
  waxCraft,
  usdCraft,
  roi,
  dailyWax,
  dailyUsd,
  sciwCraft,
}: CardToolProps) {
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
        <Box bgcolor="green" borderRadius="25px" textAlign="center" p="5px">
          <Typography variant="body2">ROI : {roi} Day</Typography>
        </Box>
        <Box bgcolor="green" borderRadius="25px" textAlign="center" p="5px">
          <Typography variant="body2">Daily : {dailyWax} WAX</Typography>
          <Typography variant="body2">({dailyUsd.toFixed(2)} BATH)</Typography>
        </Box>
        <Box height="5px"></Box>
        <Typography variant="body2">Crafting Cost</Typography>
        <Box display="flex" flexDirection="row" gap="5px">
          <Image
            src={`/spacecraftxc/${SxcTokens.SCIC}.png`}
            alt="SCIC"
            width={15}
            height={15}
          />
          <Typography variant="body2">
            {" "}
            {scicCraft ? Number(scicCraft).toFixed(0) : 0} SCID
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap="5px">
          <Image
            src={`/spacecraftxc/${SxcTokens.SCID}.png`}
            alt="SCID"
            width={15}
            height={15}
          />
          <Typography variant="body2">
            {scidCraft ? Number(scidCraft).toFixed(0) : 0} SCID
          </Typography>
        </Box>
        {sciwCraft && (
          <Box display="flex" flexDirection="row" gap="5px">
            <Image
              src={`/spacecraftxc/${SxcTokens.SCIW}.png`}
              alt="SCIW"
              width={15}
              height={15}
            />
            <Typography variant="body2">
              {" "}
              {sciwCraft ? Number(sciwCraft).toFixed(0) : 0} SCIW
            </Typography>
          </Box>
        )}
        <Typography variant="body2">
          {waxCraft.toFixed(2)} WAX ( {usdCraft.toFixed(2)} THB )
        </Typography>
        <Box height="5px"></Box>
      </Box>
    </Box>
  );
}

export default CardTool;
