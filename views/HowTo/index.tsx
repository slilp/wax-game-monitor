import React from "react";

interface CalculatorProps {
  name: string;
}

function HowTo({ name }: CalculatorProps) {
  return <div>HowTo{name}</div>;
}

export default HowTo;
