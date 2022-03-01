import React from "react";
import { Loader } from "../../components/atomic";
import useContent from "../../hook/useContent";
import SpaceCraftX from "./game/SpaceCraftX";
import SeaFarmer from "./game/SeaFarmer";
import RoboEmpire from "./game/RoboEmpire";
import { spxCode, seaCode, roboCode } from "../../api/game";

export interface CalculatorProps {
  code: string;
}

function Calculator({ code }: CalculatorProps) {
  const { data, loading } = useContent({ code });

  return (
    <div>
      {loading && <Loader />}

      {!loading && code === spxCode && (
        <SpaceCraftX assets={data}></SpaceCraftX>
      )}
      {!loading && code === seaCode && <SeaFarmer assets={data}></SeaFarmer>}
      {!loading && code === roboCode && <RoboEmpire assets={data}></RoboEmpire>}
    </div>
  );
}

export default Calculator;
