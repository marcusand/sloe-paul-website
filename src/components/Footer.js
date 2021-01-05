import Links from "./Links";

export default function Footer({ links }) {
  return (
    <header className="flex justify-between items-center">
      <div className="logo">Sloe Paul</div>
      <Links className="links" links={links} />
    </header>
  );
}
