import React, { useEffect, useState } from "react";
import { GeneralData } from "../api/interfaces";
import { Footer } from "./Footer";
import { Header } from "./Header";

const plantGifSrc = "/animations/plant.gif";

interface Props {
  generalData: GeneralData;
  children: React.ReactElement;
}

export const Layout: React.FC<Props> = ({ generalData, children }) => {
  const [clickCoords, setClickCoords] = useState();
  const [src, setSrc] = useState(plantGifSrc);
  const offset = [-35, -20];

  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("click", (e) => {
      setClickCoords([e.clientX, e.clientY]);
    });
  }, []);

  useEffect(() => {
    if (!clickCoords) return;

    setSrc(null);
    setTimeout(() => setSrc(plantGifSrc), 0);
  }, [clickCoords]);

  // if (!pagesData) return null;

  return (
    <div className="layout w-full h-full flex flex-col px-1 pb-1 md:pb-0 md:px-4 ">
      <Header links={generalData.links} shopLink={generalData.shop_link} />
      <main className="overflow-y-scroll overflow-x-hidden">{children}</main>
      <Footer links={generalData.links} />
      {clickCoords ? (
        <img
          src={src}
          className="fixed top-0 left-0 w-16 z-50 pointer-events-none"
          style={{
            transform: `translate(${clickCoords[0] + offset[0]}px, ${
              clickCoords[1] + offset[1]
            }px)`,
          }}
        />
      ) : null}
    </div>
  );
};
