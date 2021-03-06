import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { SxcTokens } from "../const";

interface CardInfoProps {
  id: string;
  name: string;
  img: string;
  scidCraft: string;
  scicCraft: string;
  sciwCraft?: string;
  waxCraft: number;
  usdCraft: number;
  atomicWax: number;
  atomicThb: number;
}

function CardInfo({
  id,
  name,
  img,
  scicCraft,
  scidCraft,
  waxCraft,
  usdCraft,
  sciwCraft,
  atomicWax,
  atomicThb,
}: CardInfoProps) {
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
        <Box display="flex" flexDirection="row" gap="5px">
          <Image
            src={`/spacecraftxc/${SxcTokens.SCIC}.png`}
            alt="SCIC"
            width={15}
            height={15}
          />
          <Typography variant="body2">
            {scicCraft ? Number(scicCraft).toFixed(0) : 0} SCIC
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
        <Typography variant="body2">{waxCraft.toFixed(0)} WAX</Typography>
        <Typography variant="body2">{usdCraft.toFixed(0)} THB</Typography>
        <Box display="flex" flexDirection="row" gap="5px" mt="5px">
          <Image src={`/atomic.svg`} alt="atomic_logo" width={15} height={15} />
          <Typography variant="body2">AtomicHub</Typography>
        </Box>
        {atomicWax == 0 ? (
          <Typography variant="body2">No Selling Found</Typography>
        ) : (
          <>
            <Typography variant="body2">
              {atomicWax.toFixed(0) + " WAX"}
            </Typography>
            <Typography variant="body2">
              {atomicThb.toFixed(0) + " THB"}
            </Typography>
          </>
        )}
        <Box height="5px"></Box>
      </Box>
    </Box>
  );
}

export default CardInfo;
