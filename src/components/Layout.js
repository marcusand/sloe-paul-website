import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ pagesData, links, children }) {
  return (
    <div className="layout text-white bg-alpha px-1 pb-1 md:pb-0 md:px-4 uppercase">
      <Header pages={pagesData} links={links} />
      <main className="overflow-y-scroll">{children}</main>
      <Footer links={links} />
    </div>
  );
}
