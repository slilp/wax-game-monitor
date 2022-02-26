import React from "react";
import { Loader } from "../../components/atomic";
import useContent from "../../hook/useContent";
import SpaceCraftX from "./game/SpaceCraftX";
import SeaFarmer from "./game/SeaFarmer";
import { spxCode, seaCode } from "../../api/game";

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
    </div>
  );
}

export default Calculator;
