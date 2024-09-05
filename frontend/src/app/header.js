"use client";
import { useWeb3 } from "@/hooks/useWeb3";

function Header() {
  const { wallet, signedAccountId } = useWeb3();
  // console.log(signedAccountId);

  return (
    <div>
      {signedAccountId ? (
        <>
          <button>{signedAccountId}</button>
          <button onClick={() => wallet.signOut()}>Sign Out</button>
        </>
      ) : (
        <button onClick={() => wallet.signIn()}>Connect</button>
      )}
    </div>
  );
}

export default Header;
