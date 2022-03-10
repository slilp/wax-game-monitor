import React from "react";
import useGameProfit from "../../hook/useGameProfit";
import { galaxyCode } from "../../api/game";

function Port() {
  const { profitData, loading } = useGameProfit({ code: galaxyCode });
  return (
    <div>
      Port
      {!loading && JSON.stringify(profitData)}
    </div>
  );
}

export default Port;
