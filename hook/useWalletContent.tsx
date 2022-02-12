import React, { useState } from "react";
import { getWalletContent as contentSpaceCraftx } from "../api/game/spacecraftx";
import { spxCode } from "../api/game";

interface WalletContentProps {
  code: string;
}

function useWalletContent({ code }: WalletContentProps) {
  const [data, setData] = useState<unknown>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async (wallet: string) => {
    setLoading(true);
    let response = [];
    if (code === spxCode) response = await contentSpaceCraftx(wallet);
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
