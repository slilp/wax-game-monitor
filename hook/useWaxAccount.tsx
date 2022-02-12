import React, { useState } from "react";
import { getBalance } from "../api/eos";
import { BalanceResponse } from "../api/eos/modal";

interface WaxWalletProps {
  code: string;
}

function useWaxWallet({ code }: WaxWalletProps) {
  const [data, setData] = useState<BalanceResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingWalletBalance = async (wallet: string): Promise<void> => {
    setLoading(true);
    const response = await getBalance(code);
    setData(response.data);
    setLoading(false);
  };

  return {
    data,
    loading,
    fetchingWalletBalance,
  };
}

export default useWaxWallet;
