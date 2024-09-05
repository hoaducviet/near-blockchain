"use client";

import { Wallet } from "@/wallets/near";
import { Contract } from "@/near-interface";
import { useState, createContext, useEffect } from "react";
import { NetworkId, ContractId } from "@/config";

export const Web3Context = createContext({});

function Web3Provider({ children }) {
  const [signedAccountId, setSignedAccountId] = useState("");
  const [web3, setWeb3] = useState({
    wallet: null,
    contract: null,
    isSignedIn: null,
  });
  console.log(web3);

  useEffect(() => {
    const loadProvider = async () => {
      try {
        const wallet = new Wallet({
          networkId: NetworkId,
          createAccessKeyFor: ContractId,
        });

        const contract = new Contract({
          contractId: ContractId,
          walletToUse: wallet,
        });

        await wallet.startUp(setSignedAccountId);

        setWeb3({
          wallet,
          contract,
          signedAccountId,
        });
      } catch (error) {
        console.error("Error loading provider:", error);
      }
    };

    loadProvider();
  }, []);

  useEffect(() => {
    setWeb3({
      ...web3,
      signedAccountId: signedAccountId,
    });
  }, [signedAccountId]);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

export default Web3Provider;
