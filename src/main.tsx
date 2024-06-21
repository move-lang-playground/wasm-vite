import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { AptosWalletAdapterProvider,  } from "@aptos-labs/wallet-adapter-react";
import {Network} from "@aptos-labs/ts-sdk"
render(<AptosWalletAdapterProvider
    plugins={[
    ]}
    autoConnect={true}
    dappConfig={{network: Network.DEVNET}}
    onError={(error: any) => {
      console.log("error", error);
    }}
  >
    <App />
  </AptosWalletAdapterProvider>, document.getElementById('app')!)
