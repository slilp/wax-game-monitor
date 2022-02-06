import React from "react";

interface CalculatorProps {
  name: string;
}

function Game({ name }: CalculatorProps) {
  return <div>Game{name}</div>;
}

export default Game;
