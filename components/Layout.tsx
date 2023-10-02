import React from "react";

import Navbar from "components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar fixed />

      <main className="overflow-hidden">{children}</main>
    </>
  );
}
