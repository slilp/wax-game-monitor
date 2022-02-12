import React from "react";
import useContent from "../../hook/useContent";

export interface CalculatorProps {
  code: string;
}

function Calculator({ code }: CalculatorProps) {
  const { data, loading } = useContent({ code });

  return (
    <div>
      {code}
      {loading && <div>LOADING...</div>}
      {!loading && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default Calculator;
