import Navigation from "./Navigation";

export default function Header({ pages }) {
  return (
    <header className="flex justify-between items-center">
      <Navigation className="nav" pages={pages} />
      <div className="logo">Sloe Paul</div>
    </header>
  );
}
