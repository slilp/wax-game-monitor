import React, { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hook";
import { getBalance } from "../api/eos";

interface BalanceProps {
  wallet: string;
}

export interface WalletBalance {
  token: string;
  amount: number;
  wax: number;
  usd: number;
  thb: number;
}

function useBalance({ wallet }: BalanceProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<WalletBalance[]>([]);

  const waxData = useAppSelector((state) => state.wax);

  const initialBalance = async () => {
    setLoading(true);
    try {
      const balances = await getBalance(wallet);

      const response: WalletBalance[] = balances.data.balances.map((token) => {
        const tokenPrice = waxData.tokens.find(
          (i) => i.symbol === token.currency
        )?.price;
        if (tokenPrice) {
          return {
            token: token.currency,
            amount: parseFloat(token.amount),
            wax:
              token.currency === "WAX"
                ? parseFloat(token.amount)
                : tokenPrice * parseFloat(token.amount),
            usd:
              token.currency === "WAX"
                ? waxData.waxToUsd * parseFloat(token.amount)
                : tokenPrice * waxData.waxToUsd * parseFloat(token.amount),
            thb:
              token.currency === "WAX"
                ? waxData.waxToThb * parseFloat(token.amount)
                : tokenPrice * waxData.waxToThb * parseFloat(token.amount),
          };
        }
        return {
          token: token.currency,
          amount: parseFloat(token.amount),
          wax: 0,
          usd: 0,
          thb: 0,
        };
      });
      setLoading(false);
      setData(response);
    } catch (error) {
      setLoading(false);
      setData([]);
    }
  };

  useEffect(() => {
    if (waxData.tokens.length !== 0) {
      initialBalance();
    }
  }, [waxData, wallet]);

  return {
    data,
    loading,
  };
}

export default useBalance;
