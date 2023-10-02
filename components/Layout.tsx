import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar fixed />

      <main className="overflow-hidden">{children}</main>
    </>
  );
}
