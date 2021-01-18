import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ pagesData, links, children }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [clickCoords, setClickCoords] = useState();
  const offset = [-45, -20];
  const animationLength = 500;

  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("click", (e) => {
      setClickCoords([e.clientX, e.clientY]);
    });
  }, []);

  useEffect(() => {
    if (!clickCoords) return;

    setShowAnimation(true);

    setTimeout(() => setShowAnimation(false), animationLength);
  }, [clickCoords]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (showAnimation) {
      body.style.cursor = "none";
    } else {
      body.style.cursor = "default";
    }
  }, [showAnimation]);

  if (!pagesData) return null;
  return (
    <div className="layout w-full h-full flex flex-col px-1 pb-1 md:pb-0 md:px-4 ">
      <Header pages={pagesData} links={links} />
      <main className="overflow-y-scroll overflow-x-hidden">{children}</main>
      <Footer links={links} />
      {showAnimation ? (
        <img
          src="/animations/plant.png"
          className="fixed top-0 left-0 w-24"
          style={{
            transform: `translate(${clickCoords[0] + offset[0]}px, ${
              clickCoords[1] + offset[1]
            }px)`,
          }}
        />
      ) : null}
    </div>
  );
}
