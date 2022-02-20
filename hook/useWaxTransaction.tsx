import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import {
  login as loginWax,
  logout as logoutWax,
} from "../redux/reducer/accountSlice";
import * as waxjs from "@waxio/waxjs/dist";

interface WaxAccount {
  wallet: string;
  pubKeys: string[];
}

function useWaxCloudWallet() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const accountData = useAppSelector((state) => state.account);

  const login = async () => {
    setLoading(true);
    const wax = new waxjs.WaxJS({
      rpcEndpoint: "https://wax.greymass.com",
    });

    const isAutoLoginAvailable = await wax.isAutoLoginAvailable();
    if (isAutoLoginAvailable) {
      dispatch(
        loginWax({
          wallet: wax.userAccount,
          pubKeys: wax.pubKeys,
        })
      );
    } else {
      try {
        await wax.login();
        dispatch(
          loginWax({
            wallet: wax.userAccount,
            pubKeys: wax.pubKeys,
          })
        );
      } catch (error) {
        alert("User denine");
      }
    }
    setLoading(false);
  };

  const logout = () => {
    dispatch(logoutWax());
  };

  const sendTransaction = async () => {
    if (accountData.wallet) {
      const wax = new waxjs.WaxJS({
        rpcEndpoint: "https://wax.greymass.com",
        userAccount: accountData.wallet,
        pubKeys: accountData.pubKeys,
      });
    } else {
      const wax = new waxjs.WaxJS({
        rpcEndpoint: "https://wax.greymass.com",
      });
      try {
        await wax.login();
        dispatch(
          loginWax({
            wallet: wax.userAccount,
            pubKeys: wax.pubKeys,
          })
        );
      } catch (error) {
        alert("User denine");
      }
    }

    // const result = await wax.api.transact(
    //   {
    //     actions: [
    //       {
    //         account: "eosio.token",
    //         name: "transfer",
    //         authorization: [
    //           {
    //             actor: wax.userAccount,
    //             permission: "active",
    //           },
    //         ],
    //         data: {
    //           from: wax.userAccount,
    //           to: "eosio",
    //           quantity: "0.00000001 WAX",
    //           memo: "",
    //         },
    //       },
    //     ],
    //   },
    //   {
    //     blocksBehind: 3,
    //     expireSeconds: 1200,
    //   }
    // );
  };

  return {
    loading,
    login,
    logout,
    sendTransaction,
  };
}

export default useWaxCloudWallet;
