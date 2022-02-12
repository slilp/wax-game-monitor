import React from "react";
import { AssetInfo } from "../../../api/game/modal";

function SpaceCraftX({ assets }: { assets: AssetInfo[] }) {
  return (
    <div>
      {assets.map((asset) => (
        <div key={asset.id}>
          <img src={asset.image}></img>
        </div>
      ))}
    </div>
  );
}

export default SpaceCraftX;
