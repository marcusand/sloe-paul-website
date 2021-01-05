import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ pagesData, links, children }) {
  return (
    <div className="h-full text-white bg-alpha overflow-hidden px-4">
      <Header pages={pagesData} />
      <main>{children}</main>
      <Footer links={links} />
    </div>
  );
}
