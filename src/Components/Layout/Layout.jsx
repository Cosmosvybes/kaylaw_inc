import React from "react";
import Nav from "../Nav";
const Layout = ({ children }) => {
  return (
    <div className="w-full flex-col flex h-auto">
      <Nav />

      <div className="relative w-full">
        {children}  </div>
    </div>
  );
};

export default Layout;
