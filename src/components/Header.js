import Navigation from "./Navigation";
import { useState } from "react";
import Links from "./Links";
import { MenuIcon } from "../assets/icons/menu";

export default function Header({ pages, links }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center">
      <Navigation className="nav hidden md:flex" pages={pages} />
      <div
        className="w-8 fill-current md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <MenuIcon />
      </div>
      <div className="logo">Sloe Paul</div>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-blackTransparent flex flex-col items-center justify-center z-50 ${
          mobileMenuOpen ? "" : "hidden"
        }`}
      >
        <Navigation
          className="mobile-nav"
          pages={pages}
          onItemClick={() => setMobileMenuOpen(false)}
        />
        ---
        <Links className="mobile-links" links={links} />
        ---
        <div
          className="uppercase text-xl text-alpha cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          close
        </div>
      </div>
    </header>
  );
}
