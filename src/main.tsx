import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
render(<AptosWalletAdapterProvider
    plugins={[]}
    autoConnect={true}
    onError={(error: any) => {
      console.log("error", error);
    }}
  >
    <App />
  </AptosWalletAdapterProvider>, document.getElementById('app')!)
