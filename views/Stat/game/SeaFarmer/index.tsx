import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { seaCode } from "../../../../api/game";
import { AssetInfo } from "../../../../api/game/modal";
import { HeaderPrice } from "../../../../components/molecules";
import ToolSection from "./component/ToolSection";
import { SeaTokens } from "./const";

function SeaFarmer({ data }: { data: any[] }) {
  return <div>{JSON.stringify(data)}</div>;
}

export default SeaFarmer;
