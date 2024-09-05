"use client";
import Web3Provider from "./Web3Provider";

function Provider({ children }) {
  return <Web3Provider>{children}</Web3Provider>;
}

export default Provider;
