import React, { useState } from "react";
import { getTokenPrice, getWaxPrice } from "../api/alcor";
import { WaxPrice, TokenPrice } from "../api/alcor/modal";

function useWax() {
  const [tokens, setTokens] = useState<TokenPrice[]>([]);
  const [wax, setWax] = useState<WaxPrice>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    setLoading(true);
    const waxRespose = await getWaxPrice();
    const tokenRespose = await getTokenPrice();
    setTokens(tokenRespose.data);
    setWax(waxRespose.data);
    setLoading(false);
  };

  return {
    tokens,
    wax,
    fetchingData,
  };
}

export default useWax;
