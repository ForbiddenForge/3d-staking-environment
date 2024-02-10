import React from "react";
import { createRoot } from "react-dom/client";

import App from './App.jsx'
import './style.css'
import './components/main.css'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains"
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
      activeChain={ Sepolia }
    >
      <App />
      <Toaster />
    </ThirdwebProvider>
  </React.StrictMode>
  
  )