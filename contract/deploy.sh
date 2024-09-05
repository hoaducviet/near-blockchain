#!/bin/sh
. .env

./build.sh

if [ $? -ne 0 ];then
    echo "Error building contract"
    exit 1
fi

echo ">> Deploying contract"

near account import-account using-web-wallet network-config testnet

near create-account $CONTRACT_ID --masterAccount $ACCOUNT_ID --initialBalance 100

# deploy the contract
near contract deploy $CONTRACT_ID use-file target/wasm32-unknown-unknown/release/contract.wasm without-init-call network-config $NEAR_ENV sign-with-keychain send

# near dev-deploy --wasmFile target/wasm32-unknown-unknown/release/contract.wasm