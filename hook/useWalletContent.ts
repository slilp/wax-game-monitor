import React, { useState } from "react";
import {
  getWalletContent as contentSpaceCraftx,
  game as codeSpaceCraftX,
} from "../api/game/spacecraftx";

interface WalletContentProps {
  code: string;
}

function useWalletContent({ code }: WalletContentProps) {
  const [data, setData] = useState<unknown>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async (wallet: string) => {
    setLoading(true);
    let response = [];
    if (code === codeSpaceCraftX) response = await contentSpaceCraftx(wallet);
    setData(response);
    setLoading(false);
  };

  return {
    data,
    loading,
    fetchingData,
  };
}

export default useWalletContent;
