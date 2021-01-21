import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const plantGifSrc = "/animations/plant.gif";

export default function Layout({ pagesData, links, children }) {
  const [clickCoords, setClickCoords] = useState();
  const [src, setSrc] = useState(plantGifSrc);
  const offset = [-35, -20];
  const animationLength = 550;

  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("click", (e) => {
      setClickCoords([e.clientX, e.clientY]);
    });
  }, []);

  useEffect(() => {
    if (!clickCoords) return;

    setSrc(plantGifSrc);
    setTimeout(() => setSrc(null), animationLength);
  }, [clickCoords]);

  if (!pagesData) return null;
  return (
    <div className="layout w-full h-full flex flex-col px-1 pb-1 md:pb-0 md:px-4 ">
      <Header pages={pagesData} links={links} />
      <main className="overflow-y-scroll overflow-x-hidden">{children}</main>
      <Footer links={links} />
      {clickCoords ? (
        <img
          src={src}
          className="fixed top-0 left-0 w-16 z-50"
          style={{
            transform: `translate(${clickCoords[0] + offset[0]}px, ${
              clickCoords[1] + offset[1]
            }px)`,
          }}
          alt="Plant"
        />
      ) : null}
    </div>
  );
}
