import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";

import React from "react";

const Header: React.FC = () => {
  const addr = useTonAddress();
  console.log("addr", addr);
  return (
    <header className="sticky top-0 z-1 flex w-full items-center justify-center">
      <TonConnectButton />
    </header>
  )
}

export default Header;
