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
  const [clickCoords, setClickCoords] = useState<[number, number]>();
  const [src, setSrc] = useState<string | null>(plantGifSrc);
  const offset = [-35, -20];

  const handleClick = (event: MouseEvent) => {
    setClickCoords([event.clientX, event.clientY]);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (!clickCoords) return;

    setSrc(null);
    setTimeout(() => setSrc(plantGifSrc), 10);
  }, [clickCoords]);

  /* eslint-disable @next/next/no-img-element */

  return (
    <div className="layout w-full h-full flex flex-col px-1 pb-1 md:pb-0 md:px-4 ">
      <Header links={generalData.links} shopLink={generalData.shop_link} />
      <main className="overflow-y-scroll overflow-x-hidden">{children}</main>
      <Footer links={generalData.links} />
      {clickCoords ? (
        <img
          src={src || ""}
          alt=""
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
