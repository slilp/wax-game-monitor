import React from "react";
import { Loader } from "../../components/atomic";
import useActiveUser from "../../hook/useActiveUser";
// import SpaceCraftX from "./game/SpaceCraftX";
import SeaFarmer from "./game/SeaFarmer";
// import RoboEmpire from "./game/RoboEmpire";
// import GalaxyMiner from "./game/GalaxyMiner";
import { spxCode, seaCode, roboCode, galaxyCode } from "../../api/game";

export interface CalculatorProps {
  code: string;
}

function Stat({ code }: CalculatorProps) {
  const { data, loading } = useActiveUser({ code });

  return (
    <div>
      {loading && <Loader />}

      {!loading && code === seaCode && <SeaFarmer data={data}></SeaFarmer>}

      {/* {!loading && code === spxCode && (
        <SpaceCraftX assets={data}></SpaceCraftX>
      )}
      {!loading && code === roboCode && <RoboEmpire assets={data}></RoboEmpire>}
      {!loading && code === galaxyCode && (
        <GalaxyMiner assets={data}></GalaxyMiner>
      )} */}
    </div>
  );
}

export default Stat;
