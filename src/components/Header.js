import Navigation from "./Navigation";
import menuIcon from "!!raw-loader!../assets/icons/menu.svg";
import { useState } from "react";
import Links from "./Links";

export default function Header({ pages, links }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center">
      <Navigation className="nav hidden md:block" pages={pages} />
      <div
        className="w-8 fill-current md:hidden"
        dangerouslySetInnerHTML={{ __html: menuIcon }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />
      <div className="logo">Sloe Paul</div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-blackTransparent flex flex-col items-center justify-center ${
          mobileMenuOpen ? "" : "hidden"
        }`}
      >
        <Navigation className="mobile-nav" pages={pages} />
        ---
        <Links className="mobile-links" links={links} />
        ---
        <div className="uppercase text-xl" onClick={() => setMobileMenuOpen(false)}>
          close
        </div>
      </div>
    </header>
  );
}
