import React from "react";

export default function Layout({ pagesData, children }) {
  return (
    <div className="main h-full flex flex-col">
      <main>{children}</main>
    </div>
  );
}
