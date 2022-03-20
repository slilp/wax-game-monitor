import React, { useState, useEffect } from "react";
import { galaxyCode } from "../api/game";
import { InGameTokenInfo, InGameInfo } from "../api/game/modal";
import { getWalletContent as getWalletContentGalaxy } from "../api/game/galaxyminerx";

export interface InGameAccountInfo {
  [key: string]: {
    inGameStakeData: string[];
    inGameTokenData: InGameTokenInfo[];
  };
}

function useAllInGameAccount({ wallet }: { wallet: string }) {
  const [data, setData] = useState<InGameAccountInfo>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getInGameAsset();
  }, []);

  const getInGameAsset = async () => {
    setLoading(true);
    const galaxyResponse = await getWalletContentGalaxy(wallet);
    setData({
      [galaxyCode]: {
        inGameStakeData: galaxyResponse.inGameStake,
        inGameTokenData: galaxyResponse.inGameToken,
      },
    });
    setLoading(false);
  };

  return {
    data,
    loading,
  };
}

export default useAllInGameAccount;
