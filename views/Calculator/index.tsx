import React from "react";
import useContent from "../../hook/useContent";
import SpaceCraftX from "./game/SpaceCraftX";
import { spxCode } from "../../api/game";

export interface CalculatorProps {
  code: string;
}

function Calculator({ code }: CalculatorProps) {
  const { data, loading } = useContent({ code });

  return (
    <div>
      {loading && <div>LOADING...</div>}

      {!loading && code === spxCode && (
        <SpaceCraftX assets={data}></SpaceCraftX>
      )}
    </div>
  );
}

export default Calculator;
