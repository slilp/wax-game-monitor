import React, { useEffect, useState } from "react";
import { getTableRow } from "../../api/eos/eos";

interface CalculatorProps {
  name: string;
}

function Calculator({ name }: CalculatorProps) {
  const [data, setData] = useState<any>({});

  const fetchingData = async () => {
    const response = await getTableRow({
      code: "spacecraftxc",
      table: "users",
      scope: "spacecraftxc",
      upperBound: "giwxm.wam",
      lowerBound: "giwxm.wam",
    });
    setData(response);
  };

  useEffect(() => {
    fetchingData();
  });
  return (
    <div>
      Calculator {name} {JSON.stringify(data.data)}
    </div>
  );
}

export default Calculator;
