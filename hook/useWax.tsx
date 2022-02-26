import React, { useState, useEffect } from "react";
import { getTokenPrice, getWaxPrice, getWaxPriceInTHB } from "../api/alcor";
import { WaxPrice, TokenPrice } from "../api/alcor/modal";

function useWax() {
  const [tokens, setTokens] = useState<TokenPrice[]>([]);
  const [wax, setWax] = useState<WaxPrice>({
    wax: {
      usd: 0,
    },
  });
  const [waxThb, setWaxThb] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    setLoading(true);
    const waxRespose = await getWaxPrice();
    const tokenRespose = await getTokenPrice();
    const tokenThbRespose = await getWaxPriceInTHB();
    setTokens(tokenRespose.data);
    setWax(waxRespose.data);
    setWaxThb(tokenThbRespose.data.data[2300].quote[2809].price);
    setLoading(false);
  };

  return {
    tokens,
    wax,
    waxThb,
    loading,
  };
}

export default useWax;
