import React from "react";

interface CalculatorProps {
  name: string;
}

function Calculator({ name }: CalculatorProps) {
  return <div>Calculator {name}</div>;
}

export default Calculator;
