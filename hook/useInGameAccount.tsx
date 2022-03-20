import React, { useState, useEffect } from "react";
import { galaxyCode } from "../api/game";
import { InGameTokenInfo, InGameInfo } from "../api/game/modal";
import { getWalletContent as getWalletContentGalaxy } from "../api/game/galaxyminerx";

interface InGameAccountProps {
  code: string;
  wallet: string;
}

function useInGameAccount({ code, wallet }: InGameAccountProps) {
  const [inGameStakeData, setInGameStakeData] = useState<string[]>();
  const [inGameTokenData, setInGameTokenData] = useState<InGameTokenInfo[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getInGameAsset();
  }, []);

  const getInGameAsset = async () => {
    setLoading(true);
    let response: InGameInfo = { inGameStake: [], inGameToken: [] };
    if (code === galaxyCode) response = await getWalletContentGalaxy(wallet);
    setInGameStakeData(response.inGameStake);
    setInGameTokenData(response.inGameToken);
    setLoading(false);
  };

  return {
    inGameStakeData,
    loading,
    inGameTokenData,
  };
}

export default useInGameAccount;
