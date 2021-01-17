import Links from "./Links";

export default function Footer({ links }) {
  return (
    <footer className="hidden md:flex justify-between items-center">
      <div className="logo italic">Sloe Paul</div>
      <Links className="links" links={links} />
    </footer>
  );
}
