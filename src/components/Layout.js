import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ pagesData, links, children }) {
  if (!pagesData) return null;
  return (
    <div className="layout w-full h-full flex flex-col px-1 pb-1 md:pb-0 md:px-4 uppercase">
      <Header pages={pagesData} links={links} />
      <main className="overflow-y-scroll overflow-x-hidden">{children}</main>
      <Footer links={links} />
    </div>
  );
}
