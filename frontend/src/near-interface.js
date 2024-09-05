"use client";
export class Contract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  getGreeting = async () => {
    const result = await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_greeting",
    });

    console.log("Result", result);

    return result;
  };

  setGreeting = async () => {
    const result = await this.wallet.callMethod({
      constractId: this.contractId,
      method: "set_greeting",
      args: { greeting: "Viet hoa number one" },
    });

    console.log("Update Greeting done");
  };
}
