"use client";
import { useWeb3 } from "@/hooks/useWeb3";
import { useState, useEffect } from "react";

function Header() {
  const { wallet, signedAccountId, contract } = useWeb3();

  const [assignedSetting, setAssignedSetting] = useState(false);

  const handleSetGreeting = async () => {
    contract.setGreeting();
    console.log("Onclick set greeting");
  };

  const handleGetGreeting = async () => {
    contract.getGreeting();
    console.log("Onclick get greeting");
  };

  return (
    <div>
      {signedAccountId ? (
        <>
          <button>{signedAccountId}</button>
          <button onClick={() => wallet.signOut()}>Sign Out</button>
          <button className="bg-green-500 ml-5" onClick={handleSetGreeting}>
            Set Greeting
          </button>
          <button className="bg-blue-500 ml-5" onClick={handleGetGreeting}>
            Get Greeting
          </button>
        </>
      ) : (
        <button onClick={() => wallet.signIn()}>Connect</button>
      )}
    </div>
  );
}

export default Header;
